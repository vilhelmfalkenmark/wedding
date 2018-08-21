import React from "react";
import WithStyles from "layout/WithStyles";
import ContactUs from "components/ContactUs";
import copy from "utils/copy";

import s from "./RsvpContactUs.css";

const RsvpContactUs = ({ message }) => (
  <div className={s({ container: true })}>
    <p className={s({ message: true })}>{message}</p>
    <ContactUs people={copy.couple} />
  </div>
);

export default WithStyles(RsvpContactUs, s);
