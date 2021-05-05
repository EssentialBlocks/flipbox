import React from "react";

export const FlipboxImage = ({ selectedSide, url }) => (
  <div className={`${selectedSide}-image-container`}>
    <img src={url} />
  </div>
);
