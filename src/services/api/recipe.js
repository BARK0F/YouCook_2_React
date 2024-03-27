export const BASE_URL = "https://localhost:8000/api/docs/";

export function fetchAllRecipes() {
  return fetch(`${BASE_URL}recipes`).then((response) => response.json());
}
