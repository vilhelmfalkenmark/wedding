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
    rsvpForm: {
      guests: "",
      songRequest: "",
      mail: "",
      allergies: "",
      attending: true,
      relationship: ""
    },
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
    data: {
      data: []
    }
  }
};

export default initialState;
