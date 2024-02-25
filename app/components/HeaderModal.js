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
        <div class="topright">
          <div class="toprightmenu" onClick={() => setOpen(true)}>
            <img src="/menu.svg" alt="меню" />
          </div>
        </div>
      </header>
      <SimpleModal open={open} setOpen={setOpen}>
        <div class="topright">
          <div class="topmenu active">
            <div class="topmenuwrap">
              <div class="topmenulink">
                <a class="linkheader linknotanchor">
                  <span class="material-symbols-rounded">
                    <img src="/finanse2.svg" alt="финансы" />
                  </span>{" "}
                  Финансы
                </a>
                <a href="/nds/" class="sublnk">
                  Калькулятор НДС
                </a>

                <a href="/ndfl" class="sublnk">
                  Калькулятор НДФЛ
                </a>
                <a href="/summapro" class="sublnk">
                  Сумма прописью
                </a>
              </div>
              <div class="topmenulink">
                <a class="linkheader linknotanchor">
                  <span class="material-symbols-rounded">
                    <img
                      className="img-width"
                      src="/matt.svg"
                      alt="бухгалтерия"
                    />
                  </span>{" "}
                  Математика
                </a>
                <a href="/percent" class="sublnk">
                  Калькулятор процентов
                </a>
              </div>
              <div class="topmenulink">
                <a class="linkheader linknotanchor">
                  <span class="material-symbols-rounded">
                    <img
                      className="img-width"
                      src="/heart.svg"
                      alt="бухгалтерия"
                    />
                  </span>{" "}
                  Здоровье
                </a>
                <a href="/imt" class="sublnk">
                  Калькулятор ИМТ
                </a>
              </div>
              <div class="topmenulink">
                <a class="linkheader linknotanchor">
                  <span class="material-symbols-rounded">
                    <img className="img-width" src="/dosug2.svg" alt="досуг" />
                  </span>{" "}
                  Досуг
                </a>
                <a href="/age-calculator" class="sublnk">
                  Калькулятор возраста
                </a>
                <a href="/discount-calculator" class="sublnk">
                  Калькулятор скидок
                </a>
              </div>
              <div class="topmenulink">
                <a class="linkheader linknotanchor">
                  <span class="material-symbols-rounded">
                    <img className="img-width" src="/alco.svg" alt="досуг" />
                  </span>{" "}
                  Алкоголь
                </a>
                <a href="/alcohol-calculator" class="sublnk">
                  Калькулятор алкоголя
                </a>
                <a href="/diluting-alcohol" class="sublnk">
                  Калькулятор разбавления спирта водой
                </a>
                <a href="/sugar-braga" class="sublnk">
                  Калькулятор расчета браги
                </a>
                <a href="/areometer-correction" class="sublnk">
                  Калькулятор коррекции ареометра
                </a>
                <a href="/head-selection" class="sublnk">
                  Калькулятор отбора голов
                </a>
                <a href="/replacement-sugar" class="sublnk">
                  Калькулятор расчета глюкозы
                </a>
                <a href="/moonshiner-calculator" class="sublnk">
                  Калькулятор смешивания спиртов
                </a>
              </div>
              <div class="topmenulink">
                <a class="linkheader linknotanchor">
                  <span class="material-symbols-rounded">
                    <img
                      className="img-width"
                      src="/car2.svg"
                      alt="автомобиль"
                    />
                  </span>{" "}
                  Автомобильные калькуляторы
                </a>
                <a href="/fuel-cost-calculator" class="sublnk">
                  Калькулятор расхода топлива
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
