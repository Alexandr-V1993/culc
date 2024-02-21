import React, { useState, useEffect } from "react";
import "./FormAlcohol.css";

function FormAlcohol({
  children,
  obj,
  url,
  formTitle,
  all,
  summaOblog,
  alcoTitle,
  crepost,
  select,
}) {
  const [total, setTotal] = useState("");
  const [vans, setVans] = useState("");

  const [weight, setWeight] = useState("");
  const [strength, setStrength] = useState("");

  let weights;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const responseData = await response.json();
      setTotal(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Используем useEffect, чтобы обработать изменение total и сбросить переменные при изменении селекта
  useEffect(() => {
    if (total?.data?.value) {
      setVans(total.data.value);
      setStrength(total.data.strength);
    } else if (total?.data?.volumeHeads && total?.data?.volumePureAlcohol) {
      setVans(total.data.volumePureAlcohol);
      setStrength(total.data.volumeHeads);
    } else if (total?.data?.weight) {
      setWeight(total.data.weight);
    }
  }, [total]);

  // Обнуляем переменные при изменении значения селекта
  useEffect(() => {
    setStrength("");
    setWeight("");
    setVans("");
  }, [select]);

  return (
    <form className="inlinecalculator" onSubmit={handleSubmit}>
      <div className="centre-top testcentre">{children}</div>

      <div id="result">
        <p className="vsize">{formTitle}</p>
        {weights}
        <p className="resultstring">
          <span id="resultimt">
            {alcoTitle} {vans}
            {all === "литров" ? "" : all}
          </span>
          <span id="resultimt">
            {crepost} {weight}
            {strength}
          </span>
        </p>
        <p>{summaOblog}</p>
      </div>

      <div className="btn-top">
        <button className="btns bst" onClick={handleSubmit}>
          Расчитать
        </button>
      </div>
    </form>
  );
}

export default FormAlcohol;
