import React, { Component } from "react";
import Input from "components/Input";
import SwitchButton from "components/SwitchButton";
import Button from "components/Button";
import regex from "utils/helpers/regex";
import s from "./RsvpForm.scss";

class RsvpForm extends Component {
  constructor() {
    super();
    this.state = {
      guests: "",
      songRequest: "",
      mail: "",
      allergies: "",
      attending: true,
      relationship: ""
    };
  }
  render() {
    return (
      <div className={s.container}>
        <form className={s.form}>
          <Input
            inputLabel="Namn på gäst/gäster"
            inputPlaceholder="Exempelvis: Johanna Olsson och Vilhelm Falkenmark"
            inputName="Name"
            inputDisabled={false}
            inputValue={this.state.guests}
            inputOnChange={value =>
              this.setState({
                guests: value
              })
            }
          />
          <Input
            inputLabel="Relation till brudparet"
            inputPlaceholder="Exempelvis: syskon"
            inputName="relationship"
            inputDisabled={false}
            inputValue={this.state.relationship}
            inputOnChange={value =>
              this.setState({
                relationship: value
              })
            }
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
              })
            }
          />
          <Input
            inputLabel="Eventuell Specialkost"
            inputPlaceholder="Exempelvis: Nötallergiker"
            inputName="allergies"
            inputDisabled={false}
            inputValue={this.state.allergies}
            inputOnChange={value =>
              this.setState({
                allergies: value
              })
            }
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
              })
            }
          />
          {/* {this.state.guests.length > 5 &&
          this.state.relationship.length > 5 &&
          regex.mail.test(this.state.mail) && (
            <SwitchButton
              onClickCallback={e => {
                e.preventDefault();
                this.setState({ attending: !this.state.attending });
              }}
              disabled={false}
              switchOn={this.state.attending}
              label={
                this.state.attending ? "Kommer :)" : "Kommer tyvärr inte :("
              }
            />
          )} */}
          <SwitchButton
            onClickCallback={e => {
              e.preventDefault();
              this.setState({ attending: !this.state.attending });
            }}
            disabled={false}
            switchOn={this.state.attending}
            label={this.state.attending ? "Kommer :)" : "Kommer tyvärr inte :("}
          />
          <div>
            {this.state.guests.length > 5 &&
              this.state.relationship.length > 5 &&
              regex.mail.test(this.state.mail) && (
                <Button
                  onClickCallback={e => {
                    e.preventDefault();
                    this.props.postRsvp({
                      guests: this.state.guests,
                      songRequest: this.state.songRequest,
                      mail: this.state.mail,
                      allergies: this.state.allergies,
                      relationship: this.state.relationship,
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
    );
  }
}

export default RsvpForm;
