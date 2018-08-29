import initialState from "store/initialState";

import {
  POST_RSVP_SUCCESS,
  POST_RSVP_ERROR,
  HANDLE_RSVP_FORM,
  TOGGLE_RSVP_ATTENDING
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
    case HANDLE_RSVP_FORM:
      return Object.assign({}, state, {
        rsvpForm: Object.assign({}, state.rsvpForm, {
          [action.payload.key]: action.payload.value
        })
      });

    case TOGGLE_RSVP_ATTENDING:
      return Object.assign({}, state, {
        rsvpForm: Object.assign({}, state.rsvpForm, {
          attending: !state.rsvpForm.attending
        })
      });

    default:
      return state;
  }
};

export default rsvp;
