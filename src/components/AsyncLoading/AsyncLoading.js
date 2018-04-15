import React from "react";
import RibbonHeading from "components/RibbonHeading";

import s from "./AsyncLoading.css";

function AsyncLoading({ SkeletonPlaceholderComponent, withRibbonHeading }) {
  return function() {
    return (
      <div
        className={
          withRibbonHeading ? s.withRibbonContainer : s.withoutRibbonContainer
        }
      >
        {withRibbonHeading ? <RibbonHeading heading={"Hämtar..."} /> : null}
        <SkeletonPlaceholderComponent />
      </div>
    );
  };
}

export default AsyncLoading;
