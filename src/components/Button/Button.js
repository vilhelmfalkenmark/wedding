import React from "react";
import WithStyles from "layout/WithStyles";
import s from "./Button.css";

const Button = ({ onClickCallback, text, disabled, className }) =>
  console.log(disabled) || (
    <button
      onClick={!disabled ? onClickCallback : () => null}
      className={s({
        container: true,
        container_isDisabled: disabled,
        [className]: className
      })}
    >
      {text}
    </button>
  );

export default WithStyles(Button, s);
