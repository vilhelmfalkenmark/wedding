import initialState from "store/initialState";

import {
  INSTAGRAM_FETCHED,
  INSTAGRAM_FETCHING_ERROR,
  INSTAGRAM_FETCHING
} from "utils/constants/actionTypes";

const instagram = (state = initialState.instagram, action) => {
  switch (action.type) {
    case INSTAGRAM_FETCHING: {
      return Object.assign({}, state, { fetching: true });
    }
    case INSTAGRAM_FETCHED: {
      return Object.assign({}, state, {
        fulfilled: true,
        fetching: false,
        data: action.payload.data
      });
    }
    case INSTAGRAM_FETCHING_ERROR: {
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

export default instagram;
