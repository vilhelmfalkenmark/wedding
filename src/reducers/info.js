import initialState from "store/initialState";

import {
  INFO_FETCHING,
  INFO_FETCHED,
  INFO_FETCHING_ERROR
} from "utils/constants/actionTypes";

const faq = (state = initialState.info, action) => {
  switch (action.type) {
    case INFO_FETCHING: {
      return Object.assign({}, state, {
        fetching: true
      });
    }
    case INFO_FETCHED: {
      return Object.assign({}, state, {
        fulfilled: true,
        fetching: false,
        data: action.payload.data
      });
    }
    case INFO_FETCHING_ERROR: {
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
