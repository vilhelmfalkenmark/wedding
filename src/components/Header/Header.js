import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="Header">
    <div className="Header-inner">
      <nav>
        <ul className="Nav-list">
          <li className="Nav-list-item">
            <Link to={"gaster"} className="Nav-list-link">
              Gäster
            </Link>
          </li>
          <li className="Nav-list-item">
            <Link to={"vanliga-fragor"} className="Nav-list-link">
              Frågor och svar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
