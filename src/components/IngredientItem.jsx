import PropTypes from "prop-types";
import Badge from "./Badge.jsx";

export default function IngredientItem({ ingredientName, children }) {
  return (
    <Badge children={<span>{ingredientName}</span>}></Badge>


  );
}
IngredientItem.propTypes = {
  ingredientName: PropTypes.string,
};

IngredientItem.defaultProps = {
  ingredientName: "default",
};
