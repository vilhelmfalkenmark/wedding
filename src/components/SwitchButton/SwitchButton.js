import React from "react";
import s from "./SwitchButton.scss";

const SwitchButton = ({ onClickCallback, label, disabled, switchOn }) => {
  return (
    <div className={s.container}>
      <div className={s.buttonContainer}>
        <button
          onClick={!disabled ? onClickCallback : () => null}
          className={s.button}
        >
          <span className={`${s.simulator} ${switchOn ? s.isOn : s.isOff}`} />
        </button>
      </div>
      <label htmlFor={label} className={s.label}>
        {label}
      </label>
    </div>
  );
};

export default SwitchButton;
