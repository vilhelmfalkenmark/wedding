import universal from "react-universal-component";
// SVG ICONS FOR NAVIGATION BAR
import home from "assets/svg/home.svg";
import cheers from "assets/svg/cheers.svg";
import guestList from "assets/svg/guest-list.svg";
import faq from "assets/svg/faq.svg";
import ErrorWall from "components/ErrorWall";
//////////////////////////////////////////////////
/**
 * CODE SPLITTING CHUNKS
 */
//////////////////////////////////////////////////
const LandingPage = universal(
  () => import(/* webpackChunkName: 'landingpage' */ "entrypoints/LandingPage"),
  {
    resolve: () => require.resolveWeak("entrypoints/LandingPage"),
    chunkName: "landingpage",
    loading: ErrorWall
  }
);

// Guests
const Guests = universal(
  () => import(/* webpackChunkName: 'guests' */ "entrypoints/Guests"),
  {
    resolve: () => require.resolveWeak("entrypoints/Guests"),
    chunkName: "Guests",
    loading: ErrorWall
  }
);

// FAQ
const Faq = universal(
  () => import(/* webpackChunkName: 'faq' */ "entrypoints/Faq"),
  {
    resolve: () => require.resolveWeak("entrypoints/Faq"),
    chunkName: "faq",
    loading: ErrorWall
  }
);

// RSVP
const Rsvp = universal(
  () => import(/* webpackChunkName: 'rsvp' */ "entrypoints/Rsvp"),
  {
    resolve: () => require.resolveWeak("entrypoints/Rsvp"),
    chunkName: "rsvp",
    loading: ErrorWall
  }
);

//////////////////////////////////////////////////
/**
 * Routes base
 */
//////////////////////////////////////////////////
export const HOME_ROUTE = {
  exact: true,
  navTitle: "Hem",
  slug: "/",
  icon: home,
  largeIcon: false,
  component: LandingPage
};

export const GUEST_ROUTE = {
  exact: true,
  navTitle: "Gäster",
  slug: "/gaster/",
  icon: cheers,
  largeIcon: true,
  component: Guests
}; // component: () => Guests || ErrorWall

export const RSVP_ROUTE = {
  exact: false,
  navTitle: "Osa till vårt bröllop",
  slug: "/osa/",
  icon: guestList,
  largeIcon: false,
  component: Rsvp
};

export const FAQ_ROUTE = {
  exact: false,
  navTitle: "Frågor och svar",
  slug: "/fragor-och-svar/",
  icon: faq,
  largeIcon: true,
  component: Faq
};

export default [HOME_ROUTE, GUEST_ROUTE, RSVP_ROUTE, FAQ_ROUTE];
