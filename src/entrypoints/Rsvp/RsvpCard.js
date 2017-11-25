import React from "react";
import RsvpContactUs from "./RsvpContactUs";
import RibbonHeading from "components/RibbonHeading";

const RsvpCard = ({ guestData, message, subMessage }) => {
  return (
    <div>
      <RibbonHeading heading={message} />
      <h3>{subMessage}</h3>
      <div className="RsvpCard">
        <p>Namn på gäst/Gäster: {guestData.guests}</p>
        <p>
          Önskelåt:{" "}
          {guestData.songRequest ? (
            guestData.songRequest
          ) : (
            <span className="u-Red">
              Ingen låt önskad. Inga problem vi önskar en åt dig!
            </span>
          )}
        </p>
        <p>
          Eventuella allergier och/eller Specialkost:{" "}
          {guestData.allergies ? (
            guestData.allergies
          ) : (
            <span className="u-Red">Nej</span>
          )}
        </p>
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
