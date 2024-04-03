import React from "react";
import PropTypes from "prop-types";
import Badge from "./Badge";

export default function ToolsList({ tools }) {
  return tools.map((tool) => (
    <Badge key={tool["@id"][tool["@id"].length - 1]}>{tool.name}</Badge>
  ));
}

ToolsList.propTypes = {
  tools: PropTypes.shape(),
};

ToolsList.defaultProps = {
  tools: [],
};
