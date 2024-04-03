import React from "react";
import PropTypes from "prop-types";
import Badge from "./Badge";

export default function RecipeCard({ recipe }) {
  let sum = 0;
  recipe.marks.map((mark) => {
    sum += mark.mark;
  });
  sum /= recipe.marks.length;
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-sm m-4">
      <a href={recipe.id}>
        <h5 className="text-lg font-bold mb-2">
          {recipe.name ?? "Nom de recette non existant"}
        </h5>
        <div className="flex flex-row content">
          <Badge className="float-right">
            Auteur : {recipe.author.firstname} {recipe.author.lastname}
          </Badge>
          <Badge className="float-left">
            Note : {!isNaN(sum) ? sum.toFixed(1) : "X.X"}
          </Badge>
        </div>
      </a>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    difficulty: PropTypes.string,
    description: PropTypes.string,
    nbPeople: PropTypes.number,
    nbDay: PropTypes.number,
    nbHour: PropTypes.number,
    nbMinute: PropTypes.number,
    marks: PropTypes.shape(),
    author: PropTypes.shape(),
  }),
};

RecipeCard.defaultProps = {
  recipe: [],
};
