import React from "react";
import PropTypes from "prop-types";

export default function Step({ numStep, name, description }) {
  return (
    <div>
      <h4>Etape {numStep}</h4>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}
Step.propTypes = {
  numStep: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
};

Step.defaultProps = {
  numStep: 0,
  name: "default",
  description: "default",
};
