import initialState from "store/initialState";

import {
  FAQ_FETCHED,
  FAQ_FETCHING_ERROR,
  FAQ_FETCHING
} from "utils/constants/actionTypes";

const faq = (state = initialState.faq, action) => {
  switch (action.type) {
    case FAQ_FETCHING: {
      return Object.assign({}, state, {
        fetching: true
      });
    }
    case FAQ_FETCHED: {
      return Object.assign({}, state, {
        fulfilled: true,
        fetching: false,
        faq: action.payload.data
      });
    }
    case FAQ_FETCHING_ERROR: {
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

export default faq;
