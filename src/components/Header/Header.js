import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Burger from "components/Burger";
import routes from "utils/router/routes";
import ville from "assets/svg/ville.svg";
import johanna from "assets/svg/johanna.svg";
import WithStyles from "layout/WithStyles";

import s from "./Header.css";

class Header extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.toggleMobileMenu();
    }
  }
  render() {
    const {
      mobileMenuOpen,
      toggleMobileMenu,
      mobileMenuHasBeenDisplayed
    } = this.props;

    return (
      <header className={s({ header: true })}>
        <div
          className={s({
            container: true,
            container_isOpen: mobileMenuOpen && mobileMenuHasBeenDisplayed,
            container_isClosed: !mobileMenuOpen && mobileMenuHasBeenDisplayed
          })}
        >
          <div className={s.inner}>
            <nav>
              <ul className={s.list}>
                {routes.map((route, index) => (
                  <li className={s.item} key={index}>
                    <NavLink
                      exact
                      to={route.slug}
                      className={s.link}
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
            <figure className={s.svgContainer}>
              <img className={s.johanna} src={johanna} alt="Johanna SVG" />
              <img className={s.ville} src={ville} alt="Ville SVG" />
            </figure>
          </div>
        </div>
        <Burger
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          key={13}
        />
      </header>
    );
  }
}

export default withRouter(WithStyles(Header, s));
