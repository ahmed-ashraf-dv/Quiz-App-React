import React from "react";
import { useSelector } from "react-redux";
import style from "./Result.module.css";

const Result = () => {
  // Redux Data
  const {
    lang: { getTRNS },
  } = useSelector((data) => data);

  return (
    <article className={style.card + " card"}>
      <p>{getTRNS.emptyScoreMsg}</p>
    </article>
  );
};

export default Result;
