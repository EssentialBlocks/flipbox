import PropTypes from "prop-types";
import React from "react";
import { FlipboxIcon } from "./flipbox-icon";
import { FlipboxImage } from "./flipbox-image";
import { FlipboxTitle } from "./flipbox-title";

const FlipboxContent = ({
  selectedSide,
  imageUrl,
  icon,
  title,
  content,
  linkType,
  link,
}) => (
  <div className="flipbox-items-container">
    <FlipboxImage
      selectedSide={selectedSide}
      url={imageUrl}
    />

    <FlipboxIcon
      selectedSide={selectedSide}
      icon={icon}
    />

    <FlipboxTitle
      selectedSide={selectedSide}
      linkType={linkType}
      link={link}
      title={title}
    />

    <p className={`${selectedSide}-content`}>
      {content}
    </p>
  </div>
);

FlipboxContent.propTypes = {
  selectedSide: PropTypes.string,
  iconOrImage: PropTypes.string,
  imageUrl: PropTypes.string,
  icon: PropTypes.string,
  linkType: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  contentStyle: PropTypes.object
};

export default FlipboxContent;
