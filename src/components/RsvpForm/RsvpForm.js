import React from "react";
import { connect } from "react-redux";
import Input from "components/Input";
import Button from "components/Button";
import {
  postRsvp,
  handleRsvpData,
  toggleRsvpAttending
} from "store/rsvp/actions";
import { BUTTON_TYPE_RED } from "utils/constants/buttonTypes";

import RadioButton from "components/RadioButton";
import regex from "utils/helpers/regex";
import WithStyles from "layout/WithStyles";

import s from "./RsvpForm.css";

const RsvpForm = ({ rsvp, handleRsvpForm, postRsvp, toggleRsvpAttending }) => {
  const { rsvpForm } = rsvp;

  const INPUT_FIELDS = [
    {
      label: "Namn på gäst/gäster",
      keyName: "guests",
      inputValue: rsvpForm.guests
    },
    {
      label: "Relation till brudparet",
      keyName: "relationship",
      inputValue: rsvpForm.relationship
    },
    {
      label: "Mailadress",
      keyName: "mail",
      inputValue: rsvpForm.mail
    },
    {
      label: "Eventuell Specialkost",
      keyName: "allergies",
      inputValue: rsvpForm.allergies
    },
    {
      label: "Önskelåt till dansgolvet",
      keyName: "songRequest",
      inputValue: rsvpForm.songRequest
    }
  ];

  return (
    <div className={s({ container: true })}>
      <div className={s({ form: true })}>
        {INPUT_FIELDS.map((inputField, i) => (
          <Input
            key={i}
            inputLabel={inputField.label}
            inputPlaceholder=""
            inputName={inputField.keyName}
            inputDisabled={false}
            inputValue={inputField.inputValue}
            inputOnChange={value =>
              handleRsvpForm({
                key: inputField.keyName,
                value
              })
            }
          />
        ))}

        <RadioButton
          alternatives={[
            { label: "Kommer", value: true },
            { label: "Kommer tyvärr inte", value: false }
          ]}
          checkedAlternative={rsvpForm.attending}
          onChangeCallback={toggleRsvpAttending}
        />
        <div className={s({ buttonContainer: true })}>
          <Button
            type={BUTTON_TYPE_RED}
            onClickCallback={e => {
              e.preventDefault();
              postRsvp(rsvpForm);
            }}
            text={"OSA"}
            disabled={
              rsvpForm.guests.length < 4 ||
              rsvpForm.relationship.length < 2 ||
              !regex.mail.test(rsvpForm.mail)
            }
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  rsvp: state.rsvp
});

const mapDispatchToProps = dispatch => ({
  postRsvp: rsvpFormData => {
    dispatch(postRsvp(rsvpFormData));
  },
  handleRsvpForm: ({ key, value }) => {
    dispatch(handleRsvpData({ key, value }));
  },
  toggleRsvpAttending: () => {
    dispatch(toggleRsvpAttending());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithStyles(RsvpForm, s));
