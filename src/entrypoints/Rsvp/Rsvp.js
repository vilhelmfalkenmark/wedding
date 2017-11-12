import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";

import { postRsvp } from "actions/rsvp";
import { fetchGuest } from "actions/guests";
import { readCookie } from "utils/helpers/cookie";
import RsvpForm from "./RsvpForm";
import RsvpCard from "./RsvpCard";
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
      // Cookie is set and guest have already RSVP
      if (this.cookieIsSet) {
        if (this.props.guest.fetching) {
          return <p>Hämtar gästdata</p>;
        } else if (!this.props.guest.fetching && this.props.guest.fulfilled) {
          return (
            <RsvpCard
              guestData={this.props.guest.data}
              message={`Hejsan ${this.props.guest.data.guests}!`}
              subMessage={"Du/Ni har redan osat! Vi ses 2 juni :)"}
            />
          );
        } else if (this.props.guest.error) {
          return <p>Error</p>;
        }
        // Successful RSVP
      } else if (this.props.rsvp.fulfilled) {
        return (
          <RsvpCard
            guestData={this.props.rsvp.data}
            message={`Snyggt jobbat ${this.props.rsvp.data.guests}!`}
            subMessage={"Du/ni har nu osat! Vi ses 2 juni :)"}
          />
        );
      } else {
        // Cookie is not set and guest needs to RSVP
        return <RsvpForm postRsvp={this.props.postRsvp} />;
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
