import { combineReducers } from "redux";

import guests from "./guests";
import faq from "./faq";

const reducer = combineReducers({
  guests,
  faq
});

export default reducer;
