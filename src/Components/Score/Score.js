import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import { Link } from "react-router-dom";
import style from "./Score.module.css";
import Button from "../Button/Button";
import Results from "../Results/Results";

const Score = ({ score, levelDown }) => {
  // Redux Data
  const { lang } = useSelector((data) => data);
  const { getTRNS } = lang;

  return (
    <Fragment>
      <article
        dir={getTRNS.lang === "ar" ? "rtl" : "ltr"}
        className={style.card + " card01"}
      >
        {!score ? (
          <SyncLoader color="#007bff" css="" loading="true" size={13} />
        ) : (
          <Fragment>
            <h3>
              {`
            ${getTRNS.solveQuizMsg[0]} ${
                score > 7
                  ? getTRNS.solveQuizMsg[1][0]
                  : getTRNS.solveQuizMsg[1][1]
              } ${getTRNS.solveQuizMsg[2]} ${score.name}
            `}
            </h3>
            <div>
              <p>{getTRNS.score}</p>
              <span>{score.score}/10</span>
            </div>
          </Fragment>
        )}
      </article>
      <Link to="/">
        <Button
          onClick={levelDown}
          className={style.btn}
          value={getTRNS.createQuizBtn}
          type="button"
        />
      </Link>
      <Results />
    </Fragment>
  );
};

export default Score;
