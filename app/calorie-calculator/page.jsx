"use client";

import { useEffect, useReducer, useState } from "react";

import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import Input from "../components/Input";

import CalorieForm from "./CalorieForm";
import "./calorie.css";

const initial = {
  formula: "mifflinStJeor",
  age: null,
  height: null,
  weight: null,
  gender: "male",
  activity: "sedentary",
  goal: "loss",
};

function reducer(state, action) {
  switch (action.type) {
    case "formula":
      return { ...state, formula: String(action.payload) };
    case "age":
      return { ...state, age: Number(action.payload) };
    case "height":
      return { ...state, height: Number(action.payload) };
    case "weight":
      return { ...state, weight: Number(action.payload) };
    case "gender":
      return { ...state, gender: action.payload };
    case "activity":
      return { ...state, activity: action.payload };
    case "goal":
      return { ...state, goal: String(action.payload) };
  }
}
function Compound() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };
  function hadleInput(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор "}
        description={
          "Точный калькулятор калорий позволяет выбрать различные формулы расчета, включая формулы Миффлина-Сан Жеора и Харриса-Бенедикта в простом и упрощенном виде, а также определить норму калорий, необходимую именно вам для достижения ваших целей с учетом дневной активности."
        }
        span={" калорий"}
      >
        <CalorieForm
          obj={obj}
          url={"https://calcline.ru/api/calculate/calorie"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <label className="label-top">
                <span>Формула оценки BMR</span>

                <select
                  onChange={(e) =>
                    dispatch({
                      type: "formula",
                      payload: String(e.target.value),
                    })
                  }
                >
                  <option value="mifflinStJeor">Миффлина-Сан Жеора</option>
                  <option value="harrisBenedict">Харриса-Бенедикта</option>
                  <option value="sMifflinStJeor">
                    Упрощенный Миффлина-Сан Жеора
                  </option>
                  <option value="oHarrisBenedict">
                    Харриса-Бенедикта (Оригинальная)
                  </option>
                </select>
              </label>

              <div className="topInput-select">
                <Input
                  labelTitle={"Возраст"}
                  notation={"лет"}
                  typeDispatch={"age"}
                  hadleInput={hadleInput}
                  type={"number"}
                />
                <Input
                  labelTitle={"Рост"}
                  notation={"см"}
                  typeDispatch={"height"}
                  hadleInput={hadleInput}
                  type={"number"}
                />
              </div>
              <div className="topInput-selects">
                <Input
                  labelTitle={"Вес"}
                  notation={"кг"}
                  typeDispatch={"weight"}
                  hadleInput={hadleInput}
                  type={"number"}
                />
                <label className="label-tops">
                  <span>Пол</span>
                  <select
                    onChange={(e) =>
                      dispatch({
                        type: "gender",
                        payload: String(e.target.value),
                      })
                    }
                  >
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                  </select>
                </label>
              </div>
              <div className="input-bottom">
                <label>
                  <span>Дневная активность</span>
                  <select
                    onChange={(e) =>
                      dispatch({
                        type: "activity",
                        payload: String(e.target.value),
                      })
                    }
                  >
                    <option value="sedentary">Минимальная активность</option>
                    <option value="lightly">Слабый уровень активности</option>
                    <option value="moderately">
                      Умеренный уровень активности
                    </option>
                    <option value="active">Активный уровень активности</option>
                    <option value="veryActive">
                      Тяжелая или трудоемкая активность
                    </option>
                    <option value="extraActive">
                      Экстремальная активность
                    </option>
                    <option value="basal">
                      Уровень базального метаболизма
                    </option>
                  </select>
                </label>
                <label>
                  <span>Цель</span>
                  <select
                    onChange={(e) =>
                      dispatch({
                        type: "goal",
                        payload: String(e.target.value),
                      })
                    }
                  >
                    <option value="loss">Сбросить вес</option>
                    <option value="maintenance">Поддержать вес</option>

                    <option value="gain">Набрать вес</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h2>
            Влияние <span>калорий</span>
          </h2>
          <p>
            Основными источниками калорий в рационе обычного человека являются
            белки и жиры и углеводы. Исследования показывают значительные
            различия между калориями, указанными на этикетках продуктов, и
            фактически усвоенными организмом. Например, способ,пережевывание
            пищи может влиять на потерю веса, при этом продукты, которые требуют
            больше времени на пережевывание, часто сжигают больше калорий в
            процессе переваривания, что в свою очередь способствует ощущению
            сытости на более длительное время.
          </p>
          <p>
            Важно разнообразить рацион, включая много натуральных и
            низкокалорийных продуктов, и требуется следить за умеренным
            потреблением алкоголя и других высококалорийных, но низконутритивных
            продуктов.
          </p>
          <p>
            Если вы ищете удобный способ контролировать калории и чтобы достичь
            желаемого веса? С помощью нашего бесплатного калькулятора калорий
            для похудения, вы сможете определить дефицит калорий, который
            необходим для достижения желаемых вами результатов.Наш калькулятор
            так же поможет подобрать норму калорий для удержания и набора массы,
            учитывая дневной рацион белков, жиров и углеводов. Калькулятор
            предоставляет специальные опции для женщин, учитывая их особенности
            и потребности в процессе похудения.
          </p>
          <p>
            Точный калькулятор калорий позволяет выбрать различные формулы
            расчета, включая формулы Миффлина-Сан Жеора и Харриса-Бенедикта в
            простом и упрощенном виде, а также определить норму калорий,
            необходимую именно вам для достижения ваших целей с учетом вашей
            дневной активности.
          </p>
          <p>
            Калькулятор обладает точностью и надежностью, что позволяет вам
            посчитать калории заполнив базовую информацию как рост, вес, возраст
            и пол - вам необходимо лишь ввести свои данные.
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Compound;
