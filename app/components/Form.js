import React, { useState } from "react";

import "./Form.css";
function Form({ children, obj, url, formTitle, all, summaOblog }) {
  const [total, setTotal] = useState("");
  let van;
  let two;

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
    van = total?.data?.amount;
    two = total?.data?.tax;
  }
  if (total?.data?.value) {
    van = total?.data?.value;
  }
  return (
    <form className="inlinecalculator " onSubmit={handleSubmit}>
      {children}
      <div id="result">
        <p>{formTitle}</p>
        <p class="resultstring">
          <span id="resultimt">
            {van || 0}

            {all}
          </span>
        </p>
        <p>
          {summaOblog} <span className="blacks">{two}</span>
        </p>
      </div>
      <button className="btns bst" onSubmit={handleSubmit}>
        Расчитать
      </button>
    </form>
  );
}

export default Form;
