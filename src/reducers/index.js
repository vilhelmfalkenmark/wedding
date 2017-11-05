import { combineReducers } from "redux";

import guests from "./guests";
import faq from "./faq";
import rsvp from "./rsvp";

const reducer = combineReducers({
  guests,
  faq,
  rsvp
});

export default reducer;
