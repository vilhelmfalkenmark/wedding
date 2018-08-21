import React from "react";
import s from "./ContactUs.css";
import WithStyles from "layout/WithStyles";

const ContactUs = ({ people, small }) => (
  <div>
    <ul className={s({ list: true })}>
      {people.map((person, index) => (
        <li key={index} className={s({ item: true, item_isSmall: small })}>
          <strong>{person.name}</strong>
          &nbsp;
          <a href={`tel:${person.phoneNumber}`} className={s.link}>
            {person.prettyPhoneNumber}
          </a>
          , alternativt&nbsp;
          <a href={`mailto:${person.mail}`} className={s.link}>
            {person.mail}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default WithStyles(ContactUs, s);
