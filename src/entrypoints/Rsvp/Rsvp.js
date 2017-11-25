import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { postRsvp } from "actions/rsvp";
import { fetchGuest } from "actions/guests";
import { readCookie } from "utils/helpers/cookie";
import RsvpForm from "./RsvpForm";
import RsvpCard from "./RsvpCard";
import RsvpError from "./RsvpError";

import { fetchingGuestFulfilled, successfulRsvp } from "utils/selectors/rsvp";

class Rsvp extends Component {
  constructor() {
    super();
    this.state = {
      guests: "",
      songRequest: "",
      mail: "",
      allergies: "",
      attending: true
    };
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
          return <p>Hämtar data</p>;
        } else if (fetchingGuestFulfilled(this.props.guest)) {
          ////////////////////////////////////////////////
          // Cookie is set and guest data Successfuly fetched
          ///////////////////////////////////////////////
          return (
            <RsvpCard
              guestData={this.props.guest.data}
              message={`Hejsan ${this.props.guest.data.guests}!`}
              subMessage={"Du/Ni har osat! Vi ses 2 juni :)"}
            />
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
            <RsvpCard
              guestData={this.props.rsvp.data}
              message={`Snyggt jobbat ${this.props.rsvp.data.guests}!`}
              subMessage={"Du/ni har nu osat! Vi ses 2 juni :)"}
            />
          );
        } else if (this.props.rsvp.error) {
          return <RsvpError />;
        } else {
          return <RsvpForm postRsvp={this.props.postRsvp} />;
        }
      }
    };

    return (
      <DocumentTitle title={"Osa till vårt bröllop"}>
        <div className="Main-inner">{rsvpHtml()}</div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  rsvp: state.rsvp,
  guest: state.guests.guest
});

const mapDispatchToProps = dispatch => ({
  postRsvp: guestData => {
    dispatch(postRsvp(guestData));
  },
  fetchGuest: guestId => {
    dispatch(fetchGuest(guestId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
