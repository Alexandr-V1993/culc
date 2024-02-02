"use client";

import { useState } from "react";
import SimpleModal from "../components/SimpleModal/SimpleModal";

function Nds() {
  const [rate, setRate] = useState("");
  const [mode, setMode] = useState("allocate");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
  const [open, setOpen] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      rate: rate,
      mode: mode,
      amount: amount,
    };

    const response = await fetch("https://calcline.ru/api/calculate/vat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    setTotal(responseData);
    console.log(responseData);
  };

  return (
    <>
      <header>
        <a href="/">
          <img src="/logo.svg" alt="логотип" />
        </a>
        <div class="topright">
          <div class="toprightmenu" onClick={() => setOpen(true)}>
            <img src="/menu.svg" alt="меню" />
          </div>
        </div>
      </header>
      <SimpleModal open={open} setOpen={setOpen}>
        <div class="topright">
          <div class="topmenu active">
            <div class="topmenuwrap">
              <div class="topmenulink">
                <a class="linkheader linknotanchor" href="/?filter=finance#2">
                  <span class="material-symbols-rounded">
                    <img src="/finanse2.svg" alt="финансы" />
                  </span>{" "}
                  Финансы
                </a>
                <a href="/nds/" class="sublnk">
                  Калькулятор НДС
                </a>

                <a href="/numberminuspercent/" class="sublnk">
                  Вычесть процент из числа
                </a>
              </div>
              <span className="close" onClick={() => setOpen(false)}>
                <img src="/close.svg" alt="закрыть" />
              </span>
            </div>
          </div>
        </div>
      </SimpleModal>
      <section class="topform " onSubmit={handleSubmit}>
        <div class="topformdesc">
          <h1>
            Калькулятор <span>НДС</span>
          </h1>
          <p itemprop="description">
            Выделите сумму НДС из цены или рассчитайте, какой налог нужно
            прибавить.
          </p>
        </div>
        <form class="inlinecalculator">
          <label className="row-2">
            <span>Что сделать</span>
            <div className="select">
              <select
                name="age"
                id="actionnds"
                className="input"
                value={mode}
                onChange={(e) => setMode(e.target.value)}
              >
                <option value="allocate">Выделить НДС</option>
                <option value="accrual">Начислить НДС</option>
              </select>
            </div>
          </label>
          <label className="numrange plusvarrange row-2">
            <span>Ставка налога</span>
            <input
              type="number"
              className="input"
              id="ntax"
              min="0"
              max="30"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <div className="notation">%</div>
          </label>

          <label className="numrange row-1">
            <span>Цена</span>
            <input
              type="number"
              className="input"
              id="nprice"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="notation">р.</div>
          </label>
          <label className="row-1">
            <button className="btn" id="checkresult">
              Рассчитать
            </button>
          </label>
          <div id="result">
            <p>Расчёт НДС: </p>
            <div className="resultmoreinfo">
              <div className="centre">
                <span className="resspans items1">Без налога:</span>{" "}
                <strong id="resultnet">
                  {total ? total.data?.beforeAmount : 0}
                </strong>{" "}
                <br />
                <span className="topstest items1">Налог:</span>{" "}
                <strong id="resulttax">{total ? total.data?.vat : 0}</strong>{" "}
                <br />
                <b className="itogotax">
                  <span className="bolted">Итого:</span>{" "}
                  <strong id="resultgross">
                    {" "}
                    {total ? total.data?.afterAmount : 0}
                  </strong>
                </b>
              </div>
            </div>
            <p className="resultdopinfo">
              <span>Сумма прописью : </span>
              {total?.data?.inWords}
            </p>
          </div>
          <button className="btns" onSubmit={handleSubmit}>
            Расчитать
          </button>
        </form>
      </section>
    </>
  );
}

export default Nds;
