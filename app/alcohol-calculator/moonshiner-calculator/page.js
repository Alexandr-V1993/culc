"use client";
import TopForm from "@/app/components/TopForm";
import HeaderModal from "@/app/components/HeaderModal";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import { useState } from "react";
import Contents from "@/app/components/Contents";
import "./moonshiner.css";

function Areometr() {
  const [volume1, setvolume1] = useState("");
  const [volume2, setVolume2] = useState("");
  const [strength1, setStrength1] = useState("");
  const [strength2, settrength2] = useState("");

  const obj = {
    volume1: Number(volume1),
    volume2: Number(volume2),
    strength1: Number(strength1),
    strength2: Number(strength2),
  };

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор смешивания"}
        description={
          "При смешивании двух разных спиртов разной крепости трудно понять, какой градус будет у конечного продукта. Чтобы знать точный результат, воспользуйтесь калькулятором смешения спиртов"
        }
        span={"спиртов"}
      >
        <Form
          obj={obj}
          url={"https://calcline.ru/api/calculate/alcohol-mixing"}
          alcoTitle={"Крепость жидкости:"}
        >
          <label class="numrange row-1 van">
            <span>Объем первой жидкости</span>
            <input
              type="number"
              class="input"
              id="nheight"
              min="0"
              value={volume1}
              onChange={(e) => setvolume1(e.target.value)}
            />
            <div class="notation">л-в.</div>
          </label>
          <label class="numrange row-1 van">
            <span>Крепость первой жидкости</span>
            <input
              type="number"
              class="input"
              id="nheight"
              min="0"
              max="100"
              value={strength1}
              onChange={(e) => setStrength1(e.target.value)}
            />
            <div class="notation">°C</div>
          </label>
          <label class="numrange row-1 van">
            <span>Объем второй жидкости</span>
            <input
              type="number"
              class="input"
              id="nheight"
              min="0"
              value={volume2}
              onChange={(e) => setVolume2(e.target.value)}
            />
            <div class="notation">л-в</div>
          </label>
          <label class="numrange row-1 van">
            <span>Крепость второй жидкости</span>
            <input
              type="number"
              class="input"
              id="nheight"
              min="0"
              max="100"
              value={strength2}
              onChange={(e) => settrength2(e.target.value)}
            />
            <div class="notation">°С</div>
          </label>
        </Form>
        <Contents>
          <h2 className="top-alco">Коррекции показаний ареометра</h2>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Areometr;
