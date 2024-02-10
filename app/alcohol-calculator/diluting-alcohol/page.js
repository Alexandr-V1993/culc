"use client";
import TopForm from "@/app/components/TopForm";
import HeaderModal from "@/app/components/HeaderModal";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import { useState } from "react";
import Contents from "@/app/components/Contents";
import "./diluting.css";

function Imt() {
  const [volume, setVolume] = useState("");
  const [strengthAfter, setStrengthAfter] = useState("");
  const [strengthBefore, setStrengthBefore] = useState("");
  const obj = {
    strengthAfter: Number(strengthAfter),
    strengthBefore: Number(strengthBefore),
    volume: Number(volume),
  };

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор разбавления спирта "}
        description={
          "Калькулятор разбавления спирта помогает избавиться от рутины с расчетам и исклюбчает ошибки в пропорциях воды и спирта, вводя в форму простые исходные данные."
        }
        span={"водой"}
      >
        <Form
          obj={obj}
          url={"https://calcline.ru/api/calculate/alcohol-water-dilution"}
          formTitle={"Необходимо долить литров воды:"}
          all={"литров"}
        >
          <label class="numrange row-1 van">
            <span>Начальный объем спирта</span>
            <input
              type="number"
              class="input"
              id="nheight"
              min="0"
              max="250"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
            <div class="notation">л.</div>
          </label>

          <label class="numrange row-1 two">
            <span>Крепость начального объема</span>
            <input
              type="number"
              class="input"
              id="nweight"
              min="0"
              max="100"
              value={strengthBefore}
              onChange={(e) => setStrengthBefore(e.target.value)}
            />
            <div class="notation">%</div>
          </label>
          <label class="numrange row-1 two">
            <span>Требуемая крепость</span>
            <input
              type="number"
              class="input"
              id="nweight"
              min="0"
              max="100"
              value={strengthAfter}
              onChange={(e) => setStrengthAfter(e.target.value)}
            />
            <div class="notation">%</div>
          </label>
        </Form>
        <Contents>
          <h2 className="top-deluting">Зачем разбавлять самогон?</h2>
          <p>
            Разбавление самогона важно для безопасности употребления и
            законности производства. Снижение уровня алкоголя предотвращает риск
            для здоровья и обеспечивает соответствие алкогольным нормам. Во
            многих регионах действуют строгие нормы допустимого объема алкоголя
            (ABV).Кроме того, разбавление улучшает вкус и запах самогона.
          </p>
          <p>Как разбавить самогон</p>
          <p>
            Калькулятор разбавления самогона помогает избавиться от рутины с
            расчетам и исклюбчает ошибки в пропорциях воды и спирта, вводя в
            форму простые исходные данные, предоставляя расчеты в реальном
            времени для точного разбавления, предлагая современную и эффективную
            альтернативу старым методам.
          </p>
          <p>
            Калькулятор отлично подходит как для начинающих, так и для опытных
            самогонщиков, которым нужны точные результаты и правильные
            пропорции.
          </p>
          <h2>Понимание крепости самогона</h2>
          <p>
            ABV - это показатель содержания спирта в жидкости, выраженный в
            процентах. Знание ABV вашего самогона - ключ к принятию обоснованных
            решений о разбавлении.
          </p>
          <p>
            Слишком высокий уровень ABV может представлять опасность для
            здоровья, слишком низкий - не соответствовать законодательным
            нормам. Регулировка содержания воды может повлиять не только на
            крепость спирта, но и на вкус вашего домашнего самогона.
          </p>
          <h2>Как развести самогон водой</h2>
          <ol>
            <li>
              Начните с точного измерения количества алкоголя, который вы
              собираетесь разбавить до определенной крепости, например 40
              градусов.
            </li>
            <li>
              Убедитесь, что температура напитка составляет 20 градусов, и
              измерьте содержание алкоголя с помощью ареометра.
            </li>
            <li>
              Воспользуйтесь онлайн-калькулятором для расчета разбавления.
              Введите исходную крепость и объем напитка, а также желаемое
              содержание алкоголя.
            </li>
            <li>
              Повторите процесс расчета на онлайн-калькуляторе, введя начальную
              крепость, объем и желаемое содержание алкоголя.
            </li>
            <li>
              Медленно влейте спирт в жидкость, аккуратно перемешивая раствор
              ложкой из нержавеющей стали или стеклянной палочкой.
              <p>
                Необходимо добавлять спирт в воду, а не наоборот, так как в
                противном случае это может привести к ухудшению качества
                продукта и появлению мутности.
              </p>
            </li>
            <li>
              Оставьте герметичную емкость в прохладном темном месте на 1-2 дня.
              По истечении этого срока продукт будет полностью готов к
              употреблению.
            </li>
          </ol>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Imt;
