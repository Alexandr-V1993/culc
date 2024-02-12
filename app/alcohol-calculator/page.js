"use client";
import "./alcohol.css";
import TopForm from "../components/TopForm";
import HeaderModal from "../components/HeaderModal";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";
import Contents from "../components/Contents";
import Link from "next/link";
import "./alcohol.css";
import RazbavlenieSpirta from "../alcoholCalc/RazbavlenieSpirta";

function AlcoCalc() {
  const [volume, setVolume] = useState("");
  const [strengthAfter, setStrengthAfter] = useState("");
  const [strengthBefore, setStrengthBefore] = useState("");
  const [select, setSelect] = useState("type1");
  const obj = {
    strengthAfter: Number(strengthAfter),
    strengthBefore: Number(strengthBefore),
    volume: Number(volume),
  };

  let url;
  if (select === "type1") {
    url = "https://calcline.ru/api/calculate/alcohol-water-dilution";
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
        <Form
          obj={obj}
          url={url}
          formTitle={select === "type1" ? "Необходимо долить воды:" : ""}
        >
          <label class="row-2 four">
            <span>Что вычислить</span>
            <div class="select">
              <select
                id="what"
                class="input"
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="type1">Разбавления спирта водой</option>
                <option value="decrease">Расчет сахарной браги</option>
                <option value="type4">Смешивание самогона</option>
                <option value="type5">Коррекция показаний ареометра</option>
                <option value="type6">Абсолютный спирт и отбор голов</option>
                <option value="type7">Замена сахара глюкозой</option>
              </select>
            </div>
          </label>

          {select === "type1" ? (
            <RazbavlenieSpirta
              setVolume={setVolume}
              setStrengthAfter={setStrengthAfter}
              setStrengthBefore={setStrengthBefore}
            />
          ) : (
            ""
          )}
        </Form>
        <Contents>
          <p>
            Создание качественных домашних алкогольных напитков сопряжено с
            множеством расчетов, самостоятельное выполнение которых отнимает
            много времени и чревато ошибками. Чтобы быстро выполнить все
            необходимые расчеты и исключить любые сомнения в их точности,
            воспользуйтесь калькулятором самогонщика.
          </p>
          <ul className="alcohol-list">
            <Link href={"/diluting-alcohol"} className="underline">
              <li className="alcohol-item">
                <h5>Онлайн калькулятор разбавление самогона водой</h5>
                <p>
                  Вычислите сколько воды необходимо добавить для разбавления
                  продукта,чтобы получить напиток желаемой крепости.
                </p>
              </li>
            </Link>
            <Link href={"/sugar-braga"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор расчет сахарной браги</h5>
                <p>
                  Чтобы получить нужный обьем раствора и нужную крепость,найдите
                  идеальное соотношение между сахаром и водой.
                </p>
              </li>
            </Link>
            <Link href={"/areometer-correction"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор коррекции показаний ареометра</h5>
                <p>
                  Расчитайте реальную крепость самогона при температуре больше
                  или меньше 20°С.
                </p>
              </li>
            </Link>
            <Link href={"/head-selection"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор абсолютного спирта и отбора голов</h5>
                <p>
                  Расчитайте,сколько абсолютного спирта содержится в полученном
                  спирте-сырце и обьем голов,которые необходимо отобрать.
                </p>
              </li>
            </Link>
            <Link href={"/replacement-sugar"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор замены сахара глюкозой</h5>
                <p>
                  Расчитайте,сколько вам потребуется глюкозы для замены
                  сахара,чтобы приготовить продукт без потери крепости
                </p>
              </li>
            </Link>
            <Link href={"/moonshiner-calculator"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор смешивания спиртов</h5>
                <p>
                  Поможет определить крепость алкогольных напитков при
                  смешивании жидкостей разной крепости и обьема.
                </p>
              </li>
            </Link>

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

export default AlcoCalc;
