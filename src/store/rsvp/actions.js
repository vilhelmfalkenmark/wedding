import axios from "axios";

import {
  POST_RSVP_SUCCESS,
  POST_RSVP_ERROR,
  HANDLE_RSVP_FORM,
  TOGGLE_RSVP_ATTENDING
} from "utils/constants/actionTypes";

import { apiBase } from "utils/constants/environmentVariables";

export const postRsvp = guestData => {
  return function(dispatch) {
    axios
      .post(`${apiBase}/guests/`, {
        data: guestData
      })
      .then(response => {
        dispatch({ type: POST_RSVP_SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: POST_RSVP_ERROR, payload: err });
      });
  };
};

export const handleRsvpData = ({ key, value }) => ({
  type: HANDLE_RSVP_FORM,
  payload: {
    key,
    value
  }
});

export const toggleRsvpAttending = () => ({
  type: TOGGLE_RSVP_ATTENDING
});
