import React from "react";

import SVG from "components/SVG";
import ville from "assets/svg/ville.svg";
import johanna from "assets/svg/johanna.svg";
import WithStyles from "layout/WithStyles";

import s from "./Logo.css";

const Logo = ({ copy }) => (
  <figure className={s({ logo: true })}>
    <SVG className={s({ johanna: true })} svg={johanna} />
    <SVG className={s({ ville: true })} svg={ville} />
    {copy && <span className={s({ hashTag: true })}>{copy}</span>}
  </figure>
);

export default WithStyles(Logo, s);
