import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { fetchAllGuests } from "actions/guests";
import RibbonHeading from "components/RibbonHeading";
import LoadingWall from "components/LoadingWall";
import ErrorWall from "components/ErrorWall";
import s from "./Guests.scss";

class Guests extends Component {
  componentWillMount() {
    this.props.fetchAllGuests();
  }
  render() {
    const { guests: { data, fulfilled, fetching, error } } = this.props;

    return (
      <DocumentTitle title={"Gäster till bröllopet"}>
        {fetching && !error ? (
          <LoadingWall title={"Gäster till bröllopet"} />
        ) : fulfilled && !error ? (
          <div className={s.container}>
            <RibbonHeading heading={"Gäster som har Osat"} />
            <ul className={s.list}>
              {data.map((f, index) => (
                <li key={index} className={s.item}>
                  <p>Gäst/Gäster: {f.guests}</p>
                  <p>Önskelåt: {f.songRequest}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ErrorWall />
        )}
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
