import React from "react";

export const FlipboxButton = ({
  link,
  classNames,
  style,
  buttonIconPos,
  buttonText,
  buttonIcon,
  displayButtonIcon
}) => (
  <div className="flipbox-button-container">
    <a
      className={`${classNames}  flipbox-button-link`}
      href={link ? link : "#"}
      style={style}
    >
      <div
        style={{
          display: "flex",
          flexDirection: buttonIconPos === "after" ? "row" : "row-reverse",
          justifyContent: "space-around"
        }}
      >
        <span>{buttonText}</span>
        <span
          className={`fa fa-${buttonIcon} flipbox-button-icon`}
          style={{ display: displayButtonIcon ? "block" : "none" }}
        />
      </div>
    </a>
  </div>
);
