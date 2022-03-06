import React, { useState, useEffect, useRef, useMemo } from "react";
import { levelUp } from "../../Store";
import { useSelector, useDispatch } from "react-redux";

import SyncLoader from "react-spinners/SyncLoader";
import Swal from "sweetalert2";
import axios from "axios";
import Radios from "../Radios/Radios";
import Button from "../Button/Button";
import style from "./GetQuestion.module.css";

const SolveQestion = ({ sendData }) => {
  // Redux Data
  const { userName, lang } = useSelector((data) => data);
  const { getTRNS } = lang;

  // Memo Array To Save Data
  const result = useMemo(() => [], []);

  // Save The Ansar For Qestion
  const [ansar, setAnsar] = useState();

  // Get Q In API
  const [{ isLoding, qusetions }, setQuestions] = useState({
    isLoding: true,
    qusetions: {},
  });

  // Num Of Qestion
  const [num, setNum] = useState(0);

  // For Parent Ansars
  const ansars = useRef();

  // Dispatch
  const dispatch = useDispatch();

  const setViewNumHandelar = () => dispatch(levelUp());

  // Get Qeustion From API
  useEffect(() => {
    const FetchData = async () => {
      // Get Question
      const qes = await axios("./FakeData/qusetion.json");

      // Set The Question
      setQuestions({ isLoding: false, qusetions: qes.data });
    };

    FetchData();
  }, []);

  // Form Handelar
  const setAsnsarHandelar = (e) => {
    // Prevent Reload
    e.preventDefault();

    // If Not Check
    if (!ansar) return Swal.fire("Ops !", getTRNS.Errors[0], "error");

    // Default Prevent
    result.push(ansar);

    // Empty Ansar
    setAnsar();

    // 10 Qes Only
    if (num + 1 >= 10) {
      // Set QES
      sendData(result);

      // Level Up
      return setViewNumHandelar();
    }

    // Re Start Ansars
    ansars.current.childNodes.forEach(
      (el) => el.checked && (el.checked = false)
    );

    // Next Qestion
    setNum((prev) => prev + 1);
  };

  // Get Qestion Now
  const question = qusetions[num];

  return (
    <div
      className={style.qus + " qus"}
      dir={getTRNS.lang === "ar" ? "rtl" : "ltr"}
    >
      <div className={style.hello + " hello"}>
        <h2>
          {getTRNS.welcomeMsg} {userName}
        </h2>
        <p>{getTRNS.answer}</p>
        <p className={style.proggres}>
          {getTRNS.numOfQes} {num + 1}/ 10
        </p>
      </div>
      {isLoding ? (
        <SyncLoader color="#007bff" css="" loading="true" size={13} />
      ) : (
        <form onSubmit={setAsnsarHandelar}>
          <article>
            <p>{question.title.a_m}</p>
            <div
              className={style.ansars + " ansrasParent"}
              id="ansars"
              ref={ansars}
            >
              {question.answers.map((answer, idx) => (
                <Radios
                  onChange={(e) => setAnsar({ a: +e.target.value })}
                  key={idx + 1}
                  value={idx + 1}
                  answer={answer}
                />
              ))}
            </div>
          </article>
          <Button value={getTRNS.next} />
        </form>
      )}
    </div>
  );
};

export default SolveQestion;
