import React from "react";
import s from "./ScrollDown.scss";

const ScrollDown = ({ onClickCallback }) => {
  return (
    <button className={s.button} onClick={onClickCallback}>
      <span className={s.mouse}>
        <span className={s.wheel} />
      </span>
    </button>
  );
};

export default ScrollDown;
