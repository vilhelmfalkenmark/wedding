export const setCookie = guestId => {
  const date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000); // let the cookie be valid for a year
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `rsvpComplete=${JSON.stringify({
    id: guestId
  })};${expires};path=/`;
};

let guestObject = {};

export const readCookie = () => {
  const allCookies = decodeURIComponent(document.cookie).split(";");
  for (var i = 0; i < allCookies.length; i++) {
    if (allCookies[i].indexOf("rsvpComplete") !== -1) {
      guestObject = JSON.parse(allCookies[i].replace(/rsvpComplete=/g, ""));
      return guestObject;
    }
  }
  return false;
};
