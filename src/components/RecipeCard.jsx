import React from "react";
import PropTypes from "prop-types";

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-sm m-4">
      <a href={recipe.id}>
        <h5 className="text-lg font-bold mb-2">
          {recipe.name ?? "Nom de recette non existant"}
        </h5>
        <div className="flex-col">
          <div>
            auteur: {recipe?.author ? recipe.author : "Auteur non existant"}
          </div>
          <div>note: {recipe?.mark ? recipe.mark : "Aucune Note"}</div>
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
    mark: PropTypes.number,
    author: PropTypes.shape(),
  }),
};

RecipeCard.defaultProps = {
  recipe: [],
};
