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
import RaschetSaharBraga from "../alcoholCalc/RaschetSaharBraga";
import SmehivanieSpitrov from "../alcoholCalc/SmehivanieSpitrov";
import CorrekciaAreometr from "../alcoholCalc/CorrekciaAreometr";
import OtborGolov from "../alcoholCalc/OtborGolov";
import Glucoza from "../alcoholCalc/Glucoza";
function AlcoCalc() {
  const [volume, setVolume] = useState("");
  const [strengthAfter, setStrengthAfter] = useState("");
  const [strengthBefore, setStrengthBefore] = useState("");
  const [select, setSelect] = useState("type1");
  const [weight, setWeight] = useState("");
  const [volume1, setvolume1] = useState("");
  const [volume2, setVolume2] = useState("");
  const [strength1, setStrength1] = useState("");
  const [strength2, settrength2] = useState("");
  const [temperature, setTemperature] = useState("");
  const [strength, setStrength] = useState("");
  const [heads, setHeads] = useState("");
  const obj = {
    strengthAfter: Number(strengthAfter),
    strengthBefore: Number(strengthBefore),
    volume: Number(volume),
    weight: Number(weight),
    volume1: Number(volume1),
    volume2: Number(volume2),
    strength1: Number(strength1),
    strength2: Number(strength2),
    temperature: Number(temperature),
    strength: Number(strength),
    heads: Number(heads),
  };

  let url;
  if (select === "type1") {
    url = "https://calcline.ru/api/calculate/alcohol-water-dilution";
  }
  if (select === "type2") {
    url = "https://calcline.ru/api/calculate/alcohol-sugar-braga";
    delete obj.strengthAfter;
    delete obj.strengthBefore;
  }
  if (select === "type3") {
    url = "https://calcline.ru/api/calculate/alcohol-mixing";
    delete obj.strengthAfter;
    delete obj.strengthBefore;
    delete obj.volume;
    delete obj.weight;
  }
  if (select === "type4") {
    url = "https://calcline.ru/api/calculate/areometer-correction";
    delete obj.strengthAfter;
    delete obj.strengthBefore;
    delete obj.volume;
    delete obj.weight;
    delete obj.volume1;
    delete obj.volume2;
    delete obj.strength1;
    delete obj.strength2;
  }
  if (select === "type5") {
    url = "https://calcline.ru/api/calculate/absolute-alcohol-head-selection";
    (obj.volume = Number(volume) * 1000), delete obj.strengthAfter;
    delete obj.strengthBefore;
    delete obj.weight;
    delete obj.volume1;
    delete obj.volume2;
    delete obj.strength1;
    delete obj.strength2;
    delete obj.temperature;
  }
  if (select === "type6") {
    url = "https://calcline.ru/api/calculate/glucose-sugar-replacement";
    obj.weight = weight;
    delete (obj.volume = Number(volume) * 1000), delete obj.strengthAfter;
    delete obj.strengthBefore;
    delete obj.volume1;
    delete obj.volume2;
    delete obj.strength1;
    delete obj.strength2;
    delete obj.temperature;
    delete obj.value;
    delete obj.strength;
    delete obj.heads;
    delete obj.volume;
  }
  let formTitle;
  let alcoTitle;
  let crepost;
  switch (select) {
    case "type1":
      formTitle = "Необходимо долить литров воды:";
      break;
    case "type2":
      alcoTitle = "Долить литров воды:";
      crepost = "Крепость браги: ";
      break;
    case "type3":
      alcoTitle = "Крепость жидкости:";
      crepost = "";
      formTitle = "";
      break;
    case "type4":
      alcoTitle = "Реальная крепость";
      crepost = "";
      formTitle = "";
      break;
    case "type5":
      alcoTitle = "Объем чистого спирта:";
      crepost = "Объем «голов»:";
      formTitle = "";
      break;
    case "type6":
      alcoTitle = "Потребуется глюкозы (фруктозы)кг. :";
      crepost = "";
      formTitle = "";
      break;

    default:
      break;
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
          formTitle={formTitle}
          alcoTitle={alcoTitle}
          crepost={crepost}
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
                <option value="type2">Расчет сахарной браги</option>
                <option value="type3">Смешивание самогона</option>
                <option value="type4">Коррекция показаний ареометра</option>
                <option value="type5">Абсолютный спирт и отбор голов</option>
                <option value="type6">Замена сахара глюкозой</option>
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
          {select === "type2" ? (
            <RaschetSaharBraga setVolume={setVolume} setWeight={setWeight} />
          ) : (
            ""
          )}
          {select === "type3" ? (
            <SmehivanieSpitrov
              setvolume1={setvolume1}
              setVolume2={setVolume2}
              setStrength1={setStrength1}
              settrength2={settrength2}
            />
          ) : (
            ""
          )}
          {select === "type4" ? (
            <CorrekciaAreometr
              setTemperature={setTemperature}
              setStrength={setStrength}
              temperature={temperature}
              strength={strength}
            />
          ) : (
            ""
          )}
          {select === "type5" ? (
            <OtborGolov
              setVolume={setVolume}
              setStrength={setStrength}
              setHeads={setHeads}
            />
          ) : (
            ""
          )}
          {select === "type6" ? <Glucoza setWeight={setWeight} /> : ""}
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
