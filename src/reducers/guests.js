import initialState from "store/initialState";

import {
  GUESTS_FETCHING,
  GUESTS_FETCHED,
  GUESTS_FETCHING_ERROR,
  GUEST_FETCHING,
  GUEST_FETCHED,
  GUEST_FETCHING_ERROR
} from "utils/constants/actionTypes";

const guests = (state = initialState.guests, action) => {
  switch (action.type) {
    ////////////////////////////////////////////
    // HANDLE ALL GUESTS
    ////////////////////////////////////////////
    case GUESTS_FETCHING: {
      return Object.assign({}, state, {
        guests: {
          ...state.guests,
          fetching: true
        }
      });
    }
    case GUESTS_FETCHED: {
      return Object.assign({}, state, {
        guests: {
          ...state.guests,
          fulfilled: true,
          fetching: false,
          data: action.payload.data
        }
      });
    }
    case GUESTS_FETCHING_ERROR: {
      return Object.assign({}, state, {
        guests: {
          ...state.guests,
          fulfilled: true,
          fetching: false,
          error: true
        }
      });
    }
    ////////////////////////////////////////////
    // HANDLE SPECIFIC GUEST
    ////////////////////////////////////////////
    case GUEST_FETCHING: {
      return Object.assign({}, state, {
        guest: {
          ...state.guest,
          fetching: true
        }
      });
    }
    case GUEST_FETCHED: {
      return Object.assign({}, state, {
        guest: {
          ...state.guest,
          fulfilled: true,
          fetching: false,
          data: action.payload.data
        }
      });
    }
    case GUEST_FETCHING_ERROR: {
      return Object.assign({}, state, {
        guest: {
          ...state.guest,
          fulfilled: true,
          fetching: false,
          error: true
        }
      });
    }
    default:
      return state;
  }
};

export default guests;
