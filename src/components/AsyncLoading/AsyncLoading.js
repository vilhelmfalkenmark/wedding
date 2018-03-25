import React, { Component } from "react";
import RibbonHeading from "components/RibbonHeading";
import WithStyles from "layout/WithStyles";

import s from "./AsyncLoading.css";

function AsyncLoading({ SkeletonPlaceholderComponent, withRibbonHeading }) {
  return class extends Component {
    render() {
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
    }
  };
}

export default WithStyles(AsyncLoading, s);
