import React from "react";
import PropTypes from "prop-types";

function Image({ source, alt }) {
  return <img src={source} alt={alt} />;
}

Image.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
};
Image.defaultProps = {
  source: "",
  alt: "",
};
export default Image;
