import React from "react";

const RsvpContactUs = ({ message }) => (
  <div className="Rsvp-contact-container">
    <p>{message}</p>
    <span className="Rsvp-contact">
      <strong>Johanna:</strong> <a href="tel:+46706176938">0708-179638</a>,
      alternativt{" "}
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
);

export default RsvpContactUs;
