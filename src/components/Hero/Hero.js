import React from "react";
import ScrollDown from "components/ScrollDown";
import image from "assets/images/hero.jpg";
import WithStyles from "layout/WithStyles";
import copy from "utils/copy";

import s from "./Hero.css";

const Hero = ({
  infoFulfilled,
  scrollToContent = () => null,
  title = `Vi gifter oss ${copy.weddingDate}!`
}) => {
  return (
    <section
      className={s({ container: true })}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className={s({ title: true })}>{title}</h1>
      <figure className={s({ scroller: true })}>
        {infoFulfilled && <ScrollDown onClickCallback={scrollToContent} />}
      </figure>
    </section>
  );
};

export default WithStyles(Hero, s);
