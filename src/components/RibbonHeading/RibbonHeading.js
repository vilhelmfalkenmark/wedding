import React from "react";

export const RibbonHeading = ({ heading }) => {
  return (
    <div className="Ribbon-heading-container">
      <h1 className="Ribbon-heading">
        <span className="Ribbon-heading-span Ribbon-heading-outer-span">
          <span className="Ribbon-heading-span Ribbon-heading-inner-span">
            {heading}
          </span>
        </span>
      </h1>
    </div>
  );
};

export default RibbonHeading;
