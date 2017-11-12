import React from "react";

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
        <div className="Rsvp-contact-container">
          <p>
            Om du av någon anledning skulle vilja ändra något får du/ni gärna
            ringa/maila oss på:
          </p>
          <span className="Rsvp-contact">
            <strong>Johanna:</strong> <a href="tel:+46706176938">
              0708-179638
            </a>, alternativt{" "}
            <a href="mailto:johannaviola@gmail.com">johannaviola@gmail.com</a>
          </span>
          <span className="Rsvp-contact">
            <strong>Ville:</strong> <a href="tel:+46705580198">0705-580198</a>,
            alternativt{" "}
            <a href="mailto:vilhelmfalkenmark@gmail.com">
              vilhelmfalkenmark@gmail.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RsvpCard;
