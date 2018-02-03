import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { fetchAllGuests } from "actions/guests";
import RibbonHeading from "components/RibbonHeading";
import GuestsSkeleton from "components/Skeletons/GuestsSkeleton";
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
        <div className={s.container}>
          <RibbonHeading heading={"Gäster som har Osat"} />
          {fetching && !error ? (
            <GuestsSkeleton />
          ) : fulfilled && !error ? (
            <ul className={s.list}>
              {data.map((f, index) => (
                <li key={index} className={s.item}>
                  <p>
                    <strong>Gäst/Gäster:</strong>&nbsp;
                    <span>{f.guests}</span>
                  </p>
                  <p>
                    <strong>Relation till brudparet:</strong>&nbsp;
                    <span>{f.relationship}</span>
                  </p>
                  {f.songRequest ? (
                    <p>
                      <strong>Önskelåt:</strong>&nbsp;
                      <span>{f.songRequest}</span>
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <ErrorWall
              heading={
                "Det verkar som att något gick fel när gäster skulle hämtas"
              }
            />
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
