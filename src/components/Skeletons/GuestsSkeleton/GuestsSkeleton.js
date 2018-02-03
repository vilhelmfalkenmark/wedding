import React from "react";
import s from "./GuestsSkeleton.scss";

const GuestSkeleton = () => {
  return (
    <li className={`${s.item} ${s.skeleton}`}>
      <span className={`${s.r1c1} ${s.skeletonBlock}`} />
      <span className={`${s.r2c1} ${s.skeletonBlock}`} />
      <span className={`${s.r3c1} ${s.skeletonBlock}`} />
      <span className={`${s.r4c1} ${s.skeletonBlock}`} />
      <span className={`${s.r5c1} ${s.skeletonBlock}`} />
    </li>
  );
};

const GuestsSkeleton = () => {
  return (
    <ul className={s.list}>
      <GuestSkeleton />
      <GuestSkeleton />
      <GuestSkeleton />
      <GuestSkeleton />
      <GuestSkeleton />
      <GuestSkeleton />
    </ul>
  );
};

export default GuestsSkeleton;