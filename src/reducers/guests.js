import initialState from "store/initialState";

import {
  GUESTS_FETCHING,
  GUESTS_FETCHED,
  GUESTS_FETCHING_ERROR
} from "utils/constants/actionTypes";

const guests = (state = initialState.guests, action) => {
  switch (action.type) {
    case GUESTS_FETCHING: {
      return Object.assign({}, state, {
        fetching: true
      });
    }
    case GUESTS_FETCHED: {
      return Object.assign({}, state, {
        fulfilled: true,
        fetching: false,
        guests: action.payload.data
      });
    }
    case GUESTS_FETCHING_ERROR: {
      return Object.assign({}, state, {
        fulfilled: false,
        fetching: false,
        error: true
      });
    }
    default:
      return state;
  }
};

export default guests;
