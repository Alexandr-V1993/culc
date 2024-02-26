"use client";
import React, { useState, useEffect } from "react";
import "./FuelCostForm.css";

function FuelCostForm({ children, obj, url, rashod, CenaTopliva }) {
  const [total, setTotal] = useState("");
  const [cost, setCost] = useState("");
  const [consumption, setConsumption] = useState("");

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

  useEffect(() => {
    if (total?.data?.cost || total?.data?.consumption) {
      setCost(total?.data?.cost.toFixed(2));
      setConsumption(Math.round(total?.data?.consumption.toFixed(0)));
    }
  }, [total]);

  return (
    <form className="inlinecalculator" onSubmit={handleSubmit}>
      <div className="row-res">
        {" "}
        <div className="centre-top testcentre">{children}</div>
        <div id="res">
          <p className="vsize">{}</p>

          <p className="resultstring">
            <span id="resultimt">
              {rashod}
              {`${consumption}`}
            </span>

            <span id="resultimt">
              {CenaTopliva}
              {`${cost}`}
            </span>

            <span></span>
          </p>
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

export default FuelCostForm;
