import React from "react";
import ScrollDown from "components/ScrollDown";
import image from "assets/images/hero.jpg";
import copy from "utils/copy";
import s from "./Hero.scss";

const Hero = ({ infoFulfilled, scrollToContent = () => null }) => {
  return (
    <section
      className={s.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className={s.title}>Vi gifter oss {copy.weddingDate}</h1>
      <figure className={s.scroller}>
        {infoFulfilled ? (
          <ScrollDown onClickCallback={scrollToContent} />
        ) : null}
      </figure>
    </section>
  );
};

export default Hero;
