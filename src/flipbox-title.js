import PropTypes from "prop-types";
import React, { Fragment } from "react";

export const FlipboxTitle = ({
  selectedSide,
  linkType,
  link,
  title,
  // titleStyle
}) => (
  <Fragment>
    <a
      href={link ? link : "#"}
      className="title-link"
      style={{ display: linkType === "title" ? "block" : "none" }}
    >
      <h3 className={`${selectedSide}-title`}>
        {title}
      </h3>
    </a>

    <h3
      className={`${selectedSide}-title`}
      style={{
        display: linkType !== "title" ? "block" : "none"
      }}
    >
      {title}
    </h3>
  </Fragment>
);

FlipboxTitle.propTypes = {
  selectedSide: PropTypes.string,
  linkType: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  // titleStyle: PropTypes.object
};
