import PropTypes from "prop-types";
import Badge from "./Badge";

export default function ToolItem({ toolName, children }) {
  return (
    <Badge children={<span>{toolName}</span>} />


  );
}
ToolItem.propTypes = {
  toolName: PropTypes.string,
};

ToolItem.defaultProps = {
  toolName: "default",
};
