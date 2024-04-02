import React from "react";
import PropTypes from "prop-types";

export default function Step({ numStep, children }) {
    return (
        <div>
            <h4>Etape {numStep}</h4>
            <p>{children}</p>
        </div>
    );
}
Step.propTypes = {
    numStep: PropTypes.number,
    children: PropTypes.string,
};

Step.defaultProps = {
    numStep: 0,
    children: "default"
};
