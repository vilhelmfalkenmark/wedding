import axios from "axios";

import { POST_RSVP, POST_RSVP_ERROR } from "utils/constants/actionTypes";

import { apiBase } from "utils/constants/environmentVariables";

export const postRsvp = guestData => {
  return function(dispatch) {
    axios
      .post(`${apiBase}/guests/`, {
        data: guestData
      })
      .then(response => {
        dispatch({ type: POST_RSVP, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: POST_RSVP_ERROR, payload: err });
      });
  };
};
