export const BASE_URL = "http://localhost:8000/api";

export function fetchAllRecipes() {
  return fetch(`${BASE_URL}/recipes/`, { credentials: "include" }).then(
    (response) => response.json(),
  );
}
export function fetchRecipe(recipe) {
  return fetch(`${BASE_URL}/recipes/${recipe}`).then((response) =>
    response.json(),
  );
}
