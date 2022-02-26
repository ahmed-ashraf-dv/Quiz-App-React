import React from "react";
import { useSelector } from "react-redux";
import style from "./Results.module.css";

const Results = () => {
  // Redux Data
  const {
    lang: { getTRNS },
  } = useSelector((data) => data);

  return (
    <table className={style.table + " table"}>
      <thead>
        <tr>
          <td>{getTRNS.resulTaple[1]}</td>
          <td>{getTRNS.resulTaple[0]}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10</td>
          <td>احمد</td>
        </tr>
        <tr>
          <td>8</td>
          <td>احمد</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Results;
