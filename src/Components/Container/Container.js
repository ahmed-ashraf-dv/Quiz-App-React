import React from "react";
import style from "./Container.module.css";

const Container = ({ className, children }) => {
  return (
    <div className={style.container + " container01 " + className}>
      {children}
    </div>
  );
};

export default Container;
