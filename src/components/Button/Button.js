import React from "react";
import WithStyles from "layout/WithStyles";
import s from "./Button.css";

const Button = ({ onClickCallback, buttonText, enabled, buttonPositive }) => {
  return (
    <button
      onClick={enabled ? onClickCallback : null}
      className={`${s({ container: true })} ${
        enabled ? s.enabled : s.disabled
      }`}
    >
      {buttonText}
    </button>
  );
};

export default WithStyles(Button, s);
