import React from "react";
import PropTypes from "prop-types";
import Badge from "./Badge";

export default function ToolsList({ tools }) {
  if (tools.length === 0) {
    return <p>Aucun outil utilisé</p>;
  }
  return tools.map((tool) => (
    <Badge key={tool["@id"][tool["@id"].length - 1]}>{tool.name}</Badge>
  ));
}

ToolsList.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape()),
};

ToolsList.defaultProps = {
  tools: [],
};
