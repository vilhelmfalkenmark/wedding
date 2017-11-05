import React from "react";

export const LoadingWall = ({ title }) => {
  return (
    <div className="LoadingWall-container">
      <h1>Laddar {title}</h1>
    </div>
  );
};

export default LoadingWall;
