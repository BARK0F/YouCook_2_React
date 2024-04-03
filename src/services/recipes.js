export const BASE_URL = "http://127.0.0.0:8000/api";

export function fetchAllRecipes() {
  return fetch(`${BASE_URL}/recipes/`).then((response) => response.json());
}
export function fetchRecipe(recipe) {
  return fetch(`${BASE_URL}/recipes/${recipe}`).then((response) =>
    response.json(),
  );
}
