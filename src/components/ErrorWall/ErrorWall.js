import React from "react";
import s from "./ErrorWall.scss";

export const ErrorWall = ({ title }) => {
  return (
    <div className={s.container}>
      <h1>Det verkar som att något blivit galet</h1>
    </div>
  );
};

export default ErrorWall;
