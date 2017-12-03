import React from "react";
import s from "./RibbonHeading.scss";


export const RibbonHeading = ({ heading }) => {
  return <div className={s.container}>
      <h1 className={s.heading}>
        <span className={`${s.headingSpan} ${s.headingOuterSpan}`}>
          <span className={`${s.headingSpan} ${s.headingInnerSpan}`}>
            {heading}
          </span>
        </span>
      </h1>
    </div>;
};

export default RibbonHeading;
