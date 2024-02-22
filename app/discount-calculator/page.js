"use client";

import { useState } from "react";
import DiscountForm from "./DiscountForm";
import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
function Discount() {
  const [mode, setMode] = useState("discountedPrice");
  const [discount, setDiscount] = useState(10);
  const [discountPercentage, setDiscountPercentage] = useState(12);
  const [price, setPrice] = useState(1000);
  const [prices, setPrices] = useState("");

  const obj = {
    discount: discount,
    mode: mode,
    price: price,
  };

  if (mode === "discountPercentage") {
    obj.mode = "discountPercentage";
    delete obj.discount;
    obj.discountedPrice = discountPercentage;
  }
  if (mode === "startingPrice") {
    obj.mode = "startingPrice";

    obj.price = prices;
  }

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор "}
        description={
          "Калькулятор скидок – онлайн инструмент для быстрого расчета суммы скидки и ее процентного значения от исходной цены. Позволяет узнать сумму скидки и окончательную цену товара или услуги после применения скидки."
        }
        span={"скидок"}
      >
        <DiscountForm
          obj={obj}
          url={"https://calcline.ru/api/calculate/discount"}
          price={"Цена"}
          disconts={"Скидка: "}
          priceDiscount={"Цена со скидкой: "}
          priceBezScidki={"Цена без скидки: "}
          modeSelect={mode}
          setDiscount={setDiscount}
          setDiscountPercentage={setDiscountPercentage}
          setPric={setPrice}
        >
          <div>
            <select id="what" onChange={(e) => setMode(e.target.value)}>
              <option value="discountedPrice" selected>
                Рассчитать цену со скидкой
              </option>
              <option value="discountPercentage">
                Рассчитать процент скидки
              </option>
              <option value="startingPrice">Рассчитать начальную цену</option>
            </select>
          </div>

          {mode !== "startingPrice" && (
            <label class="numrange row-1">
              <span>Цена</span>
              <input
                type="number"
                class="input"
                id="nprice"
                value={prices}
                onChange={(e) => setPrices(e.target.value)}
              />
              <div class="notation">₽</div>
            </label>
          )}
          {mode === "startingPrice" && (
            <label class="numrange row-1">
              <span>Цена со скидкой</span>
              <input
                type="number"
                class="input"
                id="nprice"
                onChange={(e) => setPrice(e.target.value)}
              />
              <div class="notation">₽</div>
            </label>
          )}
          {mode !== "discountPercentage" && (
            <label class="numrange row-1">
              <span>Скидка</span>
              <input
                type="number"
                class="input"
                id="nprice"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
              <div class="notation">%</div>
            </label>
          )}

          {mode === "discountPercentage" && (
            <label class="numrange row-1">
              <span>Цена со скидкой</span>
              <input
                type="number"
                class="input"
                id="nprice"
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
              />
              <div class="notation">₽</div>
            </label>
          )}
        </DiscountForm>
        <Contents></Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Discount;
