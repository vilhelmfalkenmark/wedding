import React, { Component } from "react";
import RibbonHeading from "components/RibbonHeading";
import WithStyles from "layout/WithStyles";

import s from "./LoadingPlaceholder.css";

function LoadingPlaceholder({
  SkeletonPlaceholderComponent,
  withRibbonHeading
}) {
  class LP extends Component {
    render() {
      return (
        <div
          className={s({
            container: true,
            withRibbonContainer: withRibbonHeading,
            withoutRibbonContainer: !withRibbonHeading
          })}
        >
          {withRibbonHeading && <RibbonHeading heading={"Hämtar..."} />}
          <SkeletonPlaceholderComponent />
        </div>
      );
    }
  }
  return WithStyles(LP, s);
}

export default LoadingPlaceholder;
