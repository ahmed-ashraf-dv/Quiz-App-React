import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { levelUp, resetLevel } from "../../Store";
import { setResult } from "../../Store";

import SignForm from "../../Components/signForm/signForm";
import GetQuestion from "../../Components/GetQuestion/GetQuestion.js";
import Score from "../../Components/Score/Score";
import axios from "axios";

const SolveQuiz = () => {
  // Num Of Level Created Quiz
  const { level, score } = useSelector((data) => data);

  const dispatch = useDispatch();

  // Result Handelar
  const getResult = async (result) => {
    // Get Correct Ansard
    const data = await axios("./FakeData/FakeQuiz.json");
    const { quiz, name } = data.data;

    // Add Id To result
    result.forEach((answer, idx) => (answer.id = idx + 1));

    // Score
    let score = 0;

    // Lop For Quiz
    for (let i in quiz) {
      quiz[i].a === result[i].a && score++;
    }

    return { score, name };
  };

  // Send Ansars To DB =>
  const sendData = async (result) => {
    // Get Score
    const { score, name } = await getResult(result);

    // Send To Ui
    dispatch(setResult({ name, score }));

    // Send To DB =>
    console.log(score);
  };

  // Set New Level
  const setViewNumHandelar = () => dispatch(levelUp());

  // ReDirect To Create New Quiz
  const levelDown = () => dispatch(resetLevel());

  return level === 1 ? (
    <SignForm levelUp={setViewNumHandelar} />
  ) : level === 2 ? (
    <GetQuestion sendData={sendData} />
  ) : (
    <Score levelDown={levelDown} score={score} />
  );
};

export default SolveQuiz;
