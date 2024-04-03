const BASE_URL = 'https://localhost:8000/api';

export function createTool(payload) {
  return fetch(`${BASE_URL}/tools`, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-Type': 'application/ld+json'
    },
    body: payload
  }).then((res) => res.json());
}

export function getToolCategories() {
  return fetch(`${BASE_URL}/tool_categories`, { credentials: "include" })
    .then((res) => res.json());
}