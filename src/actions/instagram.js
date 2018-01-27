import axios from "axios";
import {
  INSTAGRAM_FETCHED,
  INSTAGRAM_FETCHING_ERROR,
  INSTAGRAM_FETCHING
} from "utils/constants/actionTypes";

import { apiBase } from "utils/constants/environmentVariables";

export function fetchInstagram() {
  return function(dispatch) {
    dispatch({ type: INSTAGRAM_FETCHING });
    axios
      .get(`${apiBase}/instagram/`)
      .then(response => {
        dispatch({ type: INSTAGRAM_FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: INSTAGRAM_FETCHING_ERROR, payload: err });
      });
  };
}
