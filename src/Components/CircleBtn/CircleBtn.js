import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CircleBtn = ({ onClick, icon, className }) => {
  return (
    <button onClick={onClick} className={"circle-Btn " + className}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default CircleBtn;
