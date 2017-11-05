import initialState from "store/initialState";

import {
  POST_RSVP_SUCCESS,
  POST_RSVP_ERROR
} from "utils/constants/actionTypes";

const guests = (state = initialState.rsvp, action) => {
  switch (action.type) {
    case POST_RSVP_SUCCESS: {
      return Object.assign({}, state, {
        hasRsvp: true,
        data: action.payload
      });
    }
    case POST_RSVP_ERROR: {
      return Object.assign({}, state, {
        hasRsvp: false,
        error: true
      });
    }

    default:
      return state;
  }
};

export default guests;
