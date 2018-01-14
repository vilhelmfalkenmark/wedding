import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { fetchFaq } from "actions/faq";
import FaqItem from "./FaqItem";
import RibbonHeading from "components/RibbonHeading";
import LoadingWall from "components/LoadingWall";
import ErrorWall from "components/ErrorWall";
import s from "./Faq.scss";

class Faq extends Component {
  componentWillMount() {
    const { faq } = this.props;
    if (faq.fulfilled === false) {
      this.props.fetchFaq();
    }
  }

  render() {
    const { faq: { faq, fulfilled, fetching, error } } = this.props;

    return (
      <DocumentTitle title={"Vanliga frågor"}>
        <div className={s.container}>
          <RibbonHeading heading={"Vanliga frågor"} />
          {fetching && !error ? (
            <LoadingWall title={"Vanliga frågor"} />
          ) : fulfilled && !error ? (
            <ul className={s.list}>
              {faq.map((f, index) => (
                <FaqItem question={f.question} answer={f.answer} key={index} />
              ))}
            </ul>
          ) : (
            <ErrorWall />
          )}
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  faq: state.faq
});

const mapDispatchToProps = dispatch => ({
  fetchFaq: () => {
    dispatch(fetchFaq());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Faq);
