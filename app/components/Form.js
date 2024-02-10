import React, { useState } from "react";

import "./Form.css";
function Form({
  children,
  obj,
  url,
  formTitle,
  all,
  summaOblog,
  nextDay,
  ostatokDay,
  year,
  month,
  days,
  hour,
  minut,
  sec,
  dn,
}) {
  const [total, setTotal] = useState("");
  let van;
  let two;
  let three;
  let four;
  let m;
  let y;
  let d;
  let h;
  let i;
  let nextBirthday;
  let q;
  let s;
  let untilNextBirthday;
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
  if (total?.data?.d) {
    d = total?.data?.d;
    h = total?.data?.h;
    i = total?.data?.i;
    m = total?.data?.m;
    nextBirthday = total?.data?.nextBirthday;
    q = total?.data?.q;
    s = total?.data?.s;
    untilNextBirthday = total?.data?.untilNextBirthday;
    y = total?.data?.y;
  }

  return (
    <form className="inlinecalculator " onSubmit={handleSubmit}>
      <div className="centre-top">{children}</div>
      <div id="result">
        <p className="vsize">{formTitle}</p>

        <div className="resultscentre-centre">
          <div className="resultscentre">
            <span className="bg">
              <strong>{y}</strong>

              {total?.data?.y ? year : year}
            </span>
            <span className="bg">
              <strong> {m}</strong>
              {total?.data?.m ? month : month}
            </span>
            <span className="bg">
              <strong> {d}</strong>
              {total?.data?.d ? days : days}
            </span>
            <span className="bg">
              <strong> {h}</strong>
              {total?.data?.h ? hour : hour}
            </span>
            <span className="bg">
              <strong> {i}</strong>
              {total?.data?.i ? minut : minut}
            </span>
            {/* <span className="bg">
              <strong>{s}</strong>
              {total?.data?.s ? sec : sec}
            </span> */}
          </div>
          <p className="pd">
            {total?.data?.nextBirthday ? nextDay : ""}
            <strong> {nextBirthday}</strong>
          </p>
          <p className="pd">
            {total?.data?.untilNextBirthday ? ostatokDay : ""}
            <strong>
              {untilNextBirthday}
              {total?.data?.untilNextBirthday ? dn : ""}
            </strong>
          </p>
        </div>

        <p class="resultstring">
          <span id="resultimt">
            {van}

            {four}
          </span>
        </p>
        <p>
          {summaOblog}{" "}
          <span
            className="blacks "
            style={{
              color:
                two === "MorbidObesity"
                  ? "red"
                  : "" || two === "Overweight"
                  ? "orange"
                  : "" || two === "ObeseClass1"
                  ? "red"
                  : "" || two === "ObeseClass2"
                  ? "red"
                  : "" || two === "SevereThinness"
                  ? "red"
                  : "" || two === "Underweight"
                  ? "orange"
                  : "" || two === "Normal"
                  ? "green"
                  : "",
            }}
          >
            {two === "MorbidObesity"
              ? "Ожирение третьей степени (морбидное)"
              : ""}
            {two === "ObeseClass1" ? "Ожирение первой степени" : ""}
            {two === "ObeseClass2" ? "Ожирение второй степени" : ""}
            {two === "Normal" ? "Нормальная масса тела" : ""}
            {two === "SevereThinness" ? "Выраженный дефицит массы тела" : ""}
            {two === "Overweight" ? "Избыточная масса тела (предожирение)" : ""}
            {two === "Underweight" ? "Недостаточная (дефицит) масса тела" : ""}
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
