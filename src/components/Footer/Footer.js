import React, { Component } from "react";

import Instagram from "components/Instagram";
import s from "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className={s.container}>
        <div className={s.innerContainer}>
          <Instagram />
        </div>
      </footer>
    );
  }
}

export default Footer;
