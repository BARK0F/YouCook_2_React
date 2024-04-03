import React, { useEffect, useState } from "react";
import { fetchAllRecipes } from "../services/api/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    fetchAllRecipes().then((data) => {
      setRecipesData(data["hydra:member"]);
    });
  }, []);
  if (!recipesData) {
    return <p>fetch en cours</p>;
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-4">
        Liste des recettes
      </h1>
      <section className="flex flex-wrap justify-center">
        {recipesData.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </div>
  );
}
