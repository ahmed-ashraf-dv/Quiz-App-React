import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import style from "./Fotter.module.css";
import Container from "../Container/Container";

const Fotter = () => {
  // Redux Translate
  const {
    lang: { getTRNS },
  } = useSelector((data) => data);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer>
      <Container className={style.container}>
        <p className={style.thx}>{getTRNS.thxFot}</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/ForR3oN/" target="_blanc">
              <FontAwesomeIcon icon={faFacebook} size="2x" color="#2050b3" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ahmdgun0/" target="_blanc">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
        </ul>
        <button onClick={toTop} className={style.toTop + " circle-Btn"}>
          <FontAwesomeIcon icon={faArrowAltCircleUp} size="3x" />
        </button>
      </Container>
    </footer>
  );
};

export default Fotter;
