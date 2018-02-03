import React from "react";
import s from "./RsvpSkeleton.scss";

const RsvpSkeleton = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={`${s.block} ${s.r1c1}`} />
        <li className={`${s.block} ${s.r2c1}`} />
        <li className={`${s.block} ${s.r3c1}`} />
        <li className={`${s.block} ${s.r4c1}`} />
        <li className={`${s.block} ${s.r5c1}`} />
      </ul>
    </div>
  );
};

export default RsvpSkeleton;
