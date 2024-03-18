import { jwtDecode } from "jwt-decode";

const decodeToken = (token) => {
  return jwtDecode(token);
};
function isTokenValid(token) {
  const currentTime = Date.now() / 1000;
  const decoded = jwtDecode(token);
  return decoded.exp > currentTime;
}

function toggleLocalStorage(token) {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
}

export { decodeToken, isTokenValid, toggleLocalStorage };
