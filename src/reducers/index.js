import { combineReducers } from "redux";

import guests from "./guests";
import faq from "./faq";
import rsvp from "./rsvp";
import info from "./info";

const reducer = combineReducers({
  guests,
  faq,
  rsvp,
  info
});

export default reducer;
