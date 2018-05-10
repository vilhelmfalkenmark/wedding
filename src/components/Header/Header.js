import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import routes, { HOME_ROUTE } from "utils/router/routes";
import ville from "assets/svg/ville.svg";
import johanna from "assets/svg/johanna.svg";
import WithStyles from "layout/WithStyles";

import s from "./Header.css";

const Header = () => (
  <header className={s({ header: true })}>
    <div
      className={s({
        container: true
      })}
    >
      <div className={s({ inner: true })}>
        <nav className={s({ navigation: true })}>
          <ul className={s.list}>
            {routes.map((route, index) => (
              <li className={s.item} key={index}>
                <NavLink
                  exact
                  to={route.slug}
                  className={s({ link: true })}
                  activeClassName={s.isActive}
                >
                  <img
                    src={route.icon}
                    alt="arrow-to-content"
                    className={s({
                      largeIcon: route.largeIcon,
                      smallIcon: !route.largeIcon
                    })}
                  />
                  <span className={s.linkTitle}>{route.navTitle}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <NavLink to={HOME_ROUTE.slug} className={s({ link: true })}>
          <figure className={s({ svgContainer: true })}>
            <img className={s.johanna} src={johanna} alt="Johanna SVG" />
            <img className={s.ville} src={ville} alt="Ville SVG" />
          </figure>
        </NavLink>
      </div>
    </div>
  </header>
);

export default withRouter(WithStyles(Header, s));
