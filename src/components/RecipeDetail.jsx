import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { fetchRecipe } from "../services/recipes";
import Badge from "./Badge";

export default function RecipeDetail({ recipe }) {
  const [recipeData, setRecipeData] = useState();
  useEffect(() => {
    fetchRecipe(1).then((response) => setRecipeData(response));
  }, []);

  if (!recipeData) {
    return <p>fetch en cours</p>;
  }
  return (
    recipeData && (
      <div>
        <div className="bg-amber-200">
          <h1 className="align-top text-2xl text-center">
            {recipeData.name ?? "Nom de la recette"}
          </h1>
          <div className="flex justify-between">
            <Badge className="float-left">
              Note : {recipeData.mark ?? "X.X"}
            </Badge>
            <Badge className="float-right">
              {recipeData.author ?? "Auteur"}
            </Badge>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <p>test</p>
          </div>
          <div className="w-1/2">
            <div className="flex flex-wrap">
              <h4>Informations sur la recette :</h4>
              <Badge>Nombre de personnes: {recipeData.nbPeople}</Badge>
              <Badge>Nombre de jour: {recipeData.nbDay}</Badge>
              <Badge>Nombre d&apos;heure: {recipeData.nbHour}</Badge>
              <Badge>Nombre de minute: {recipeData.nbMinute}</Badge>
              <Badge>Difficulté : {recipeData.difficulty}</Badge>
            </div>
            <div>
              <h4>Description :</h4>
              <p className="m-2">
                {recipeData.description ?? "Description de la recette"}
              </p>
            </div>
            <div>
              <h4>Ustensiles utilisés :</h4>
            </div>
            <div>
              <h4>Ingrédients :</h4>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

RecipeDetail.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    difficulty: PropTypes.string,
    description: PropTypes.string,
    nbPeople: PropTypes.number,
    nbDay: PropTypes.number,
    nbHour: PropTypes.number,
    nbMinute: PropTypes.number,
  }),
};

RecipeDetail.defaultProps = {
  recipe: [],
};
