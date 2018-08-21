import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import routes, { HOME_ROUTE } from "router/routes";
import ville from "assets/svg/ville.svg";
import johanna from "assets/svg/johanna.svg";
import WithStyles from "layout/WithStyles";

import copy from "utils/copy";

import s from "./Header.css";

const Header = () => (
  <header className={s({ header: true })}>
    <div
      className={s({
        container: true
      })}
    >
      <div className={s({ inner: true })}>
        <NavLink to={HOME_ROUTE.slug} className={s({ logoLink: true })}>
          <figure className={s({ logo: true })}>
            <img className={s.johanna} src={johanna} alt="Johanna SVG" />
            <img className={s.ville} src={ville} alt="Ville SVG" />
            <span className={s({ hashTag: true })}>{copy.hashTag}</span>
          </figure>
        </NavLink>
        <nav className={s({ navigation: true })}>
          <ul className={s.list}>
            {routes.map((route, index) => (
              <li className={s.item} key={index}>
                <NavLink
                  exact
                  to={route.slug}
                  className={s({ link: true })}
                  activeClassName={s({ link_isActive: true })}
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
      </div>
    </div>
  </header>
);

export default withRouter(WithStyles(Header, s));
