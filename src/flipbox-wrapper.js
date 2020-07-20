import React from "react";

const FlipboxWrapper = ({ style, className, children }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

export default FlipboxWrapper;
