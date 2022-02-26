import React from "react";
import style from "./Header.module.css";
import Container from "../Container/Container";
import { useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // Redux Data
  const {
    level,
    lang: { getTRNS },
  } = useSelector((data) => data);

  // Levels Handelar
  const levelH = (ownLevel, type) => {
    // Check Level And Return className
    if (type === "class") {
      return ownLevel === level ? style.acctive : "";
    }

    // Default Return
    return ownLevel === level ? faAngleDoubleDown : faAngleDoubleLeft;
  };

  // Quiz ID
  const quizId = useMatch("/:id");

  // Tips Handelar
  const TipsHandelar = ({ tip }) => {
    // Check Its Not Array
    if (!Array.isArray(tip)) {
      // Dont Do Any
      return tip;
    }

    // Check The Quiz Id
    if (quizId) {
      // Check He Is ID Num Or Page
      return !isNaN(quizId.params.id) ? tip[1] : tip[0];
    }

    // Default Returned
    return tip[0];
  };

  return (
    <header>
      <Container className={style.container}>
        <div className={style.livels}>
          {getTRNS.headerTips.map((tip, idx) => (
            <p key={idx + 1} className={levelH(idx + 1, "class")}>
              <TipsHandelar tip={tip} />
              <FontAwesomeIcon icon={levelH(idx + 1)} />
            </p>
          ))}
        </div>
      </Container>
    </header>
  );
};

export default React.memo(Header);
