import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { levelUp } from "../../Store";

import SignForm from "../../Components/signForm/signForm";
import GetQuestion from "../../Components/GetQuestion/GetQuestion";
import Share from "../../Components/Share/Share";

const BuiltQuiz = () => {
  // Redux Data
  const { userName, level } = useSelector((data) => data);

  // Set New Level
  const dispatch = useDispatch();

  // Set New Level
  const setViewNumHandelar = () => dispatch(levelUp());

  // Set Quiz
  const sendData = (ansars) => {
    // Add Id To result
    ansars.forEach((answer, idx) => (answer.id = idx + 1));

    // Ready Data To Send
    const Data = {
      userName,
      quiz: ansars,
    };

    // Send To DB
    console.log(Data);
  };

  return level === 1 ? (
    <SignForm levelUp={setViewNumHandelar} />
  ) : level === 2 ? (
    <GetQuestion sendData={sendData} />
  ) : (
    <Share />
  );
};

export default BuiltQuiz;
