import React from "react";
import s from "./Instagram.scss";

const InstagramImageSkeleton = () => {
  return <li className={`${s.item} ${s.skeleton}`} />;
};

const InstagramSkeleton = () => {
  return (
    <ul className={s.list}>
      <InstagramImageSkeleton />
      <InstagramImageSkeleton />
      <InstagramImageSkeleton />
      <InstagramImageSkeleton />
      <InstagramImageSkeleton />
      <InstagramImageSkeleton />
    </ul>
  );
};

export default InstagramSkeleton;
