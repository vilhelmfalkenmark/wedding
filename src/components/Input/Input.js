import React from "react";

export const Input = ({
  inputPlaceholder,
  inputLabel,
  inputOnChange,
  inputValue,
  inputName,
  inputDisabled
}) => {
  const inputHtml = [
    <input
      key={1}
      disabled={inputDisabled}
      name={inputName}
      value={inputValue}
      placeholder={inputPlaceholder}
      onChange={event => inputOnChange(event.target.value)}
      className="Input-field"
    />,
    <span className="Input-line" key={2} />
  ];
  const labelHtml = (
    <label htmlFor={inputName} className="Input-label">
      {inputLabel}
    </label>
  );
  return (
    <div className="Input-container">
      {labelHtml}
      {inputHtml}
    </div>
  );
};

export default Input;
