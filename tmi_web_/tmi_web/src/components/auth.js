export function login(id, password) {
    return new Promise((res, rej) => {
      return setTimeout(() => {
        sessionStorage.setItem("isAuthorized", "true");
        return res({ resultcode: 1 });
      }, 300);
    });
  }