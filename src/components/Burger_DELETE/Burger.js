import React from "react";
import WithStyles from "layout/WithStyles";

import s from "./Burger.css";

const Burger = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <button
      className={`${s({ container: true })}
        ${mobileMenuOpen ? s.isOpen : null}`}
      onClick={toggleMobileMenu}
    >
      <div className={s.inner}>
        <div className={s.bread} />
      </div>
    </button>
  );
};

export default WithStyles(Burger, s);
