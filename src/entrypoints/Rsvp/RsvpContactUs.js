import React from "react";
import s from "./Rsvp.scss";

const RsvpContactUs = ({ message }) => (
  <div className={s.contactContainer}>
    <p>{message}</p>
    <span className={s.contact}>
      <strong>Johanna:</strong> <a href="tel:+46706176938">0708-179638</a>,
      alternativt{" "}
      <a href="mailto:johannaviola@gmail.com">johannaviola@gmail.com</a>
    </span>
    <span className={s.contact}>
      <strong>Ville:</strong> <a href="tel:+46705580198">0705-580198</a>,
      alternativt{" "}
      <a href="mailto:vilhelmfalkenmark@gmail.com">
        vilhelmfalkenmark@gmail.com
      </a>
    </span>
  </div>
);

export default RsvpContactUs;
