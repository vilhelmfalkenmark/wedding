import React from "react";
import RsvpContactUs from "./RsvpContactUs";

const RsvpCard = ({ guestData, message, subMessage }) => {
  return (
    <div>
      <h1>{message}</h1>
      <h3>{subMessage}</h3>
      <div className="RsvpCard">
        <p>Namn på gäst/Gäster: {guestData.guests}</p>
        <p>
          Önskelåt:{" "}
          {guestData.songRequest ? (
            guestData.songRequest
          ) : (
            <span>Pitbull - Wake me up before you gogo</span>
          )}
        </p>
        <p>Eventuella allergier och/eller Specialkost: {guestData.allergies}</p>
        <RsvpContactUs
          message={
            "Om du av någon anledning skulle vilja ändra något får du/ni gärna ringa/maila oss på:"
          }
        />
      </div>
    </div>
  );
};

export default RsvpCard;
