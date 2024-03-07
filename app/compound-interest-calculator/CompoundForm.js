"use client";
import React, { useEffect, useReducer, useState } from "react";

const objj = {
  total: null,
  click: false,
  finalInvestment: 0,
  interestIncome: 0,
  replenishment: 0,
};

function reducer(state, action) {
  console.log(state.replenishment);
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "click":
      return { ...state, click: action.payload };
    case "finalInvestment":
      return { ...state, finalInvestment: action.payload };
    case "interestIncome":
      return { ...state, interestIncome: action.payload };
    case "replenishment":
      return { ...state, replenishment: action.payload };

    default:
      return state;
  }
}

function CompoundForm({ children, obj, url }) {
  const [state, dispatch] = useReducer(reducer, objj);

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

  useEffect(() => {
    if (state?.total?.data) {
      dispatch({ type: "total", payload: state.total.data });
    }

    if (state?.total?.data?.finalInvestment) {
      dispatch({
        type: "finalInvestment",
        payload: state.total.data.finalInvestment,
      });
    }
    if (state?.total?.data?.interestIncome) {
      dispatch({
        type: "interestIncome",
        payload: state.total.data.interestIncome,
      });
    }
    if (
      state?.total?.data?.replenishment ||
      state?.total?.data?.replenishment === 0
    ) {
      dispatch({
        type: "replenishment",
        payload: state.total.data.replenishment,
      });
    }
  }, [state.total]);

  function click() {
    dispatch({ type: "click", payload: true });
  }

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <form className="inlinecalculators" onSubmit={handleSubmit}>
      <div className="row-res">
        {" "}
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button className="btns bst" onClick={click}>
            Расчитать
          </button>
        </div>
        {state?.click && (
          <div id="res">
            <div className="test-res">
              <p className="resultstring">
                <span id="rw">Итоговая сумма</span>
                <span id="resultimt">
                  {new Intl.NumberFormat("ru-RU", {
                    style: "currency",
                    currency: "RUB",
                  }).format(state.finalInvestment)}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Доход</span>
                <span id="resultimt">
                  {new Intl.NumberFormat("ru-RU", {
                    style: "currency",
                    currency: "RUB",
                  }).format(state.interestIncome)}
                </span>
              </p>
              <p className="resultstring">
                <span id="rw">Сумма всех пополнений</span>
                <span id="resultimt">
                  {new Intl.NumberFormat("ru-RU", {
                    style: "currency",
                    currency: "RUB",
                  }).format(state.replenishment)}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default CompoundForm;
