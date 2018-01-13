import React from "react";
import s from "./Burger.scss";

const Burger = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <button
      className={`${s.container}
        ${mobileMenuOpen ? s.isOpen : null}`}
      onClick={toggleMobileMenu}
    >
      <div className={s.inner}>
        <div className={s.bread} />
      </div>
    </button>
  );
};

export default Burger;
