export const BASE_URL = "https://localhost:8000/api/docs/";

export function fetchAllIngredients() {
  return fetch(`${BASE_URL}ingredients`).then((response) => response.json());
}
