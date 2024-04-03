const BASE_URL = "https://localhost:8000/api";

export function fetchUser() {
  return fetch(`${BASE_URL}/me`, {
    credentials: "include",
  }).then((res) => {
    if (res.status > 400) {
      throw new Error("Not logged in");
    }

    return res.json()
  })
}

export function getLoginUrl() {
  return `${BASE_URL}/login?redirect=${encodeURIComponent(window.location.href)}`;
}

export function getLogoutUrl() {
  return `${BASE_URL}/logout?redirect=${encodeURIComponent(window.location.href)}`;
}

export function getRegisterUrl() {
  return `${BASE_URL}/register?redirect=${encodeURIComponent(window.location.href)}`;
}
