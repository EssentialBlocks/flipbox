import PropTypes from "prop-types";
import React from "react";
import { FlipboxIcon } from "./flipbox-icon";
import { FlipboxImage } from "./flipbox-image";
import { FlipboxTitle } from "./flipbox-title";

const FlipboxContent = ({
  selectedSide,
  iconOrImage,
  imageUrl,
  icon,
  title,
  content,
  linkType,
  link,
  imageStyle,
  iconStyle,
  // titleStyle,
  contentStyle
}) => (
  <div className="flipbox-items-container">
    <FlipboxImage
      selectedSide={selectedSide}
      url={imageUrl}
      style={imageStyle}
    />

    <FlipboxIcon
      selectedSide={selectedSide}
      icon={icon}
      style={{
        ...iconStyle,
        display: iconOrImage === "icon" && icon ? "block" : "none"
      }}
    />

    <FlipboxTitle
      selectedSide={selectedSide}
      linkType={linkType}
      link={link}
      title={title}
      // titleStyle={titleStyle}
    />

    <p className={`${selectedSide}-content`} style={contentStyle}>
      {content}
    </p>
  </div>
);

FlipboxContent.propTypes = {
  selectedSide: PropTypes.string,
  iconOrImage: PropTypes.string,
  imageUrl: PropTypes.string,
  imageStyle: PropTypes.object,
  icon: PropTypes.string,
  iconStyle: PropTypes.object,
  linkType: PropTypes.string,
  title: PropTypes.string,
  // titleStyle: PropTypes.string,
  content: PropTypes.string,
  contentStyle: PropTypes.object
};

export default FlipboxContent;
