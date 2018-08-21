import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "router/routes";
import Header from "layout/Header";
import Footer from "layout/Footer";
import WithStyles from "layout/WithStyles";

import s from "./Root.css";

const Root = () => (
  <Router>
    <div className={s({ content: true })}>
      <Header />
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

export default WithStyles(Root, s);
