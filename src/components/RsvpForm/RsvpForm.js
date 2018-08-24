import React, { Component } from "react";
import Input from "components/Input";
// import SwitchButton from "components/SwitchButton";
import Button from "components/Button";
import RadioButton from "components/RadioButton";
import regex from "utils/helpers/regex";
import WithStyles from "layout/WithStyles";

import s from "./RsvpForm.css";

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
      <div className={s({ container: true })}>
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
          <RadioButton
            alternatives={[
              { label: "Kommer", value: true },
              { label: "Kommer tyvärr inte", value: false }
            ]}
            checkedAlternative={this.state.attending}
            onChangeCallback={value => this.setState({ attending: value })}
          />
          <div className={s.buttonContainer}>
            {this.state.guests.length > 4 &&
              this.state.relationship.length > 2 &&
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
                  text={"OSA"}
                  enabled
                />
              )}
          </div>
        </form>
      </div>
    );
  }
}

export default WithStyles(RsvpForm, s);
