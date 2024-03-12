export const BASE_URL = "http://127.0.0.1:8000/api";

export function fetchAllRecipes() {
  return fetch("http://127.0.0.1:8000/api/recipes/").then((response) =>
    response.json(),
  );
}
