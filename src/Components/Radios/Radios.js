import React, { Fragment } from "react";

const Radios = ({ onChange, value, answer }) => {
  return (
    <Fragment>
      <input
        onChange={onChange}
        type="radio"
        name="ansar"
        id={value}
        value={value}
      />
      <label htmlFor={value}>{answer}</label>
    </Fragment>
  );
};

export default Radios;
