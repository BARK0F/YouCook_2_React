import React from "react";
import PropTypes from "prop-types";

export default function Step({ step, numStep }) {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-xl">Etape {numStep+1}</h3>
        <div className="flex-row ml-2 text-justify">
            <p className="text-lg underline ml-4">{step.name}</p>
            <p className="ml-7">{step.description}</p>
        </div>
    </div>
  );
}
Step.propTypes = {
    step: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
    }),
    numStep: PropTypes.number,
};

Step.defaultProps = {
    step: [],
    numStep: 0
};
