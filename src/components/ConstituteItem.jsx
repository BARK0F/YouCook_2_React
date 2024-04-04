import React from "react";
import PropTypes from "prop-types";
import Badge from "./Badge";

export default function ConstituteItem({ constitute }) {
  return (
    <div className="flex flex-wrap">
      <Badge>
        {` ${constitute.ingredient.name} : ${constitute.quantity} ${constitute.measure} `}
      </Badge>
    </div>
  );
}

ConstituteItem.propTypes = {
  constitute: PropTypes.shape({
    ingredient: PropTypes.shape({
      name: PropTypes.string,
    }),
    measure: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

ConstituteItem.defaultProps = {
  constitute: {},
};
