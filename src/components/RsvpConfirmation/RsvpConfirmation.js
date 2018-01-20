import React from "react";
import RsvpContactUs from "components/RsvpContactUs";
import s from "./RsvpConfirmation.scss";

const RsvpConfirmation = ({ guestData, subMessage }) => {
  console.log(guestData);

  return (
    <div className={s.card}>
      <h3>{subMessage}</h3>

      <ul className={s.list}>
        <li className={s.item}>
          <strong>Namn på Gäst/Gäster:</strong>&nbsp;
          <span>{guestData.guests}</span>
        </li>
        <li className={s.item}>
          <strong>Relation till brudparet:</strong>&nbsp;
          <span>{guestData.relationship}</span>
        </li>
        <li className={s.item}>
          <strong>Mailadress:</strong>&nbsp;
          <span>{guestData.mail}</span>
        </li>
        <li className={s.item}>
          <strong>Eventuella allergier och/eller Specialkost:</strong>&nbsp;
          <span>{guestData.allergies ? guestData.allergies : "Nej"}</span>
        </li>
        <li className={s.item}>
          <strong>Önskelåt:</strong>&nbsp;
          <span>
            {guestData.songRequest
              ? guestData.songRequest
              : "Ingen låt önskad. Inga problem vi önskar en åt dig!"}
          </span>
        </li>
      </ul>

      <RsvpContactUs
        message={
          "Om du av någon anledning skulle vilja ändra något får du/ni gärna ringa/maila oss på:"
        }
      />
    </div>
  );
};

export default RsvpConfirmation;
