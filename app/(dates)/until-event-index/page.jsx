"use client";
import React, { useState, useEffect } from "react";
import "./until-index.css";
import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const Timer = () => {
  const [targetDate, setTargetDate] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const initialTargetDate = new Date("2024-03-29");
    setTargetDate(initialTargetDate);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (targetDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowString = tomorrow.toISOString().split("T")[0];
      document.getElementById("dateInput").value = targetDate
        .toISOString()
        .split("T")[0];
    }
  }, [targetDate]);

  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      setTargetDate(date);
    }
  }, [selectedDate]);

  const calculateTimeLeft = () => {
    if (!targetDate) return {};

    const difference = new Date(targetDate) - new Date(currentTime);
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(((difference / (1000 * 60 * 60)) % 24) - 3),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    // Добавляем ведущий ноль, если число меньше 10
    Object.keys(timeLeft).forEach((key) => {
      timeLeft[key] = timeLeft[key] < 10 ? "0" + timeLeft[key] : timeLeft[key];
    });

    return timeLeft;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate);
  };

  const timeLeft = calculateTimeLeft();

  const monthNames = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  return (
    <>
      <HeaderModal />
      <TopForm title={"Сколько осталось до"} span={" даты"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="centre-date">
                  <span>Осталось до</span>
                  <div>
                    <input
                      id="dateInput"
                      type="date"
                      onChange={handleDateChange}
                    />
                  </div>
                </div>
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      {targetDate ? monthNames[targetDate.getMonth()] : ""}
                    </div>
                    <time
                      dateTime={targetDate?.toISOString()}
                      className="big-date-day"
                    >
                      {targetDate?.getDate()}
                    </time>
                  </div>
                  <div className="timer timer-1 calc-fright">
                    <div className="timer__items">
                      <div
                        className="timer__item  timer-days"
                        data-title="дней"
                      >
                        <span> {timeLeft.days}</span>
                        <span className="d">дней</span>
                      </div>

                      <div
                        className="timer__item  timer-hours"
                        data-title="часов"
                      >
                        <span> {timeLeft.hours}</span>
                        <span className="d">часов</span>
                      </div>
                      <div
                        className="timer__item  timer-minutes"
                        data-title="минут"
                      >
                        <span> {timeLeft.minutes}</span>
                        <span className="d">минут</span>
                      </div>
                      <div
                        className="timer__item  timer-seconds"
                        data-title="секунд"
                      >
                        <span> {timeLeft.seconds}</span>
                        <span className="d">секунд</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <Link href={"./until-event-christmas"}>
                <strong>Сколько осталось до Рождества</strong>
              </Link>
            </li>
          </ul>
          <p>
            Многие люди регулярно озабочены тем, сколько времени осталось до
            предстоящих событий, но далеко не всегда способны точно рассчитать
            его в уме, особенно когда необходима точность до минут и секунд. В
            наше время, однако, существует простое решение этой проблемы —
            специальный таймер, который разработан для удобного отсчета времени
            до любого желаемого события.
          </p>
          <p>
            Искусство измерения времени имеет древние корни, уходящие в глубокую
            древность, когда первобытные люди использовали примитивные солнечные
            часы для отслеживания времени. Реликвии таких солнечных часов до сих
            пор обнаруживаются на археологических раскопках, свидетельствуя о
            том, что интерес к хронометрии существовал с древних времен.
            Владение такими устройствами было не только практической
            необходимостью, но и символом статуса и богатства, доступным лишь
            избранным.
          </p>
          <p>
            В современном быстро меняющемся мире значение времени остается
            наивысшим приоритетом и заботит практически каждого. Мы живем в
            эпоху, где каждый аспект жизни подчинен времени, что делает его
            одним из самых важных аспектов нашего существования. В свете этого
            человечество постоянно совершенствует устройства и технологии,
            сделавшие навигацию по времени в современном мире более эффективной
            и удобной.
          </p>
          <p>
            Технический прогресс привел к разработке разнообразных таймеров,
            часов и других инструментов, которые помогают нам эффективно
            управлять временем. От простых будильников на смартфонах до сложных
            программных решений для профессионального использования, современные
            технологии делают отсчет времени доступным и простым для всех.
          </p>
          <p>
            Таким образом, хотя искусство измерения времени имеет древние корни,
            современные технологии делают его использование более удобным и
            эффективным для всех. Теперь мы можем не только точно отслеживать
            время, но и использовать его более эффективно в нашей быстрой и
            динамичной жизни.
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
};

export default Timer;
