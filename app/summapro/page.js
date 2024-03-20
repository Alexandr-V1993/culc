"use client";
import "./summ.css";
import { useState } from "react";
import HeaderModal from "../components/HeaderModal";
import Footer from "../components/Footer";

function Summ() {
  const [total, setTotal] = useState("");
  const [amount, setAmount] = useState("");
  const [clip, setClip] = useState("Скопировать");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      amount: amount,
    };

    const response = await fetch(
      "https://calcline.ru/api/calculate/number-to-words",
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
  };

  return (
    <>
      <HeaderModal />
      <section className="topform">
        <div className="topformdesc">
          <h1>
            Сумма <span>прописью</span>
          </h1>
          <p itemprop="description">
            Переведите сумму в виде цифр в сумму прописью - текстом. Сделайте
            расшифровку правильно для договоров и других документов.
          </p>
        </div>
        <form className="inlinecalculator formsum" onSubmit={handleSubmit}>
          <label className="numrange row-1 input-width">
            <span>Введите сумму числом</span>
            <input
              type="number"
              className="input num"
              id="nage"
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="notation">р.</div>
          </label>

          <label className="numrange row-1"></label>

          <div id="result">
            <p className="sum">Сумма прописью:</p>
            <div>
              {total?.data?.amount.charAt(0).toUpperCase() +
                total?.data?.amount.slice(1)}
            </div>
            <p className="resultdopinfo ">
              <span
                id="copypass"
                className="copybutton"
                onClick={() =>
                  navigator.clipboard.writeText(
                    total.data.amount.charAt(0).toUpperCase() +
                      total?.data?.amount.slice(1),
                    setClip("Скопировано")
                  )
                }
                style={{ color: clip === "Скопировано" ? "#27d827" : "grey" }}
              >
                {total?.data?.amount && clip}
              </span>
            </p>
          </div>
          <div className="div-button">
            <button className="btns" onSubmit={handleSubmit}>
              Расчитать
            </button>
          </div>
        </form>
      </section>
      <section className="articlewrap">
        <article className="articleBody">
          <h2 id="1">Как работает форма перевода чисел в слова?</h2>
          <p className="opredelenie">
            С помощью данной онлайн-формы вы можете перевести сумму, записанную
            цифрами, в сумму прописью по правилам русской орфографии. Вам нужно
            просто ввести число, указав десятые и сотые через запятую или точку.
            Больше ничего делать не нужно. Само число превратиться в рубли, а
            цифры после запятой в копейки.
          </p>
          <p>
            <strong>Главная задача данной формы:</strong> помочь избежать ошибок
            благодаря специальной формуле, которая запрограммирована писать
            правильно, как это принято в отечественном документообороте (в
            зарплатных ведомостях, договорах, кассовых ордерах, применяется для
            банковского чека, в указании суммы НДС и т.п). А денежные суммы
            встречаются почти во всех документах.
          </p>
          <p>
            Использование расшифровки чисел необходимо для того, чтобы
            обезопасить себя от различных проблем, которые могут возникнуть по
            вине невнимательного контрагента (просто ошибся) или
            непосредственной его вины, который осознанно увеличил или уменьшил
            сумму договора путем приписки нескольких цифр к ранее указанной
            сумме. Получается, главная задача прописывания сумм — избежать
            подделки. Пару цифр в печатной версии легко изменить, а вот
            словесное написание исправить практически невозможно.
          </p>
          <h2>Как правильно писать сумму?</h2>
          <p>
            Прописная расшифровка в нашей форме появляется именно в правильном
            варианте. Она применяется для финансовых документов: рубли
            указываются прописью, копейки — цифрами. Например:
          </p>
          <p className="formula">Пятьсот двадцать восемь рублей 30 копеек</p>
          <p>
            Вот несколько особенностей, которые обязательно следует учесть в
            виду устоявшихся нормативов документооборота.
          </p>
          <ul>
            <li>Сумма пишется с заглавной буквы.</li>
            <li>Сумму рублей пишется словами, а копейки – цифрами.</li>
            <li>Если копеек нет, то писать «00» не обязательно.</li>
            <li>
              Написание суммы в рублях и копейках не разделяется знаком
              препинания (запятой, скобками, точкой с запятой). К примеру,
              «Десять рублей 30 копеек».
            </li>
          </ul>
          <p>
            Это основные правила, которые следует знать относительно написания
            суммы прописью.
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default Summ;
