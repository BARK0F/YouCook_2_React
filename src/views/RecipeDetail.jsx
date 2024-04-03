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
  let sum = 0;
  recipe.marks.map((mark) => {
    sum += mark.mark;
  });
  sum /= recipe.marks.length;
  return (
    recipe && (
      <div>
        <div>
          <h1 className="align-top text-2xl text-center">
            {recipe.name ?? "Nom de la recette"}
          </h1>
          <div className="flex justify-between">
            <Badge className="float-left">
              Note : {sum !== undefined ? sum.toFixed(1) : "X.X"}
            </Badge>
            <Badge className="float-right">
              Auteur : {recipe.author.firstname} {recipe.author.lastname}
            </Badge>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2" />
          <div className="w-1/2">
            <div className="flex flex-wrap">
              <h4 className="text-xl">Informations sur la recette :</h4>
              <div className="flex flex-wrap">
                <div className="flex flex-wrap">
                  <Badge>{recipe.nbDay} jour(s)</Badge>
                  <Badge>{recipe.nbHour} heure(s)</Badge>
                  <Badge>{recipe.nbMinute} minute(s)</Badge>
                </div>
                <Badge>{recipe.nbPeople} personne(s)</Badge>
                <Badge>Difficulté : {recipe.difficulty}</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-xl">Description :</h4>
              <p className="m-2">
                {recipe.description ?? "Description de la recette"}
              </p>
            </div>
            <div>
              <h4 className="text-xl">Ustensiles utilisés :</h4>
              <div className="m-2">
                <ToolsList tools={recipe.tools} />
              </div>
            </div>
            <div className="flex flex-wrap">
              <h4 className="text-xl">Ingrédients :</h4>
              <div className="m-2">
                <ConstitutesList constitutes={recipe.constitutes} />
              </div>
            </div>
          </div>
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
