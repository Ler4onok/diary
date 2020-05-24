export function setCookie(name, value) {
  const date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * 7);
  const cookieStr = `${name}=${value};path=/;expires=${date.toUTCString()};`;
  document.cookie = cookieStr;
}

export function getCookie(name = "action") {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export function deleteCookie(name) {
  document.cookie = name + `=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
