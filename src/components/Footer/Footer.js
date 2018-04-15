import React, { Component } from "react";
import Instagram from "components/Instagram";
import WithStyles from "layout/WithStyles";

import s from "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className={s({ container: true })}>
        <div className={s.innerContainer}>
          <Instagram />
        </div>
      </footer>
    );
  }
}

export default WithStyles(Footer, s);
