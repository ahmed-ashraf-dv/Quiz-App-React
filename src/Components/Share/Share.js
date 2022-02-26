/* eslint-disable no-restricted-globals */
import React from "react";
import { useSelector } from "react-redux";
import style from "./Share.module.css";
import Swal from "sweetalert2";

const Share = () => {
  // Create A Fake Link
  const { protocol, host } = location;
  const link = `${protocol}//${host}/1548652`;

  // Redux Data
  const {
    lang: { getTRNS },
  } = useSelector((data) => data);

  // The Alert
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const copyLink = () => {
    // Copy Link
    navigator.clipboard.writeText(link);

    // Get Alert
    Toast.fire({
      icon: "success",
      title: getTRNS.share[4],
    });
  };

  return (
    <article className={style.parent + " shareParent"}>
      <h2>{getTRNS.share[0]}</h2>
      <p>{getTRNS.share[1]}</p>
      <div className="link">
        <input type="text" value={link} readOnly />
        <button onClick={copyLink}>{getTRNS.share[2]}</button>
      </div>
      <p>{getTRNS.share[3]}</p>
    </article>
  );
};

export default Share;
