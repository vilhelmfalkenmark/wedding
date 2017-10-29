import Guests from "entrypoints/Guests";
// import Notify from "entrypoints/Notify";
import Faq from "entrypoints/Faq";

export const routes = [
  {
    exact: true,
    navTitle: "Gäster",
    slug: "/gaster",
    component: () => Guests
  },
  {
    exact: false,
    navTitle: "Osa till vårt bröllop",
    slug: "/osa",
    component: () => Guests
  },
  {
    exact: false,
    navTitle: "Frågor och svar",
    slug: "/fragor-och-svar",
    component: () => Faq
  }
];

export default routes;
