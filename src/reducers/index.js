import { combineReducers } from "redux";

import guests from "./guests";
import faq from "./faq";
import rsvp from "./rsvp";
import info from "./info";
import instagram from "./instagram";

const reducer = combineReducers({
  guests,
  faq,
  rsvp,
  info,
  instagram
});

export default reducer;
