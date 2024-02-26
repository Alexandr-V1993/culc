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
  strengthAfter,
  setStrengthAfter,
}) {
  const [total, setTotal] = useState("");
  const [vans, setVans] = useState("");

  const [weight, setWeight] = useState("");
  const [strength, setStrength] = useState("");
  const [clip, setClip] = useState("Скопировать");
  const [glucoza, setGlucoza] = useState(
    "Из глюкозы и фруктозы получается на 5% меньше спирта, чем из сахарозы, но выше качество спирта."
  );
  const [areometr, setAreometr] = useState(
    "Ареометр показывает крепость верно только при температуре 20 °C."
  );
  const [dannie, setDannie] = useState(
    "Данные результаты актуальны и верны при температуре компонентов равной 20°C"
  );

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
  useEffect(() => {
    setTimeout(() => {
      if (clip === "Скопировано") {
        setClip("Скопировать");
      }
    }, 1500);
  }, [clip]);
  return (
    <form className="inlinecalculator" onSubmit={handleSubmit}>
      <div className="row-res">
        {" "}
        <div className="centre-top testcentre">{children}</div>
        <div className="res">
          <p className="vsizes">{formTitle}</p>
          {weights}
          <p className="resultstring">
            <span id="resultimt">
              {alcoTitle} {vans}
              {select === "type3" || select === "type4" ? "°" : ""}
              {all === "литров" ? "" : all}
            </span>
            <span id="resultimt">
              {crepost} {weight}
              {strength} {select === "type2" ? "°" : ""}
            </span>
          </p>
          <p>{summaOblog}</p>
          {select === "type3" ||
            (select === "type5" && <p className="color-celcii">{dannie}</p>)}
          {select === "type4" && <p className="color-celcii">{areometr}</p>}
          {select === "type6" && <p className="color-celcii">{glucoza}</p>}
          {select === "type1" && (
            <div>
              <p
                className={`greys ${
                  clip === "Скопировано" ? "active-greys" : ""
                }`}
              >
                Для получения{" "}
                <span
                  className={`resulthour ${
                    clip === "Скопировано" ? "active-resulthour" : "resulthour"
                  }`}
                >
                  {strengthAfter}%
                </span>{" "}
                после разбавления, нужно добавить{" "}
                <span
                  className={`resulthour ${
                    clip === "Скопировано" ? "active-resulthour" : "resulthour"
                  }`}
                >
                  {vans}
                </span>{" "}
                литров воды
              </p>
              <p
                className="greys"
                onClick={() =>
                  navigator.clipboard.writeText(
                    `Для получения ${strengthAfter}% после разбавления, нужно добавить ${vans} литров воды`,
                    setClip("Скопировано")
                  )
                }
                style={{
                  color: clip === "Скопировано" ? "#27d827" : "grey",
                }}
              >
                {clip}
                {}
              </p>
            </div>
          )}
        </div>
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
