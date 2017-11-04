import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { postRsvp } from "actions/rsvp";
import Input from "components/Input";

class Rsvp extends Component {
  constructor() {
    super();
    this.state = {
      guestName: "",
      songRequest: "",
      attending: true
    };
  }
  componentWillMount() {
    // const { guests } = this.props;
    // if (guests.fulfilled === false) {
    //   this.props.fetchAllGuests();
    // }
  }
  render() {
    return (
      <DocumentTitle title={"Osa till vårt bröllop"}>
        <div className="Main-inner">
          <h1>Osa till vårt bröllop</h1>
          <Input
            inputPlaceholder="Namn på gäst/gäster"
            inputLabel="Namn på gäst/gäster"
            inputName="Name"
            inputDisabled={false}
            inputValue={this.state.guestName}
            inputOnChange={value =>
              this.setState({
                guestName: value
              })}
          />
          <Input
            inputPlaceholder="Önskelåt"
            inputLabel="Önskelåt"
            inputName="Song"
            inputDisabled={false}
            inputValue={this.state.songRequest}
            inputOnChange={value =>
              this.setState({
                songRequest: value
              })}
          />
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  guests: "state.guests"
});

const mapDispatchToProps = dispatch => ({
  postRsvp: guestData => {
    dispatch(postRsvp(guestData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
