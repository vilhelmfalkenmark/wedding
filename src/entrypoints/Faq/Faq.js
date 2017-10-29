import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";

class Faq extends Component {
  render() {
    return (
      <DocumentTitle title={"Vanliga frågor"}>
        <main className="Main-container">
          <div className="Main-inner">
            <h1>Vanliga frågor</h1>
          </div>
        </main>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  Faq: "state.faq"
});

export default connect(mapStateToProps)(Faq);
