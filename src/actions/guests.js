import axios from "axios";

import {
  GUESTS_FETCHING,
  GUESTS_FETCHED,
  GUESTS_FETCHING_ERROR
} from "utils/constants/actionTypes";

export function fetchAllGuests() {
  return function(dispatch) {
    dispatch({ type: GUESTS_FETCHING });
    axios
      .get("http://localhost:5000/api/guests/")
      .then(response => {
        dispatch({ type: GUESTS_FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: GUESTS_FETCHING_ERROR, payload: err });
      });
  };
}
