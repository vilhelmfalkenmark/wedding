const initialState = {
  guests: {
    guests: {
      fulfilled: false,
      fetching: false,
      error: false,
      data: []
    },
    guest: {
      fulfilled: false,
      fetching: false,
      error: false,
      data: []
    }
  },
  faq: {
    fulfilled: false,
    fetching: false,
    error: false,
    faq: []
  },
  rsvp: {
    fulfilled: false,
    error: false,
    data: {}
  },
  info: {
    fulfilled: false,
    fetching: false,
    error: false,
    data: {}
  },
  instagram: {
    fulfilled: false,
    fetching: false,
    error: false,
    data: []
  }
};

export default initialState;
