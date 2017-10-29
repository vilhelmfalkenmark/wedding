import React from "react";
import { Link } from "react-router-dom";
import Burger from "components/Burger";

import routes from "utils/constants/routes";

const Header = ({ mobileMenuOpen, toggleMobileMenu }) => [
  <header className={mobileMenuOpen ? "Header is-open" : "Header"} key={12}>
    <div className="Header-inner">
      <nav>
        <ul className="Nav-list">
          {routes.map((route, index) => (
            <li className="Nav-list-item" key={index}>
              <Link to={route.slug} className="Nav-list-link">
                {route.navTitle}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>,
  <Burger
    mobileMenuOpen={mobileMenuOpen}
    toggleMobileMenu={toggleMobileMenu}
    key={13}
  />
];

export default Header;
