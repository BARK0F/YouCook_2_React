export const BASE_URL = "http://127.0.0.1:8000/api";

export function fetchAllRecipes() {
  return fetch(`${BASE_URL}/recipes/`).then((response) => response.json());
}
