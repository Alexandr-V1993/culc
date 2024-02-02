"use client";
import "./procent.css";
import { useState } from "react";
import HeaderModal from "../components/HeaderModal";
import Footer from "../components/Footer";
function Procent() {
  const [number, setNumber] = useState(0);
  const [percent, setPercent] = useState(0);
  const [round, setRound] = useState(1);
  const [total, setTotal] = useState("");

  const [block, setBlock] = useState("active");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      number: number,
      percent: percent,
      round: round,
    };

    const response = await fetch(
      "https://calcline.ru/api/calculate/percent-of-number",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    setTotal(responseData);
    console.log(responseData);
  };
  return (
    <>
      <HeaderModal />
      <section class="topform">
        <div class="topformdesc">
          <h1>
            Калькулятор <span>процентов</span>
          </h1>
          <p itemprop="description">
            Рассчитайте онлайн процент от числа, на сколько процентов одно число
            больше или меньше другого, или сколько процентов составляет одно
            число от другого числа, а также прибавьте или вычтете процент к
            числу.
          </p>
        </div>

        <form className="inlinecalculator" onSubmit={handleSubmit}>
          <label className="row-2 select-width">
            <span>Что вычислить</span>
            <div className="select">
              <select
                id="what"
                class="input"
                value={block}
                onChange={(e) => setBlock(e.target.value)}
              >
                <option value="type1" selected>
                  Найти процент от числа
                </option>
                <option value="type2">Сколько процентов число от числа</option>
                <option value="type3">Прибавить процент к числу</option>
                <option value="type4">Вычесть процент из числа</option>
                <option value="type5">
                  На сколько % одно число больше другого
                </option>
                <option value="type6">
                  На сколько % одно число меньше другого
                </option>
              </select>
            </div>
          </label>

          <label className="row-2 select-width-two">
            <span>Окр. до</span>
            <div class="select">
              <select
                name="age"
                class="input"
                id="razmernost"
                value={round}
                onChange={(e) => setRound(e.target.value)}
              >
                <option value="1">1 знака</option>
                <option value="2">2 знаков</option>
              </select>
            </div>
          </label>
          <label
            className={`numrange row-2 hideparts ${block} ${
              block === "type1" ? "active" : ""
            }`}
          >
            <span>Число</span>
            <input
              type="number"
              class="input"
              id="onenum1"
              onChange={(e) => setNumber(e.target.value)}
            />
            <div class="notation">&nbsp;</div>
          </label>
          <label
            className={`numrange row-2 hideparts ${block} ${
              block === "type1" ? "active" : ""
            }`}
          >
            <span>Процент от числа</span>
            <input
              type="number"
              class="input"
              id="onenum2"
              onChange={(e) => setPercent(e.target.value)}
            />
            <div class="notation">%</div>
          </label>

          <label
            className={`numrange row-2 hideparts ${
              block === "type2" ? "active" : ""
            }`}
          >
            <span>Число 1</span>
            <input type="number" class="input" id="twonum1" />
            <div class="notation">&nbsp;</div>
          </label>
          <label
            className={`numrange row-2 hideparts ${
              block === "type2" ? "active" : ""
            }`}
          >
            <span>Число 2</span>
            <input type="number" class="input" id="twonum2/" />
            <div class="notation">&nbsp;</div>
          </label>

          <label
            className={`numrange row-2 hideparts ${
              block === "type3" ? "active" : ""
            }`}
          >
            <span>Число</span>
            <input type="number" class="input" id="threenum1" />
            <div class="notation">&nbsp;</div>
          </label>
          <label
            className={`numrange row-2 hideparts ${
              block === "type3" ? "active" : ""
            }`}
          >
            <span>Прибавить процент</span>
            <input type="number" class="input" id="threenum2" />
            <div class="notation">%</div>
          </label>

          <label
            className={`numrange row-2 hideparts ${
              block === "type4" ? "active" : ""
            }`}
          >
            <span>Число</span>
            <input type="number" class="input" id="fournum1" />
            <div class="notation">&nbsp;</div>
          </label>
          <label
            className={`numrange row-2 hideparts ${
              block === "type4" ? "active" : ""
            }`}
          >
            <span>Вычесть процент</span>
            <input type="number" class="input" id="fournum2" />
            <div class="notation">%</div>
          </label>

          <label
            className={`numrange row-2 hideparts ${
              block === "type5" ? "active" : ""
            }`}
          >
            <span>Большее число</span>
            <input type="number" class="input" id="fivenum1" />
            <div class="notation">&nbsp;</div>
          </label>
          <label
            className={`numrange row-2 hideparts ${
              block === "type5" ? "active" : ""
            }`}
          >
            <span>Меньшее число</span>
            <input type="number" class="input" id="fivenum2" />
            <div class="notation">&nbsp;</div>
          </label>

          <label
            className={`numrange row-2 hideparts ${
              block === "type6" ? "active" : ""
            }`}
          >
            <span>Меньшее число</span>
            <input type="number" class="input" id="sixnum1" />
            <div class="notation">&nbsp;</div>
          </label>
          <label
            className={`numrange row-2 hideparts ${
              block === "type6" ? "active" : ""
            }`}
          >
            <span>Большее число</span>
            <input type="number" class="input" id="sixnum2" />
            <div class="notation">&nbsp;</div>
          </label>

          <label class="row-1">
            <a href="#result" class="btn" id="checkresult">
              Раcсчитать
            </a>
          </label>

          <div id="result">
            <p>
              <span id="arearazmer">{` ${percent ? percent : 0}% от числа ${
                number ? number : 0
              } равняется : `}</span>
            </p>

            <p>
              <span id="arearazmer">
                {`${number > 0 || percent > 0 ? "" : "Процент от числа"}`}
              </span>
            </p>
            <p class="resultstring">
              <span id="resultarea">
                {total?.data?.value ? total.data.value : 0}{" "}
              </span>
              <span id="resultrazmery"></span>
            </p>
          </div>
          <button className="btns" onSubmit={handleSubmit}>
            Расчитать
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Procent;
