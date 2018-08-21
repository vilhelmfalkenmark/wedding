import React from "react";
import WithStyles from "layout/WithStyles";
import s from "./Button.css";

const Button = ({ onClickCallback, buttonText, enabled }) => (
  <button
    onClick={enabled ? onClickCallback : null}
    className={s({ container: true, container_isDisabled: !enabled })}
  >
    {buttonText}
  </button>
);

export default WithStyles(Button, s);
