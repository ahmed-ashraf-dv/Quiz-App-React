import React, { useState } from "react";
import style from "./signForm.module.css";
import Radios from "../Radios/Radios";
import Button from "../Button/Button";
import { setUsername } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const SignForm = ({ levelUp }) => {
  const [gender, setGender] = useState();
  const [name, setName] = useState("");

  // Redux Data
  const {
    lang: { getTRNS },
  } = useSelector((data) => data);

  const Dispatch = useDispatch();

  const formHandelar = (e) => {
    // Stop Reload
    e.preventDefault();

    // Validation
    if (!name) return Swal.fire("Ops !", getTRNS.Errors[1], "error");
    if (!gender) return Swal.fire("Ops !", getTRNS.Errors[2], "error");

    // Get Next Page
    Dispatch(setUsername(name));
    levelUp();
  };

  return (
    <form className={style.form} onSubmit={formHandelar}>
      <div className={style.name}>
        <label htmlFor="name">{getTRNS.form[0]}</label> <br />
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          autoComplete="off"
          type="text"
          id="name"
        />
      </div>
      <p>{getTRNS.form[1]}</p>
      <div className={style.radios + " radios"}>
        {getTRNS.form[2].map((answer, idx) => (
          <Radios
            onChange={(e) => setGender(e.target.value)}
            value={idx + 1}
            key={idx + 1}
            answer={answer}
          />
        ))}
      </div>
      <Button value={getTRNS.form[3]} />
    </form>
  );
};

export default SignForm;
