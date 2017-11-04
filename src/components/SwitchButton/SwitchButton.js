import React from "react";

const SwitchButton = ({ onClickCallback, label, disabled, switchOn }) => {
  return (
    <div className="SwitchButton-container">
      <label htmlFor={label} className="SwitchButton-label">
        {label}
      </label>
      <div className="SwitchButton-button-container">
        <button
          onClick={!disabled ? onClickCallback : () => null}
          className="SwitchButton-button"
        >
          <span
            className={`SwitchButton-simulator ${switchOn
              ? "is-On"
              : "is-Off"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default SwitchButton;
