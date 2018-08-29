import axios from "axios";

import {
  INFO_FETCHED,
  INFO_FETCHING_ERROR,
  INFO_FETCHING
} from "utils/constants/actionTypes";

import { apiBase } from "utils/constants/environmentVariables";

export function fetchInfo() {
  return function(dispatch) {
    dispatch({ type: INFO_FETCHING });
    axios
      .get(`${apiBase}/info/`)
      .then(response => {
        dispatch({ type: INFO_FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: INFO_FETCHING_ERROR, payload: err });
      });
  };
}
