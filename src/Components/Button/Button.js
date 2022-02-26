import React from "react";
import style from "./Button.module.css";

const Button = ({ value, type, onClick, className }) => {
  return (
    <button
      onClick={onClick || (() => "")}
      type={type || "submit"}
      className={style.btnBrimery + " " + (className || "")}
    >
      {value}
    </button>
  );
};

export default Button;
