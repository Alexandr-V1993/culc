"use client";

import { useEffect, useReducer, useState } from "react";

import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import MicroForm from "./MicroForm";
import Input from "../components/Input";
import "./microloan.css";
const initial = {
  days: 0,
  includeDate: false,
  mode: "increase",
  months: 0,
  operator: "-",
  startDate: "2024-03-01",
  weeks: 0,
  years: 0,
  endDate: "2024-03-02",
};

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "mode":
      return { ...state, mode: action.payload };

    default:
      break;
  }
}

function Microloun() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор "}
        description={
          "Микрозайм - это небольшие кредиты, предназначенные для предоставления частным лицам, предпринимателям и малым предприятиям доступа к скромным суммам капитала."
        }
        span={"Микрозаймов"}
      >
        <MicroForm
          obj={obj}
          mode={state.mode}
          url={"https://calcline.ru/api/calculate/microloan"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <Input labelTitle={"Сумма"} notation={"руб."} />
            </div>
          </div>
        </MicroForm>
        <Contents>
          <h2 className="tops-content">Микрозаймы</h2>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Microloun;
