const BASE_URL = "http://localhost:8000/api";

export function getLoginUrl() {
  return `${BASE_URL}/login?redirect=${encodeURIComponent(window.location.href)}`;
}

export function getLogoutUrl() {
  return `${BASE_URL}/logout?redirect=${encodeURIComponent(window.location.href)}`;
}

export function getRegisterUrl() {
  return `${BASE_URL}/register?redirect=`
}