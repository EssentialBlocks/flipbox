import React from "react";

export const FlipboxImage = ({ selectedSide, url, style }) => (
  <div className={`${selectedSide}-image-container`} style={style.wrapper}>
    <img src={url} style={style.image} />
  </div>
);
