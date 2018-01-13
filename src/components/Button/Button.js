import React from "react";
import s from "./Button.scss";

const Button = ({ onClickCallback, buttonText, enabled, buttonPositive }) => {
  return (
    <button
      onClick={enabled ? onClickCallback : null}
      className={`${s.container} ${enabled ? s.enabled : s.disabled}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
