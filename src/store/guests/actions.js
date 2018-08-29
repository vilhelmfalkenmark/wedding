import axios from "axios";

import {
  // All guests
  GUESTS_FETCHING,
  GUESTS_FETCHED,
  GUESTS_FETCHING_ERROR,
  // Specific guest
  GUEST_FETCHING,
  GUEST_FETCHED,
  GUEST_FETCHING_ERROR
} from "utils/constants/actionTypes";

import { apiBase } from "utils/constants/environmentVariables";

export function fetchAllGuests() {
  return function(dispatch) {
    dispatch({ type: GUESTS_FETCHING });
    axios
      .get(`${apiBase}/guests/`)
      .then(response => {
        dispatch({ type: GUESTS_FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: GUESTS_FETCHING_ERROR, payload: err });
      });
  };
}

export function fetchGuest(guestId) {
  return function(dispatch) {
    dispatch({ type: GUEST_FETCHING });
    axios
      .get(`${apiBase}/guests/${guestId}`)
      .then(response => {
        dispatch({ type: GUEST_FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: GUEST_FETCHING_ERROR, payload: err });
      });
  };
}
