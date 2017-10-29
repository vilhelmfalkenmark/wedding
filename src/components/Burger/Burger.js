import React from "react";

const Burger = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <button
      className={
        mobileMenuOpen ? "Burger-container is-open" : "Burger-container"
      }
      onClick={toggleMobileMenu}
    >
      <div className="Burger-inner">
        <div className="Burger" />
      </div>
    </button>
  );
};

export default Burger;
