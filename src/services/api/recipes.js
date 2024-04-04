export const BASE_URL = "https://localhost:8000/api";

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

export function createRecipe(payload) {
  return fetch(`${BASE_URL}/recipes`, {
    credentials: "include",
    headers: {
      'Content-Type': 'application/ld+json'
    },
    body: payload,
    method: 'POST'
  }).then((res) => res.json())
}

export function createStep(payload) {
  return fetch(`${BASE_URL}/steps`, {
    credentials: "include",
    headers: {
      'Content-Type': 'application/ld+json'
    },
    method: "POST",
    body: payload
  }).then(res => res.json())
}

export function getRecipeCategories() {
  return fetch(`${BASE_URL}/recipes_categories`)
      .then((res) => res.json());
}