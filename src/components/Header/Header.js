import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Burger from "components/Burger";
import routes from "utils/router/routes";
import ville from "assets/svg/ville.svg";
import johanna from "assets/svg/johanna.svg";
import WithStyles from "layout/WithStyles";

import s from "./Header.scss";

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

    let classNames;
    if (mobileMenuOpen && mobileMenuHasBeenDisplayed) {
      classNames = `${s.container} ${s.isOpen}`;
    } else if (!mobileMenuOpen && mobileMenuHasBeenDisplayed) {
      classNames = `${s.container} ${s.isClosed}`;
    } else {
      classNames = `${s.container} ${s.initiallyHidden}`;
    }
    return (
      <header className={s.header}>
        <div className={classNames}>
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
                        className={route.largeIcon ? s.largeIcon : s.icon}
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
