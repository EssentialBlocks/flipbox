import PropTypes from "prop-types";
import React, { Fragment } from "react";

export const FlipboxTitle = ({
  selectedSide,
  link,
  title,
}) => (
  <Fragment>
    <a
      href={link ? link : "#"}
      className="title-link"
    >
      <h3 className={`${selectedSide}-title`}>
        {title}
      </h3>
    </a>

    <h3
      className={`${selectedSide}-title`}
    >
      {title}
    </h3>
  </Fragment>
);

FlipboxTitle.propTypes = {
  selectedSide: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};
