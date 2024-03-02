"use client";
import React, { useEffect, useReducer, useState } from "react";

const initial = {
  dateText: null,
  total: null,
  date: null,
  click: false,
  days: null,
  weekDays: null,
};

function reducer(state, action) {
  console.log(state.days);
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "date":
      return { ...state, date: action.payload };
    case "dateText":
      return { ...state, dateText: action.payload };
    case "click":
      return { ...state, click: action.payload };

    case "days":
      return { ...state, days: action.payload };
    case "weekDays":
      return { ...state, weekDays: action.payload };

    default:
      break;
  }
}

function MicroForm({ children, obj, url, mode }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const [tests, settests] = useState();

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

      dispatch({ type: "total", payload: responseData });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //   useEffect(() => {
  //     if (state?.total?.data?.date) {
  //       dispatch({ type: "date", payload: state?.total?.data?.date });
  //     }
  //     if (state?.total?.data?.dateText) {
  //       dispatch({ type: "dateText", payload: state?.total?.data?.dateText });
  //     }
  //     if (state?.total?.data?.days) {
  //       dispatch({ type: "days", payload: state?.total?.data?.days });
  //     }
  //     if (state?.total?.data?.weekDays) {
  //       dispatch({ type: "weekDays", payload: state?.total?.data?.weekDays });
  //     }
  //   }, [state.total]);
  //   useEffect(() => {
  //     dispatch({ type: "setClick", payload: false });
  //   }, [mode]);

  return (
    <form className="inlinecalculators" onSubmit={handleSubmit}>
      <div className="row-res">
        {" "}
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button
            className="btns bst"
            onClick={() => dispatch({ type: "click", payload: true })}
          >
            Расчитать
          </button>
        </div>
        {state.click && (
          <div id="res">
            <p className="resultstring">
              <span id="rw">Начислено процентов </span>
              <span id="resultimt">
                {state.alcohol} <span className="colored">руб.</span>
              </span>
            </p>
            <p className="resultstring">
              <span id="rw">Сумма к возврату </span>
              <span id="resultimt">
                {state.heads} <span className="colored">руб.</span>{" "}
              </span>
            </p>
            <p className="resultstring">
              <span id="rw">Просрочка </span>
              <span id="resultimt">
                {state.tails} <span className="colored">руб.</span>
              </span>
            </p>
            <p className="resultstring">
              <span id="rw">Всего </span>
              <span id="resultimt">
                {state.value} <span className="colored">руб.</span>
              </span>
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

export default MicroForm;
