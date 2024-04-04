export const BASE_URL = "https://localhost:8000/api";

export function fetchAllIngredients() {
  return fetch(`${BASE_URL}/ingredients`).then((response) => response.json());
}

export function getIngredientDetail(id) {
  return fetch(`${BASE_URL}/ingredients/${id}`).then((response) =>
    response.json(),
  );
}

export function createIngredient(payload){
  return fetch(`${BASE_URL}/ingredients`, {
    credentials: "include",
    method: "POST",
    body: payload,
    headers: {
      "Content-Type": "application/ld+json",
    },
  }).then(res => res.json());
}
