import React from "react";
import s from "./RsvpContactUs.scss";
import ContactUs from "components/ContactUs";

const RsvpContactUs = ({ message }) => (
  <div className={s.container}>
    <p className={s.message}>{message}</p>
    <ContactUs />
  </div>
);

export default RsvpContactUs;
