import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { fetchAllGuests } from "actions/guests";

class Guests extends Component {
  componentWillMount() {
    this.props.fetchAllGuests();
  }
  render() {
    const { guests: { data, fulfilled, fetching, error } } = this.props;

    return (
      <DocumentTitle title={"Gäster till bröllopet"}>
        <div className="Main-inner">
          <h1>
            Gäster som har Osat
            <span role="img" aria-label="Thumbs up emoji">
              👍🏻
            </span>
          </h1>
          {fetching && !error ? (
            <p>Hämtar gäster</p>
          ) : fulfilled && !error ? (
            <ul className="Guest-list">
              {data.map((f, index) => (
                <li key={index} className="Guest-card">
                  <p>Gäst/Gäster: {f.guests}</p>
                  <p>Önskelåt: {f.songRequest}</p>
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
  guests: state.guests.guests
});

const mapDispatchToProps = dispatch => ({
  fetchAllGuests: () => {
    dispatch(fetchAllGuests());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Guests);
