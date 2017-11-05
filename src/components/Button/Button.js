import React from "react";

const Button = ({ onClickCallback, buttonText, enabled, buttonPositive }) => {
  return (
    <button
      onClick={enabled ? onClickCallback : null}
      className={`Button ${enabled ? "Button--enabled" : "Button--disabled"}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
