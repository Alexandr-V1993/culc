"use client";
import TopForm from "../components/TopForm";
import HeaderModal from "../components/HeaderModal";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";
import Contents from "../components/Contents";
import "./age.css";

let currentDate = new Date();
let formattedDate = currentDate.toISOString().split("T")[0];

function Agecalc() {
  const [date, setDate] = useState("2024-02-18");
  const [vDate, setVdate] = useState(formattedDate);
  const obj = {
    startDate: date,
    endDate: vDate,
  };

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор"}
        description={
          "Просто введите дату рождения и определите, сколько человеку лет."
        }
        span={"возраста"}
      >
        <Form
          obj={obj}
          url={"https://calcline.ru/api/calculate/age"}
          formTitle={"Возраст :"}
          nextDay={"Следующий день рождения :"}
          ostatokDay={"Осталось до дня рождения : "}
          year={" год"}
          month={" месяцев"}
          days={" дней"}
          hour={" часов"}
          minut={" минут"}
          sec={" секунд"}
          dn={" дн."}
        >
          <label className="numrange row-1 van">
            <span>Дата рождения</span>
            <input
              type="date"
              className="input"
              id="nheight"
              min="0"
              max="250"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <label className="numrange row-1 two">
            <span>Возраст на дату</span>
            <input
              type="date"
              className="input"
              id="nweight"
              min="0"
              max="250"
              value={vDate}
              onChange={(e) => setVdate(e.target.value)}
            />
          </label>
        </Form>
        <Contents>
          <h2 className="tops-content">Что такое калькулятор возраста?</h2>
          <p>
            Онлайн калькулятор возраста — это удобный инструмент, который
            позволяет определить ваш точный возраст. Просто введите дату своего
            рождения (день, месяц и год) и нажмите кнопку “Рассчитать”.
            Калькулятор точно вычислит количество прожитых вами лет, месяцев,
            недель, дней, часов, минут и секунд. Конечная дата автоматически
            установится на сегодняшний день, но вы также можете изменить ее на
            любую другую дату.
          </p>
          <p>
            Если вам интересно узнать свой возраст на определенную дату,
            используйте функцию “Возраст на дату”. Просто введите свою дату
            рождения в первое поле и желаемую дату во второе поле. Нажмите
            кнопку “Рассчитать”, и вы мгновенно узнаете свой возраст на
            указанную дату.
          </p>
          <p>
            Например, если вас интересует возраст на момент открытия летних
            Олимпийских игр 2012 года, введите свою дату рождения и дату
            церемонии открытия. Результат покажет ваш возраст на тот момент.
          </p>
          <p>
            Кроме того, вы можете использовать это поле для прогнозирования
            своего возраста на будущие даты. Просто введите год рождения и
            желаемую дату, чтобы рассчитать свой возраст на указанный момент
            времени. 🌟
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Agecalc;
