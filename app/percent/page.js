"use client";
import TopForm from "../components/TopForm";
import HeaderModal from "../components/HeaderModal";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";
import Contents from "../components/Contents";
import CalculateVan from "../calculaters/CalculateVan";
import CalculateTwo from "../calculaters/CalculateTwo";
import CalculateThree from "../calculaters/CalculateThree";
import CalculateFour from "../calculaters/CalculateFour";
import CalculateFive from "../calculaters/CalculateFive";
import CalculateSix from "../calculaters/CalculateSix";
import CalculateSeven from "../calculaters/CalculateSeven";
import "./procent.css";

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
          "Рассчитайте онлайн процент от числа, на сколько процентов одно число больше или меньше другого, или сколько процентов составляет одно число от другого числа, а также прибавьте или вычтете процент к числу."
        }
        span={"процентов"}
      >
        <Form
          obj={obj}
          url={url}
          formTitle={"Результат :"}
          condition={condition}
        >
          <label class="row-2 van">
            <span>Что вычислить</span>
            <div class="select">
              <select
                id="what"
                class="input"
                onChange={(e) => setCondition(e.target.value)}
              >
                <option value="type1" selected="">
                  Процент от числа
                </option>
                <option value="increase">Прибавить процент к числу</option>
                <option value="decrease">Вычесть процент из числа</option>
                <option value="type4">Найти 100 процентов</option>
                <option value="type5">
                  На сколько % одно число больше другого
                </option>
                <option value="type6">
                  На сколько % одно число меньше другого
                </option>
                <option value="type7">
                  Сколько процентов составляет число от числа
                </option>
              </select>
            </div>
          </label>
          <label class="row-2 two">
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
                <option value="3">3 знаков</option>
              </select>
            </div>
          </label>
          {condition === "type1" ? (
            <CalculateVan setPercent={setPercent} setNumber={setNumber} />
          ) : (
            ""
          )}
          {condition === "increase" ? (
            <CalculateTwo setPercent={setPercent} setNumber={setNumber} />
          ) : (
            ""
          )}
          {condition === "decrease" ? (
            <CalculateThree setPercent={setPercent} setNumber={setNumber} />
          ) : (
            ""
          )}
          {condition === "type4" ? (
            <CalculateFour setPercent={setPercent} setNumber={setNumber} />
          ) : (
            ""
          )}
          {condition === "type5" ? (
            <CalculateFive setnumberTwo={setnumberTwo} setNumber={setNumber} />
          ) : (
            ""
          )}
          {condition === "type6" ? (
            <CalculateSix setnumberTwo={setnumberTwo} setNumber={setNumber} />
          ) : (
            ""
          )}
          {condition === "type7" ? (
            <CalculateSeven setnumberTwo={setnumberTwo} setNumber={setNumber} />
          ) : (
            ""
          )}
        </Form>
        <Contents>
          <h2>Что считает калькулятор процентов?</h2>
          <p>
            Калькулятор предназначен для расчета процента от числа, на сколько
            процентов одно число больше или меньше другого, или сколько
            процентов составляет одно число от другого числа, а также
            калькулятор позволяет вычитать или прибавлять процент к числу или
            вычислять 100 процентов. Это полезный инструмент в различных сферах,
            таких как финансы, бизнес и личные финансы. Калькуляторы процентов
            могут использоваться для расчета процентов по кредитам, депозитам,
            инвестициям, а также для налоговых расчетов и других задач. Они
            могут помочь быстро и точно выполнить расчеты, которые могут быть
            сложными при выполнении вручную, что позволяет сэкономить время и
            уменьшить вероятность ошибок.
          </p>
          <p>
            Применение калькулятора процентов может быть обнаружено в различных
            областях, включая финансы, бизнес, образование, медицину и даже
            повседневные ситуации. Например, в финансах он полезен для расчета
            процентов по кредитам, инвестициям, налогам. В бизнесе - для
            налоговых вычетов, расчета маржинальности. В образовании - для
            расчета оценок, скидок на учебники. В медицине - для расчета
            смертности, выживаемости и других статистических данных.
          </p>
          <h2>Где можно применить калькулятор процентов?</h2>
          <ol>
            <li>
              💰 Финансы. Расчет процентов по кредитам, ипотеке, вкладам,
              облигациям, инвестициям, налогам и т.д.
            </li>
            <li>
              {" "}
              📊 Бизнес. Расчет налоговых вычетов, налоговой базы, налоговых
              скидок, общей суммы платежа за товары и услуги, расчет
              маржинальности и т.д.
            </li>
            <li>
              {" "}
              📚 Образование. Расчет оценок, процентов скидок на учебники,
              процентов успешных сдач экзаменов и т.д.{" "}
            </li>
            <li>
              {" "}
              🤑 Персональные финансы. Расчет бюджета, расходов на различные
              категории, процентов от заработной платы, калькуляторы кредитных
              карт и т.д.
            </li>
            <li>
              🩺 Медицина. Расчет процентов смертности, выживаемости, процентов
              телесной жировой массы и т.д. Калькулятор процентов также может
              быть полезен для обучения математике, включая процентные расчеты,
              а также для использования в повседневной жизни для быстрых
              расчетов.
            </li>
            <p>
              Важно помнить, что даже при использовании калькулятора полезно
              овладеть базовыми математическими навыками и периодически
              проверять результаты расчетов на ошибки. Такой инструмент
              значительно облегчает жизнь, предоставляя возможность проводить
              точные и быстрые расчеты в различных сферах.
            </p>
          </ol>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Perccent;
