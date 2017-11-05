const initialState = {
  guests: {
    fulfilled: false,
    fetching: false,
    error: false,
    guests: []
  },
  faq: {
    fulfilled: false,
    fetching: false,
    error: false,
    faq: []
  },
  rsvp: {
    hasRsvp: false,
    error: false,
    data: {}
  }
};

export default initialState;
