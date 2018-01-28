import universal from "react-universal-component";

import LandingPage from "entrypoints/LandingPage";
import Guests from "entrypoints/Guests";
import Rsvp from "entrypoints/Rsvp";
import Faq from "entrypoints/Faq";
import home from "assets/svg/home.svg";
import cheers from "assets/svg/cheers.svg";
import guestList from "assets/svg/guest-list.svg";
import faq from "assets/svg/faq.svg";

export const HOME_ROUTE = {
  exact: true,
  navTitle: "Hem",
  slug: "/",
  icon: home,
  largeIcon: false,
  component: () => LandingPage
};

export const GUEST_ROUTE = {
  exact: true,
  navTitle: "Gäster",
  slug: "/gaster/",
  icon: cheers,
  largeIcon: true,
  component: () => Guests
};

export const RSVP_ROUTE = {
  exact: false,
  navTitle: "Osa till vårt bröllop",
  slug: "/osa/",
  icon: guestList,
  largeIcon: false,
  component: () => Rsvp
};

export const FAQ_ROUTE = {
  exact: false,
  navTitle: "Frågor och svar",
  slug: "/fragor-och-svar/",
  icon: faq,
  largeIcon: true,
  component: () => Faq
};

export const routes = [HOME_ROUTE, GUEST_ROUTE, RSVP_ROUTE, FAQ_ROUTE];

export default routes;
