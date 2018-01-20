import React from "react";
import s from "./RsvpContactUs.scss";

const RsvpContactUs = ({ message }) => (
  <div className={s.container}>
    <p className={s.message}>{message}</p>
    <ul className={s.list}>
      <li className={s.item}>
        <strong>Johanna:</strong>&nbsp;
        <a href="tel:+46706176938" className={s.link}>
          0708-179638
        </a>, alternativt&nbsp;
        <a href="mailto:johannaviola@gmail.com" className={s.link}>
          johannaviola@gmail.com
        </a>
      </li>
      <li className={s.item}>
        <strong>Ville:</strong>&nbsp;
        <a href="tel:+46705580198" className={s.link}>
          0705-580198
        </a>, alternativt&nbsp;
        <a href="mailto:vilhelmfalkenmark@gmail.com" className={s.link}>
          vilhelmfalkenmark@gmail.com
        </a>
      </li>
    </ul>
  </div>
);

export default RsvpContactUs;
