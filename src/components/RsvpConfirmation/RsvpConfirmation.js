import React from "react";
import RsvpContactUs from "components/RsvpContactUs";
import WithStyles from "layout/WithStyles";
import s from "./RsvpConfirmation.css";

const RsvpConfirmation = ({
  guestData,
  attendingMessage,
  notAttendingMessage
}) => {
  return (
    <div className={s.card}>
      <div className={s.inner}>
        <h3>{guestData.attending ? attendingMessage : notAttendingMessage}</h3>

        <ul className={s.list}>
          <li className={s.item}>
            <strong>Namn på Gäst/Gäster:</strong>
            &nbsp;
            <span>{guestData.guests}</span>
          </li>
          <li className={s.item}>
            <strong>Kommer:</strong>
            &nbsp;
            <span>{guestData.attending ? "Ja" : "Nej"}</span>
          </li>
          <li className={s.item}>
            <strong>Relation till brudparet:</strong>
            &nbsp;
            <span>{guestData.relationship}</span>
          </li>
          <li className={s.item}>
            <strong>Mailadress:</strong>
            &nbsp;
            <span>{guestData.mail}</span>
          </li>
          <li className={s.item}>
            <strong>Eventuella allergier och/eller Specialkost:</strong>
            &nbsp;
            <span>{guestData.allergies ? guestData.allergies : "Nej"}</span>
          </li>
          <li className={s.item}>
            <strong>Önskelåt:</strong>
            &nbsp;
            <span>
              {guestData.songRequest
                ? guestData.songRequest
                : "Ingen låt önskad. Inga problem vi önskar en åt dig!"}
            </span>
          </li>
        </ul>

        <RsvpContactUs
          message={
            "Om du/ni av någon anledning skulle vilja ändra något får du/ni gärna ringa/maila oss på:"
          }
        />
      </div>
    </div>
  );
};

export default WithStyles(RsvpConfirmation, s);
