import React, { useEffect, useState } from "react";
import { fetchAllRecipes } from "../services/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    fetchAllRecipes().then((data) => {
      setRecipesData(data["hydra:member"]);
    });
  }, []);
  return (
    <section className="flex flex-wrap justify-center">
      {recipesData.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
