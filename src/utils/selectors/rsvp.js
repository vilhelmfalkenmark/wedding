////////////////////////////////////////////
// SELECTOR FOR ALREADY RSVP-D GUEST
////////////////////////////////////////////
export const fetchingGuestFulfilled = guestData => {
  if (
    guestData.fetching === false &&
    guestData.fulfilled &&
    guestData.data &&
    guestData.error === false
  ) {
    return true;
  }
  return false;
};
