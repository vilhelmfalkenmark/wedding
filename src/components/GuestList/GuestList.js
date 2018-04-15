import React from "react";
import WithStyles from "layout/WithStyles";
import s from "./GuestList.css";

const GuestList = ({ guests, heading }) => (
  <div>
    <h3 className={s({ heading: true })}>{heading}</h3>
    <ul className={s({ list: true })}>
      {guests.map((g, index) => (
        <li key={index} className={s({ item: true })}>
          <p>
            <strong>Gäst/Gäster:</strong>&nbsp;
            <span>{g.guests}</span>
          </p>
          <p>
            <strong>Relation till brudparet:</strong>&nbsp;
            <span>{g.relationship}</span>
          </p>
          {g.songRequest && (
            <p>
              <strong>Önskelåt:</strong>&nbsp;
              <span>{g.songRequest}</span>
            </p>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default WithStyles(GuestList, s);
