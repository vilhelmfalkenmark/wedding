import React from "react";
import WithStyles from "layout/WithStyles";

import s from "./RibbonHeading.css";

export const RibbonHeading = ({ heading }) => {
  return (
    <div className={s({ container: true })}>
      <h1 className={s.heading}>
        <span className={`${s.headingSpan} ${s.headingOuterSpan}`}>
          <span className={`${s.headingSpan} ${s.headingInnerSpan}`}>
            {heading}
          </span>
        </span>
      </h1>
    </div>
  );
};

export default WithStyles(RibbonHeading, s);
