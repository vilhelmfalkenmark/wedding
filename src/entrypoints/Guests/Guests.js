import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { fetchAllGuests } from "actions/guests";
import RibbonHeading from "components/RibbonHeading";
import GuestsSkeleton from "components/Skeletons/GuestsSkeleton";
import GuestList from "components/GuestList";
import ErrorWall from "components/ErrorWall";
import WithStyles from "layout/WithStyles";

import s from "./Guests.css";

class Guests extends Component {
  componentWillMount() {
    this.props.fetchAllGuests();
  }
  render() {
    const {
      guests: { data, fulfilled, fetching, error }
    } = this.props;

    const attendingGuests = fulfilled
      ? data.filter(guest => guest.attending)
      : [];

    const notAttendingGuests = fulfilled
      ? data.filter(guest => !guest.attending)
      : [];

    return (
      <DocumentTitle title={"Gäster till bröllopet"}>
        <main className={s({ container: true })}>
          <RibbonHeading heading={"Gäster som har Osat"} />
          {fetching && !error ? (
            <GuestsSkeleton />
          ) : fulfilled && !error ? (
            <div>
              {attendingGuests.length > 0 && (
                <GuestList heading={"Kommer"} guests={attendingGuests} />
              )}
              {notAttendingGuests.length > 0 && (
                <GuestList
                  heading={"Kommer tyvärr inte :("}
                  guests={notAttendingGuests}
                />
              )}
            </div>
          ) : (
            <ErrorWall
              heading={
                "Det verkar som att något gick fel när gäster skulle hämtas"
              }
            />
          )}
        </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  WithStyles(Guests, s)
);
