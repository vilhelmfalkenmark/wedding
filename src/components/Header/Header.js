import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Burger from "components/Burger";
import routes from "utils/constants/routes";
import s from "./Header.scss";
import withStyles from "hocs/WithStyles";

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
      classNames = `${s.Container} ${s.IsOpen}`;
    } else if (!mobileMenuOpen && mobileMenuHasBeenDisplayed) {
      classNames = `${s.Container} ${s.IsClosed}`;
    } else {
      classNames = `${s.Container} ${s.InitiallyHidden}`;
    }
    return [
      <header className={classNames} key={12}>
        <div className={s.Inner}>
          <nav>
            <ul className={s({ List: true })}>
              {routes.map((route, index) => (
                <li className={s.ListItem} key={index}>
                  <NavLink
                    exact
                    to={route.slug}
                    className={s.ListLink}
                    activeClassName={s.IsActive}
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

export default withRouter(withStyles(Header, s));
