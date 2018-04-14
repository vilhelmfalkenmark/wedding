import React from "react";
import WithStyles from "layout/WithStyles";
import ContactUs from "components/ContactUs";

import s from "./RsvpContactUs.css";

const RsvpContactUs = ({ message }) => (
  <div className={s({ container: true })}>
    <p className={s.message}>{message}</p>
    <ContactUs />
  </div>
);

export default WithStyles(RsvpContactUs, s);
