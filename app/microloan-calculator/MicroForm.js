"use client";
import React, { useEffect, useReducer, useState } from "react";

const initial = {
  click: false,
  amount: null,
};

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };

    case "click":
      return { ...state, click: action.payload };

    case "amount":
      return { ...state, amount: +action.payload.toFixed(2) };
    case "overpayment":
      return { ...state, overpayment: Number(action.payload.toFixed(2)) };
    case "overdueOverpayment":
      return {
        ...state,
        overdueOverpayment: +action.payload.toFixed(2),
      };

    default:
      break;
  }
}

function MicroForm({ children, obj, url }) {
  const [state, dispatch] = useReducer(reducer, initial);

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
    if (state?.total?.data?.amount) {
      dispatch({ type: "amount", payload: state?.total?.data?.amount });
    }
    if (state?.total?.data?.overpayment) {
      dispatch({
        type: "overpayment",
        payload: Number(state?.total?.data?.overpayment),
      });
    }
    if (state?.total?.data?.overdueOverpayment) {
      dispatch({
        type: "overdueOverpayment",
        payload: Number(state?.total?.data?.overdueOverpayment),
      });
    }
  }, [state?.total]);
  useEffect(() => {
    dispatch({ type: "setClick", payload: false });
  }, []);

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
        {state?.click && (
          <div id="res">
            <p className="resultstring">
              <span id="rw">Начислено % </span>
              <span id="resultimt">
                {state.overpayment} <span className="colored">руб.</span>
              </span>
            </p>
            <p className="resultstring">
              <span id="rw">Сумма к возврату </span>
              <span id="resultimt">
                {state.amount} <span className="colored">руб.</span>{" "}
              </span>
            </p>
            {state.overdueOverpayment && (
              <>
                <p className="resultstring">
                  <span id="rw">Просрочка </span>
                  <span id="resultimt">
                    {state.overdueOverpayment}{" "}
                    <span className="colored">руб.</span>
                  </span>
                </p>
                <p className="resultstring">
                  <span id="rw">Всего </span>
                  <span id="resultimt">
                    {state && (
                      <span>{state.amount + state.overdueOverpayment} </span>
                    )}
                    <span className="colored">руб.</span>
                  </span>
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </form>
  );
}

export default MicroForm;
