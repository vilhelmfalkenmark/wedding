import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import Input from "components/Input";
import SwitchButton from "components/SwitchButton";
import Button from "components/Button";
import { postRsvp } from "actions/rsvp";
import regex from "utils/helpers/regex";

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
  }
  componentWillMount() {
    // const { guests } = this.props;
    // if (guests.fulfilled === false) {
    //   this.props.fetchAllGuests();
    // }
  }
  render() {
    console.log(this.props.rsvp);

    return (
      <DocumentTitle title={"Osa till vårt bröllop"}>
        <div className="Main-inner">
          <form className="Form-container">
            <h1>Osa till vårt bröllop</h1>
            <Input
              inputLabel="Namn på gäst/gäster"
              inputPlaceholder="Exempelvis: Johanna Olsson och Vilhelm Falkenmark"
              inputName="Name"
              inputDisabled={false}
              inputValue={this.state.guests}
              inputOnChange={value =>
                this.setState({
                  guests: value
                })}
            />
            <Input
              inputLabel="Mailadress"
              inputPlaceholder="Exempelvis: guest@guestyMcGuestFace"
              inputName="mail"
              inputDisabled={false}
              inputValue={this.state.mail}
              inputOnChange={value =>
                this.setState({
                  mail: value
                })}
            />
            <Input
              inputLabel="Eventuell Specialkost (Det kommer finnas vegeteriska alternativ)"
              inputPlaceholder="Exempelvis: Nötallergiker"
              inputName="allergies"
              inputDisabled={false}
              inputValue={this.state.allergies}
              inputOnChange={value =>
                this.setState({
                  allergies: value
                })}
            />
            <Input
              inputLabel="Önskelåt till dansgolvet"
              inputPlaceholder="Exempelvis: GES - När vi gräver guld i USA"
              inputName="Song"
              inputDisabled={false}
              inputValue={this.state.songRequest}
              inputOnChange={value =>
                this.setState({
                  songRequest: value
                })}
            />
            <SwitchButton
              onClickCallback={e => {
                e.preventDefault();
                this.setState({
                  attending: !this.state.attending
                });
              }}
              disabled={false}
              switchOn={this.state.attending}
              label={
                this.state.attending ? "Kommer :)" : "Kommer tyvärr inte :("
              }
            />
            <div className="u-Center">
              {this.state.guests.length > 5 &&
                regex.mail.test(this.state.mail) && (
                  <Button
                    onClickCallback={e => {
                      e.preventDefault();
                      this.props.postRsvp({
                        guests: this.state.guests,
                        songRequest: this.state.songRequest,
                        mail: this.state.mail,
                        allergies: this.state.allergies,
                        attending: this.state.attending
                      });
                    }}
                    buttonText={"OSA"}
                    enabled
                  />
                )}
            </div>
          </form>
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  rsvp: state.rsvp
});

const mapDispatchToProps = dispatch => ({
  postRsvp: guestData => {
    dispatch(postRsvp(guestData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
