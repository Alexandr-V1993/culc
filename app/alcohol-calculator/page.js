"use client";
import "./alcohol.css";
import TopForm from "../components/TopForm";
import HeaderModal from "../components/HeaderModal";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";
import Contents from "../components/Contents";
import Link from "next/link";

function Perccent() {
  const [number, setNumber] = useState("");
  const [numberTwo, setnumberTwo] = useState("");
  const [percent, setPercent] = useState("");
  const [round, setRound] = useState(1);
  const [condition, setCondition] = useState("type1");

  const obj = {
    number: Number(number),
    number2: Number(numberTwo),
    percent: Number(percent),
    round: Number(round),
    condition: condition,
  };

  let url;
  if (obj.condition === "type1") {
    url = "https://calcline.ru/api/calculate/percent-of-number";
  }

  if (obj.condition === "increase") {
    url = "https://calcline.ru/api/calculate/percent-change";
  }
  if (obj.condition === "decrease") {
    url = "https://calcline.ru/api/calculate/percent-change";
  }
  if (obj.condition === "type4") {
    url = "https://calcline.ru/api/calculate/percent-100";
  }
  if (obj.condition === "type5") {
    url = "https://calcline.ru/api/calculate/percent-difference";
    delete obj.percent;
    obj.condition = "increase";
  }
  if (obj.condition === "type6") {
    url = "https://calcline.ru/api/calculate/percent-difference";
    delete obj.percent;
    obj.condition = "decrease";
  }
  if (obj.condition === "type7") {
    url = "https://calcline.ru/api/calculate/percent-of";
    delete obj.percent;
    delete obj.condition;
  }

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор"}
        description={
          "Перед онлайн калькулятор самогонщика, рассчитайте важные для самогоноварения параметры. Этот сервис будет полезен как опытным, так начинающим винокурам. Он экономит время, избавляя от необходимости делать вычисления вручную."
        }
        span={"самогонщика"}
      >
        <Contents>
          <p>
            Создание качественных домашних алкогольных напитков сопряжено с
            множеством расчетов, самостоятельное выполнение которых отнимает
            много времени и чревато ошибками. Чтобы быстро выполнить все
            необходимые расчеты и исключить любые сомнения в их точности,
            воспользуйтесь калькулятором самогонщика.
          </p>
          <ul className="alcohol-list">
            <Link
              href={"/alcohol-calculator/diluting-alcohol"}
              className="underline"
            >
              <li className="alcohol-item">
                <h5>Онлайн калькулятор разбавление самогона водой</h5>
                <p>
                  Вычислите сколько воды необходимо добавить для разбавления
                  продукта,чтобы получить напиток желаемой крепости
                </p>
              </li>
            </Link>
            <li className="alcohol-item"></li>
            <li className="alcohol-item"></li>
            <li className="alcohol-item"></li>
            <li className="alcohol-item"></li>
            <li className="alcohol-item"></li>
            <li className="alcohol-item"></li>
          </ul>
          <p>
            Калькулятор удобен в использовании, работает в режиме онлайн и не
            требует установки на компьютер или любое другое устройство. Наши
            онлайн-инструменты помогут определить пропорции ингредиентов для
            сусла, правильно разбавить самогон, определить крепость продукта
            после смешивания двух спиртосодержащих жидкостей, а также рассчитать
            количество абсолютного спирта, голов и хвостов при второй перегонке.
            Калькулятор самогонщика проводит онлайн расчеты алкоголя за
            считанные секунды, а его использование совершенно бесплатно.
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Perccent;
