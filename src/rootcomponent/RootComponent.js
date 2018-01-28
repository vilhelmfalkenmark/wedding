import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "utils/router/routes";
import Header from "components/Header";
import Footer from "components/Footer";
import s from "./RootComponent.scss";

class RootComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mobileMenuOpen: false,
      mobileMenuHasBeenDisplayed: false
    };
  }

  render() {
    const { mobileMenuOpen, mobileMenuHasBeenDisplayed } = this.state;
    return (
      <Router>
        <div className={s.content}>
          <Header
            mobileMenuOpen={mobileMenuOpen}
            mobileMenuHasBeenDisplayed={mobileMenuHasBeenDisplayed}
            toggleMobileMenu={() =>
              this.setState({
                mobileMenuOpen: !mobileMenuOpen,
                mobileMenuHasBeenDisplayed: true
              })
            }
          />
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.slug}
              component={route.component}
              onChange={this.routeChanged}
            />
          ))}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default RootComponent;
