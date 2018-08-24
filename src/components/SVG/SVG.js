import React from "react";

const SVG = ({ symbol, className }) => (
  <svg className={className} viewBox={symbol.viewBox}>
    <use xlinkHref={`#${symbol.id}`} />
  </svg>
);

export default SVG;
