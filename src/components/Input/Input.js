import React from "react";
import s from "./Input.scss";

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
      className={s.field}
    />,
    <span className={s.line} key={2} />
  ];
  const labelHtml = (
    <label htmlFor={inputName} className={s.label}>
      {inputLabel}
    </label>
  );
  return (
    <div className={s.container}>
      {labelHtml}
      {inputHtml}
    </div>
  );
};

export default Input;
