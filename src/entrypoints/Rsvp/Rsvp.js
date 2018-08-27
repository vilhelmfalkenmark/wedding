import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { fetchGuest } from "actions/guests";
import { readCookie } from "utils/helpers/cookie";
import RsvpConfirmation from "components/RsvpConfirmation";
import RsvpForm from "components/RsvpForm";
import RsvpError from "./RsvpError";
import RsvpSkeleton from "components/Skeletons/RsvpSkeleton";
import RibbonHeading from "components/RibbonHeading";
import WithStyles from "layout/WithStyles";

import copy from "utils/copy";

import s from "./Rsvp.css";

import { fetchingGuestFulfilled, successfulRsvp } from "utils/selectors/rsvp";

class Rsvp extends Component {
  constructor() {
    super();

    this.cookieIsSet = readCookie();
  }
  componentWillMount() {
    if (this.cookieIsSet) {
      this.props.fetchGuest(this.cookieIsSet.id);
    }
  }
  render() {
    const rsvpHtml = () => {
      ////////////////////////////////////////////////
      // NOTE Cookie IS set and guest have already RSVP
      ///////////////////////////////////////////////
      if (this.cookieIsSet) {
        if (this.props.guest.fetching) {
          return (
            <main className={s({ container: true })}>
              <RibbonHeading heading={"Laddar"} />
              <RsvpSkeleton />
            </main>
          );
        } else if (fetchingGuestFulfilled(this.props.guest)) {
          ////////////////////////////////////////////////
          // Cookie is set and guest data Successfuly fetched
          ///////////////////////////////////////////////
          return (
            <main className={s({ container: true })}>
              <RibbonHeading
                heading={`Hejsan ${this.props.guest.data.guests}!`}
              />
              <RsvpConfirmation
                guestData={this.props.guest.data}
                message={`Hejsan ${this.props.guest.data.guests}!`}
                attendingMessage={`Du/Ni har osat! Vi ses ${
                  copy.weddingDate
                } :)`}
                notAttendingMessage={
                  "Du/Ni har osat! Tråkigt att du/ni inte kan komma :("
                }
              />
            </main>
          );
        } else if (this.props.guest.error) {
          ////////////////////////////////////////////////
          // Cookie is set but an error occured
          ///////////////////////////////////////////////
          return <RsvpError />;
        }
      } else {
        ////////////////////////////////////////////////
        // NOTE Cookie IS NOT set and guest needs to RSVP
        ///////////////////////////////////////////////
        if (successfulRsvp(this.props.rsvp)) {
          return (
            <main className={s({ container: true })}>
              <RibbonHeading
                heading={`Snyggt jobbat ${this.props.rsvp.data.guests}!`}
              />
              <RsvpConfirmation
                guestData={this.props.rsvp.data}
                attendingMessage={`Du/Ni har osat! Vi ses ${
                  copy.weddingDate
                } :)`}
                notAttendingMessage={
                  "Du/Ni har osat! Tråkigt att du/ni inte kan komma :("
                }
              />
            </main>
          );
        } else if (this.props.rsvp.error) {
          return <RsvpError />;
        } else {
          return (
            <main className={s({ container: true })}>
              <RibbonHeading heading={`Osa till vårt bröllop`} />
              <RsvpForm />
            </main>
          );
        }
      }
    };

    return (
      <DocumentTitle title={"Osa till vårt bröllop"}>
        {rsvpHtml()}
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  rsvp: state.rsvp,
  guest: state.guests.guest
});

const mapDispatchToProps = dispatch => ({
  fetchGuest: guestId => {
    dispatch(fetchGuest(guestId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithStyles(Rsvp, s));
