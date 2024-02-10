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
                    <img
                      className="img-width"
                      src="/dosug2.svg"
                      alt="бухгалтерия"
                    />
                  </span>{" "}
                  Досуг
                </a>
                <a href="/age-calculator" class="sublnk">
                  Калькулятор возраста
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
