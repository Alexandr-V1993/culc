import React, { useState } from "react";

import "./Form.css";
function Form({ children, obj, url, formTitle, all, summaOblog }) {
  const [total, setTotal] = useState("");
  let van;
  let two;
  let three;
  let four;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const responseData = await response.json();
    setTotal(responseData);
  };
  if (total?.data?.bmi) {
    van = total?.data?.bmi;
    two = total?.data?.bmiCategory;
  }
  if (total?.data?.amount) {
    three = total?.data?.amount;
    four = total?.data?.tax;
  }
  if (total?.data?.value) {
    van = total?.data?.value;
  }
  return (
    <form className="inlinecalculator " onSubmit={handleSubmit}>
      <div className="centre-top">{children}</div>
      <div id="result">
        <p>{formTitle}</p>
        <p class="resultstring">
          <span id="resultimt">
            {van}
            {four}

            {all}
          </span>
        </p>
        <p>
          {summaOblog}{" "}
          <span className="blacks">
            {two}
            {three}
          </span>
        </p>
      </div>
      <div className="btn-top">
        {" "}
        <button className="btns bst" onSubmit={handleSubmit}>
          Расчитать
        </button>
      </div>
    </form>
  );
}

export default Form;
