import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { fetchAllGuests } from "actions/guests";

class Guests extends Component {
  componentWillMount() {
    const { guests } = this.props;
    if (guests.fulfilled === false) {
      this.props.fetchAllGuests();
    }
  }
  render() {
    const { guests: { guests, fulfilled, fetching, error } } = this.props;

    return (
      <DocumentTitle title={"Gäster till bröllopet"}>
        <div className="Main-inner">
          <h1>Gäster</h1>
          {fetching && !error ? (
            <p>Hämtar gäster</p>
          ) : fulfilled && !error ? (
            <ul>
              {guests.map((f, index) => (
                <li key={index} className="Guest-item" />
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
  guests: state.guests
});

const mapDispatchToProps = dispatch => ({
  fetchAllGuests: () => {
    dispatch(fetchAllGuests());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Guests);
