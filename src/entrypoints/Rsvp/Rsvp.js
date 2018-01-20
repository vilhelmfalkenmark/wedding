import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { postRsvp } from "actions/rsvp";
import { fetchGuest } from "actions/guests";
import { readCookie } from "utils/helpers/cookie";
import RsvpConfirmation from "components/RsvpConfirmation";
import RsvpForm from "components/RsvpForm";
// import RsvpForm from "./RsvpForm";
import RsvpError from "./RsvpError";
import LoadingWall from "components/LoadingWall";
import RibbonHeading from "components/RibbonHeading";

import s from "./Rsvp.scss";

import { fetchingGuestFulfilled, successfulRsvp } from "utils/selectors/rsvp";

class Rsvp extends Component {
  constructor() {
    super();
    this.state = {
      guests: "",
      songRequest: "",
      mail: "",
      allergies: "",
      relationship: "",
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
          return (
            <div className={s.container}>
              <RibbonHeading heading={"Laddar"} />
              <LoadingWall title={"Gäster"} />
            </div>
          );
        } else if (fetchingGuestFulfilled(this.props.guest)) {
          ////////////////////////////////////////////////
          // Cookie is set and guest data Successfuly fetched
          ///////////////////////////////////////////////
          return (
            <div className={s.container}>
              <RibbonHeading
                heading={`Hejsan ${this.props.guest.data.guests}!`}
              />
              <RsvpConfirmation
                guestData={this.props.guest.data}
                message={`Hejsan ${this.props.guest.data.guests}!`}
                subMessage={"Du/Ni har osat! Vi ses 2 juni :)"}
              />
            </div>
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
            <div className={s.container}>
              <RibbonHeading
                heading={`Snyggt jobbat ${this.props.rsvp.data.guests}!`}
              />
              <RsvpConfirmation
                guestData={this.props.rsvp.data}
                subMessage={"Du/ni har nu osat! Vi ses 2 juni :)"}
              />
            </div>
          );
        } else if (this.props.rsvp.error) {
          return <RsvpError />;
        } else {
          return (
            <div className={s.container}>
              <RibbonHeading heading={`Osa till vårt bröllop`} />
              <RsvpForm postRsvp={this.props.postRsvp} />
            </div>
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
  postRsvp: guestData => {
    dispatch(postRsvp(guestData));
  },
  fetchGuest: guestId => {
    dispatch(fetchGuest(guestId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
