import React, { Component } from "react";
import Instagram from "components/Instagram";
import ContactUs from "components/ContactUs";
import Button from "components/Button";
import Scroll from "react-scroll";
import Logo from "components/Logo";

import copy from "utils/copy";

import WithStyles from "layout/WithStyles";

import s from "./Footer.css";

class Footer extends Component {
  scrollToHeader() {
    Scroll.scroller.scrollTo("header", {
      duration: 300,
      delay: 0,
      smooth: true
    });
  }

  render() {
    return (
      <footer className={s({ container: true })}>
        <div className={s({ innerContainer: true })}>
          {/* GRID START */}
          <div className={s({ grid: true })}>
            <div className={s({ column: true })}>
              <h4>Kontaktuppgifter till brudparet</h4>
              <ContactUs people={copy.couple} small />
            </div>
            <div className={s({ column: true })}>
              <h4>Toastmasters</h4>
              <ContactUs people={copy.toastMasters} small />
            </div>
            <div className={s({ column: true })}>
              <h4>Bra att veta</h4>
              <p className={s({ goodToKnow: true })}>
                {`Bröllopet kommer äga rum den ${copy.weddingDate} på
                ${copy.location.title}. Addressen dit är ${
                  copy.location.address
                }. Det kommer serveras alkoholfria och vegetariska alternativ. Djur undandbedes. Om ni åker kommunalt så rekommenderar vi ${
                  copy.location.publicTransport
                }.`}
              </p>
            </div>
          </div>
          {/* GRID END */}
          <h4 className={s({ hashTag: true })}>{copy.hashTag} på Instagram</h4>
          <Instagram />
        </div>
        <Logo />
        <div className={s({ buttonContainer: true })}>
          <Button
            buttonType={"WHITE_"}
            className={s({ scrollButton: true })}
            onClickCallback={this.scrollToHeader.bind(this)}
            text={"Tillbaka till toppen"}
            enabled
          />
        </div>
      </footer>
    );
  }
}

export default WithStyles(Footer, s);
