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
      <section class="articlewrap">
        <article itemprop="articleBody">
          <h2 id="1">Что такое НДС или «налог на добавленную стоимость»?</h2>
          <p class="opredelenie">
            <strong>НДС (налог на добавленную стоимость) </strong>— это налог,
            который включен в стоимость товара или услуги, и оплачивается в
            бюджет государства как часть добавленной стоимости, которая
            создаётся в процессе производства.
          </p>

          <p>
            Получается, что именно покупатель оплачивает этот налог компании, а
            компания платит его государству. Такой тип расчета и начисления
            налога называется косвенным.
          </p>
          <p>
            Но важно учесть, что компания платит не весь налог, а именно ту его
            часть, связанную с добавленной стоимостью, которую эта компания
            привнесла в товар. Чтобы это лучше понять, следует обратиться к
            формуле для подсчета НДС.
          </p>

          <h2>Формула расчета НДС</h2>
          <p>В упрощенном виде формула расчета НДС выглядит просто:</p>
          <p class="formula">НДС = налоговая база × налоговая ставка</p>
          <p>
            Например, если компания сама произвела какой-то товар, не покупая ни
            каких-материалов, и хочет получить от его продажи 100 рублей, а
            ставка налога 20%, то НДС будет равен 100 рублей на 20%, то есть 20
            рублей. Добавим этот налог к 100 рублям и получим итоговую цену
            товара: 120 рублей. Именно по этой формуле и работает калькулятор,
            который размещён выше.
          </p>
          <p>
            Налог на добавленную стоимость (НДС) - это косвенный налог, который
            взимается с продавцов товаров и услуг. НДС облагает разницу между
            выручкой от продаж и затратами на покупку или производство товаров,
            работ или услуг. Суть НДС в том, что налог изначально считают от
            всей цены товара, работы или услуги, а потом вычитают из него налог,
            предъявленный поставщиками. Получается, что остается платить только
            налог на ту стоимость, которая добавилась.
          </p>
          <p>
            Кто платит НДС? Плательщиками НДС являются компании и
            предприниматели, которые реализуют товары, работы, услуги и
            имущественные права или получают предоплату за них. При этом,
            плательщиками НДС могут быть как продавцы, так и покупатели.
          </p>
          <p>
            Как рассчитать НДС в России? НДС рассчитывается по формуле: НДС =
            Стоимость товаров * НДС ставка / (100% + НДС ставка). Например, если
            стоимость товаров составляет 1000 рублей, а ставка НДС - 20%, то НДС
            будет равен 166,67 рублей 12. Ставки НДС могут быть разными в
            зависимости от типа товара или услуги
          </p>
          <p>
            Отчетность по НДС Плательщики НДС обязаны вести отчетность по налогу
            на добавленную стоимость. Отчетность включает в себя подачу
            налоговой декларации и сдачу отчетности в налоговую службу. Сроки
            подачи декларации и отчетности могут различаться в зависимости от
            системы налогообложения.
          </p>
          <p>
            Ставки НДС в России В России ставки НДС могут быть разными в
            зависимости от типа товара или услуги. Например, ставка НДС на
            продукты питания, лекарства и книги составляет 10%, а на остальные
            товары и услуги - 20%{" "}
          </p>
        </article>
      </section>
    </>
  );
}

export default Nds;
