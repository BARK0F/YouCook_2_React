import React from "react";
import PropTypes from "prop-types";
import ConstituteItem from "./ConstituteItem";

export default function ConstitutesList({ constitutes }) {
  if (constitutes.length === 0) {
    return <p>Aucun ingrédient utilisé</p>;
  }
  return (
    <div className="flex flex-wrap justify-between">
      {constitutes.map((constitute) => (
        <ConstituteItem
          key={constitute["@id"][constitute["@id"].length - 1]}
          constitute={constitute}
        />
      ))}
    </div>
  );
}

ConstitutesList.propTypes = {
  constitutes: PropTypes.arrayOf(PropTypes.shape()),
};

ConstitutesList.defaultProps = {
  constitutes: [],
};
