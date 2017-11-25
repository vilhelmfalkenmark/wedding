import React from "react";

const FaqItem = ({ question, answer }) => {
  return (
    <li className="Faq-item">
      <h4 className="Faq-item-question">{question}</h4>
      <p className="Faq-item-answer">{answer}</p>
    </li>
  );
};

export default FaqItem;
