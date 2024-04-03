import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Badge from "../components/Badge";
import { fetchRecipe } from "../services/recipes";
import ToolsList from "../components/ToolsList";
import ConstitutesList from "../components/ConstitutesList";

export default function RecipeDetail({ params: { id } }) {
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    fetchRecipe(id).then((response) => setRecipe(response));
  }, []);
  if (!recipe) {
    return <p>fetch en cours</p>;
  }

  return (
    recipe && (
      <div>
        <div>
          <h1 className="align-top text-2xl text-center">
            {recipe.name ?? "Nom de la recette"}
          </h1>
        </div>
      </div>
    )
  );
}

RecipeDetail.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
};

RecipeDetail.defaultProps = {
  params: [],
};
