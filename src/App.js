import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "utils/constants/routes";

import Header from "components/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mobileMenuOpen: false
    };
  }

  render() {
    const { mobileMenuOpen } = this.state;
    return (
      <Router>
        <div className="App">
          <Header
            mobileMenuOpen={mobileMenuOpen}
            toggleMobileMenu={() =>
              this.setState({
                mobileMenuOpen: !mobileMenuOpen
              })}
          />
          <main
            className={
              mobileMenuOpen ? "Main-container is-open" : " Main-container"
            }
          >
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.slug}
                component={route.component()}
              />
            ))}
          </main>
          <footer className="Footer" />
        </div>
      </Router>
    );
  }
}

export default App;
