import axios from "axios";

import {
  FAQ_FETCHED,
  FAQ_FETCHING_ERROR,
  FAQ_FETCHING
} from "utils/constants/actionTypes";

import { apiBase } from "utils/constants/environmentVariables";

export function fetchFaq() {
  return function(dispatch) {
    dispatch({ type: FAQ_FETCHING });
    axios
      .get(`${apiBase}/faq/`)
      .then(response => {
        dispatch({ type: FAQ_FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: FAQ_FETCHING_ERROR, payload: err });
      });
  };
}
