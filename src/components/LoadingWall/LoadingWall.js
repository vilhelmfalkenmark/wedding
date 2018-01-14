import React from "react";
import s from "./LoadingWall.scss";

export const LoadingWall = ({ title }) => {
  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <h1>Hämtar {title}</h1>
        <figure className={s.spinner}>
          <span className={`${s.rect} ${s.rect1}`} />
          <span className={`${s.rect} ${s.rect2}`} />
          <span className={`${s.rect} ${s.rect3}`} />
          <span className={`${s.rect} ${s.rect4}`} />
          <span className={`${s.rect} ${s.rect5}`} />
        </figure>
      </div>
    </div>
  );
};

export default LoadingWall;
