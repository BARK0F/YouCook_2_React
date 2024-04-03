import React from "react";
import PropTypes, { array, number, string } from "prop-types";

export default function Badge({ children }) {
  return (
    <span className="flex flex-wrap w-fit badge px-3 py-2 mr-4 font-bold border-2 rounded-e bg-white">
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.oneOfType([string, number, array]),
};

Badge.defaultProps = {
  children: [],
};
