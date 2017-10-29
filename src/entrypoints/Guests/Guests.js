import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";

class Guests extends Component {
  render() {
    return (
      <DocumentTitle title={"Gäster till bröllopet"}>
        <main className="Main-container">
          <div className="Main-inner">
            <h1>Gäster</h1>
          </div>
        </main>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  guests: "state.guests"
});

export default connect(mapStateToProps)(Guests);
