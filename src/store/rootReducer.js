import { combineReducers } from "redux";

import guests from "store/guests/reducer";
import faq from "store/faq/reducer";
import rsvp from "store/rsvp/reducer";
import info from "store/info/reducer";
import instagram from "store/instagram/reducer";

const reducer = combineReducers({
  guests,
  faq,
  rsvp,
  info,
  instagram
});

export default reducer;
