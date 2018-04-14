import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { fetchFaq } from "actions/faq";
import FaqItem from "./FaqItem";
import RibbonHeading from "components/RibbonHeading";
import ErrorWall from "components/ErrorWall";
import FaqSkeleton from "components/Skeletons/FaqSkeleton";
import WithStyles from "layout/WithStyles";

import s from "./Faq.css";

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
        <main className={s.container}>
          <RibbonHeading heading={"Vanliga frågor"} />
          {fetching && !error ? (
            <FaqSkeleton />
          ) : fulfilled && !error ? (
            <ul className={s.list}>
              {faq.map((f, index) => (
                <FaqItem question={f.question} answer={f.answer} key={index} />
              ))}
            </ul>
          ) : (
            <ErrorWall />
          )}
        </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(WithStyles(Faq, s));
