"use client";
import TopForm from "../components/TopForm";
import HeaderModal from "../components/HeaderModal";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";
import Contents from "../components/Contents";

function Imt() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const obj = {
    height: height,
    weight: weight,
  };

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор"}
        description={
          "Узнайте по индексу массы тела, является ли ваш вес нормальным, недостаточным или избыточным. Подходит для любого пола и возраста: для мужчин, женщин, подростков и детей."
        }
        span={"ИМТ"}
      >
        <Form
          obj={obj}
          url={"https://calcline.ru/api/calculate/bmi"}
          formTitle={"Ваш ИМТ:"}
          all={`кг/м2`}
        >
          <label class="numrange row-1">
            <span>Рост</span>
            <input
              type="number"
              class="input"
              id="nheight"
              min="0"
              max="250"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <div class="notation">см</div>
          </label>

          <label class="numrange row-1">
            <span>Вес</span>
            <input
              type="number"
              class="input"
              id="nweight"
              min="0"
              max="250"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <div class="notation">кг</div>
          </label>
        </Form>
        <Contents>
          {" "}
          <h2>Что такое ИМТ или индекс массы тела?</h2>
          <p>
            Индекс массы тела (ИМТ), также известный как индекс телесной массы
            (BMI) на английском, вычисляется как отношение массы тела в
            килограммах к квадрату роста в метрах, используя формулу масса (кг)
            / рост (м)²:
          </p>
          <p>Формула расчета ИМТ (индекса массы тела).</p>
          <p>
            Для примера, результаты онлайн-калькулятора ИМТ могут быть
            следующими:
          </p>
          <p>
            <span className="page-bolt">
              {" "}
              Если вы мужчина, ваш рост составляет 185 см (или 1,85 м), а вес —
              85 кг, то ИМТ будет равен: 85 / 1,85² = 24,8. Если вы женщина с
              ростом 165 см и массой 55 кг, то ИМТ = 55 / 1,65² = 20,2.
            </span>
          </p>
          <p>
            Расчет ИМТ для ребенка с весом 25 кг и ростом 125 см будет
            следующим: 25 / 1,25² = 16.
          </p>
          <p>
            Часто возможна ошибка в измерении роста в сантиметрах, вместо метров
            (что более привычно), что приводит к неправильным значениям.
          </p>
          <p>
            Каков смысл полученного индекса? Индекс массы тела является
            показателем, позволяющим оценить соответствие массы тела и роста
            человека, что, в свою очередь, косвенно указывает на уровень массы:
          </p>
          <p>
            <span className="page-bolt">
              {" "}
              Недостаточной — ИМТ менее 18,5. Нормальной — ИМТ от 18,5 до 25.
              Избыточной — ИМТ более 25. ИМТ в упрощенной форме отражает
              состояние здоровья человека.
            </span>
          </p>
          <p>
            Недостаточная масса тела может повлечь за собой риск различных
            заболеваний, таких как диабет, артрит, заболевания печени, рак,
            высокое артериальное давление и другие. В случае избыточной массы
            тела увеличивается риск заболеваний, связанных с лишним весом.
          </p>
          <p>
            ИМТ для взрослых (20 лет и старше) интерпретируется следующим
            образом:
          </p>
          <p>
            <span className="page-bolt">
              До 18,5 — пониженный вес. 18,5-25 — нормальная масса тела. 25-30 —
              избыточный вес (предожирение). Более 30 — ожирение или выраженный
              избыточный вес, разделенный на I, II и III степени ожирения.
            </span>
          </p>
          <p>
            ИМТ для детей и подростков может иметь свои корректировки в
            зависимости от возраста.
          </p>
          <p>
            Важно отметить, что ИМТ не учитывает различные факторы, такие как
            мышечная масса, особенности строения тела, пол, возраст и др. Оценку
            здоровья лучше проводить в комплексе с другими данными, так как ИМТ
            не является идеальным тестом и может быть неинформативным в
            определенных ситуациях.
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Imt;
