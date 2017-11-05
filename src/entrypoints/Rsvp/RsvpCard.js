import React from "react";

const RsvpCard = ({ guestData }) => {
  console.log(guestData);
  return (
    <div>
      <p>Namn på gäst/Gäster: {guestData.guests}</p>
      <p>Önskelåt: {guestData.songRequest}</p>
      <p>Eventuella allergier och/Eller Specialkost: {guestData.allergies}</p>
    </div>
  );
};

export default RsvpCard;
