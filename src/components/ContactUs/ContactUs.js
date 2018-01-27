import React from "react";
import s from "./ContactUs.scss";
import copy from "utils/copy";

const ContactUs = () => (
  <div>
    <ul className={s.list}>
      {copy.couple.map((person, index) => (
        <li key={index} className={s.item}>
          <strong>{person.name}</strong>&nbsp;
          <a href={`tel:${person.phoneNumber}`} className={s.link}>
            {person.prettyPhoneNumber}
          </a>, alternativt&nbsp;
          <a href={`mailto:${person.mail}`} className={s.link}>
            {person.mail}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactUs;
