import LandingPage from "entrypoints/LandingPage";
import Guests from "entrypoints/Guests";
import Rsvp from "entrypoints/Rsvp";
import Faq from "entrypoints/Faq";
import home from "assets/svg/home.svg";
import cheers from "assets/svg/cheers.svg";
import guestList from "assets/svg/guest-list.svg";
import faq from "assets/svg/faq.svg";

export const routes = [
  {
    exact: true,
    navTitle: "Hem",
    slug: "/",
    icon: home,
    largeIcon: false,
    component: () => LandingPage
  },
  {
    exact: true,
    navTitle: "Gäster",
    slug: "/gaster/",
    icon: cheers,
    largeIcon: true,
    component: () => Guests
  },
  {
    exact: false,
    navTitle: "Osa till vårt bröllop",
    slug: "/osa/",
    icon: guestList,
    largeIcon: false,
    component: () => Rsvp
  },
  {
    exact: false,
    navTitle: "Frågor och svar",
    slug: "/fragor-och-svar/",
    icon: faq,
    largeIcon: true,
    component: () => Faq
  }
];

export default routes;
