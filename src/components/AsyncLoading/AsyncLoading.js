import React, { Component } from "react";
import RibbonHeading from "components/RibbonHeading";
import s from "./AsyncLoading.scss";

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

export default AsyncLoading;
