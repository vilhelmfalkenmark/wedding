import initialState from "store/initialState";

import {
  POST_RSVP_SUCCESS,
  POST_RSVP_ERROR
} from "utils/constants/actionTypes";
import { setCookie } from "utils/helpers/cookie";

const rsvp = (state = initialState.rsvp, action) => {
  switch (action.type) {
    case POST_RSVP_SUCCESS: {
      setCookie(action.payload._id);
      console.log(action.payload);
      return Object.assign({}, state, {
        fulfilled: true,
        data: action.payload
      });
    }
    case POST_RSVP_ERROR: {
      return Object.assign({}, state, {
        fulfilled: false,
        error: true
      });
    }

    default:
      return state;
  }
};

export default rsvp;
