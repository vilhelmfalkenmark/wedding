import React from "react";
import WithStyles from "layout/WithStyles";
import s from "./Button.css";

const Button = ({ onClickCallback, text, enabled, className }) => (
  <button
    onClick={enabled ? onClickCallback : null}
    className={s({
      container: true,
      container_isDisabled: !enabled,
      [className]: className
    })}
  >
    {text}
  </button>
);

export default WithStyles(Button, s);
