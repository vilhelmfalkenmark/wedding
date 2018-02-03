import universal from "react-universal-component";

// AsyncLoading Higher order component
import AsyncLoading from "components/AsyncLoading";

// Skeleton placeholders for code-splitting loading state
import FaqSkeleton from "components/Skeletons/FaqSkeleton";
import GuestsSkeleton from "components/Skeletons/GuestsSkeleton";
import RsvpSkeleton from "components/Skeletons/RsvpSkeleton";

// Hero Placeholder component
import Hero from "components/Hero";

// Svg icons for Navbar
import home from "assets/svg/home.svg";
import cheers from "assets/svg/cheers.svg";
import guestList from "assets/svg/guest-list.svg";
import faq from "assets/svg/faq.svg";

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
    loading: AsyncLoading({
      SkeletonPlaceholderComponent: Hero,
      withRibbonHeading: false
    })
  }
);

// Guests
const Guests = universal(
  () => import(/* webpackChunkName: 'guests' */ "entrypoints/Guests"),
  {
    resolve: () => require.resolveWeak("entrypoints/Guests"),
    chunkName: "Guests",
    loading: AsyncLoading({
      SkeletonPlaceholderComponent: GuestsSkeleton,
      withRibbonHeading: true
    })
  }
);

// FAQ
const Faq = universal(
  () => import(/* webpackChunkName: 'faq' */ "entrypoints/Faq"),
  {
    resolve: () => require.resolveWeak("entrypoints/Faq"),
    chunkName: "faq",
    loading: AsyncLoading({
      SkeletonPlaceholderComponent: FaqSkeleton,
      withRibbonHeading: true
    })
  }
);

// RSVP
const Rsvp = universal(
  () => import(/* webpackChunkName: 'rsvp' */ "entrypoints/Rsvp"),
  {
    resolve: () => require.resolveWeak("entrypoints/Rsvp"),
    chunkName: "rsvp",
    loading: AsyncLoading({
      SkeletonPlaceholderComponent: RsvpSkeleton,
      withRibbonHeading: true
    })
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
