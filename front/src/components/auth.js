export function isLogin() {
  return (
    localStorage.getItem("accessToken") !== null &&
    localStorage.getItem("accessToken") !== "undefined"
  );
}

export function deleteToken() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("uid");
  localStorage.removeItem("password");
}

export function requiredAuth(nextState, replace) {
  if (!isLogin()) {
    replace({
      pathname: "/",
      state: { nextPathname: nextState.location.pathname },
    });
  }
}
