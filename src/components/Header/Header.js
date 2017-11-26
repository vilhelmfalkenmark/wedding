import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import Burger from "components/Burger";

import routes from "utils/constants/routes";

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
      classNames = "Header is-open";
    } else if (!mobileMenuOpen && mobileMenuHasBeenDisplayed) {
      classNames = "Header is-closed";
    } else {
      classNames = "Header initially-hidden";
    }
    return [
      <header className={classNames} key={12}>
        <div className="Header-inner">
          <nav>
            <ul className="Nav-list">
              {routes.map((route, index) => (
                <li className="Nav-list-item" key={index}>
                  <NavLink
                    exact
                    to={route.slug}
                    className="Nav-list-link"
                    activeClassName="is-active"
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
