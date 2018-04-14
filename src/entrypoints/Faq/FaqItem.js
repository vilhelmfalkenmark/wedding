import React from "react";
import WithStyles from "layout/WithStyles";

import s from "./Faq.css";

const FaqItem = ({ question, answer }) => {
  return (
    <li className={s.item}>
      <h4 className={s.question}>{question}</h4>
      <p className={s.answer}>{answer}</p>
    </li>
  );
};

export default WithStyles(FaqItem, s);
