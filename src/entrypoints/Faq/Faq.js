import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { fetchFaq } from "actions/faq";

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
        <div className="Main-inner">
          <h1>Frågor och svar</h1>
          {fetching && !error ? (
            <p>Hämtar frågor och svar</p>
          ) : fulfilled && !error ? (
            <ul>
              {faq.map((f, index) => (
                <li key={index} className="Faq-item">
                  <h4>{f.question}</h4>
                  <p>{f.answer}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Något gick fel!</p>
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
