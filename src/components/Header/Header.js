import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Burger from "components/Burger";
import routes from "utils/constants/routes";
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
    return [
      <header className={classNames} key={12}>
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
                    {route.navTitle}
                  </NavLink>
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
  }
}

export default withRouter(Header);
