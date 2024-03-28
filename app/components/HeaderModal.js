"use client";

import { useState } from "react";
import SimpleModal from "./SimpleModal/SimpleModal";

function HeaderModal() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header>
        <a href="/">
          <img src="/logo.svg" alt="логотип" />
        </a>
        <div className="topright">
          <div className="toprightmenu" onClick={() => setOpen(true)}>
            <img src="/menu.svg" alt="меню" />
          </div>
        </div>
      </header>
      <SimpleModal open={open} setOpen={setOpen}>
        <div className="topright">
          <div className="topmenu active">
            <div className="topmenuwrap">
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img src="/finanse2.svg" alt="финансы" />
                  </span>{" "}
                  Финансы
                </a>
                <a href="/nds/" className="sublnk">
                  Калькулятор НДС
                </a>

                <a href="/ndfl" className="sublnk">
                  Калькулятор НДФЛ
                </a>
                <a href="/summapro" className="sublnk">
                  Сумма прописью
                </a>
                <a href="/microloan-calculator" className="sublnk">
                  Сумма прописью
                </a>
              </div>
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img
                      className="img-width"
                      src="/matt.svg"
                      alt="бухгалтерия"
                    />
                  </span>{" "}
                  Математика
                </a>
                <a href="/percent" className="sublnk">
                  Калькулятор процентов
                </a>
                <a href="/compound-interest-calculator" className="sublnk">
                  Калькулятор сложного процента
                </a>
                <a href="/add-percentage-number" className="sublnk">
                  Калькулятор прибавления процента к числу
                </a>
                <a href="/number-of-number" className="sublnk">
                  Калькулятор процента одного числа от другого
                </a>
                <a href="/one-hundred-percent" className="sublnk">
                  Калькулятор нахождения ста процентов
                </a>
                <a href="/percent-of-number" className="sublnk">
                  Калькулятор процента от числа
                </a>
                <a href="/percentage-from-number" className="sublnk">
                  Калькулятор высчета процента из числа
                </a>
                <a href="percentage-number-greater" className="sublnk">
                  Калькулятор на сколько % одно число больше другого.
                </a>
                <a href="percentage-number-less" className="sublnk">
                  Калькулятор на сколько % одно число меньше другого
                </a>
              </div>
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img
                      className="img-width"
                      src="/heart.svg"
                      alt="бухгалтерия"
                    />
                  </span>{" "}
                  Здоровье
                </a>
                <a href="/imt" className="sublnk">
                  Калькулятор ИМТ
                </a>
                <a href="/calorie-calculator" className="sublnk">
                  Калькулятор калорий
                </a>
                <a href="/bac-calculator" className="sublnk">
                  Калькулятор алкоголя
                </a>
              </div>
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img className="img-width" src="/dosug2.svg" alt="досуг" />
                  </span>{" "}
                  Досуг
                </a>
                <a href="/age-calculator" className="sublnk">
                  Калькулятор возраста
                </a>
                <a href="/discount-calculator" className="sublnk">
                  Калькулятор скидок
                </a>
                <a href="/date-calculator" className="sublnk">
                  Калькулятор дней
                </a>
              </div>
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img className="img-width" src="/alco.svg" alt="досуг" />
                  </span>{" "}
                  Алкоголь
                </a>
                <a href="/alcohol-calculator" className="sublnk">
                  Калькулятор самогонщика
                </a>
                <a href="/diluting-alcohol" className="sublnk">
                  Калькулятор разбавления спирта водой
                </a>
                <a href="/sugar-braga" className="sublnk">
                  Калькулятор расчета браги
                </a>
                <a href="/areometer-correction" className="sublnk">
                  Калькулятор коррекции ареометра
                </a>
                <a href="/head-selection" className="sublnk">
                  Калькулятор отбора голов
                </a>
                <a href="/replacement-sugar" className="sublnk">
                  Калькулятор расчета глюкозы
                </a>
                <a href="/moonshiner-calculator" className="sublnk">
                  Калькулятор смешивания спиртов
                </a>
                <a href="/second-fractional-distillation" className="sublnk">
                  Калькулятор дробной перегонки спирта сырца
                </a>
              </div>
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img
                      className="img-width"
                      src="/car2.svg"
                      alt="автомобиль"
                    />
                  </span>{" "}
                  Автомобильные
                </a>
                <a href="/fuel-cost-calculator" className="sublnk">
                  Калькулятор расхода топлива
                </a>
              </div>
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img
                      className="img-width"
                      src="/cub2.svg"
                      alt="автомобиль"
                    />
                  </span>{" "}
                  Рандомайзеры
                </a>
                <a href="/password-generator" className="sublnk">
                  Генератор паролей
                </a>
              </div>
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img className="img-width" src="/date.svg" alt="дата" />
                  </span>{" "}
                  Дата и время
                </a>
                <a href="/until-event-christmas" className="sublnk">
                  Сколько дней осталось до Рождества
                </a>
              </div>
              <span className="close" onClick={() => setOpen(false)}>
                <img src="/close.svg" alt="закрыть" />
              </span>
            </div>
          </div>
        </div>
      </SimpleModal>
    </div>
  );
}

export default HeaderModal;
