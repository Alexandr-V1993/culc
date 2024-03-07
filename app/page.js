"use client";
import React, { useState } from "react";
import HeaderModal from "./components/HeaderModal";
import Footer from "./components/Footer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const calculators = [
    {
      id: 1,
      name: "Калькулятор НДС",
      category: "finance",
      image: "/nds.svg",
      alt: "ндс",
      description: "Выделит сумму налога из цены по любой ставке.",
      url: "/nds/",
    },
    {
      id: 2,
      name: "Калькулятор НДФЛ",
      category: "finance",
      image: "/ndfl2.svg",
      alt: "ндфл",
      description: "Вычислит сумму подоходного налога.",
      url: "/ndfl/",
    },
    {
      id: 3,
      name: "Сумма прописью",
      category: "finance it",
      image: "/summa.svg",
      alt: "сумма",
      description: "Правильно переведёт цифры и числа в слова.",
      url: "/summapro",
    },
    {
      id: 4,
      name: "Калькулятор ИМТ",
      category: "health sport",
      image: "/medic.svg",
      alt: "здоровье",
      description:
        "Скажет, есть ли у вас проблемы с весом по индексу массы тела.",
      url: "/imt",
    },
    {
      id: 5,
      name: "Калькулятор процентов",
      category: "finance math",
      image: "/percent.svg",
      alt: "процент",
      description: "Произведёт любые действия с числами и процентами.",
      url: "/percent/",
    },
    {
      id: 6,
      name: "Калькулятор возраста",
      category: "finance math",
      image: "/19.svg",
      alt: "возраст",
      description:
        "Вычисление возраста с точностью до минуты по дате вашего рождения.",
      url: "/age-calculator/",
    },
    {
      id: 7,
      name: "Калькулятор алкоголя",
      category: "finance math",
      image: "/alcohol.svg",
      alt: "алкоголь",
      description:
        "Калькулятор алкоголя поможет произвести расчеты важных параметров.",
      url: "/alcohol-calculator/",
    },
    {
      id: 8,
      name: "Калькулятор скидок",
      category: "finance math",
      image: "/scidki.svg",
      alt: "скидки",
      description:
        "Позволяет узнать сумму скидки и окончательную цену товара или услуги после применения скидки.",
      url: "/discount-calculator/",
    },
    {
      id: 9,
      name: "Калькулятор расхода топлива",
      category: "finance math",
      image: "/oil.svg",
      alt: "топливо",
      description:
        "Калькулятор расхода топлива помогает оценить стоимость поездки.",
      url: "/fuel-cost-calculator/",
    },
    {
      id: 10,
      name: "Калькулятор дней",
      category: "finance math",
      image: "/time-date.svg",
      alt: "дата",
      description:
        "Калькулятор дней поможет вычислению промежутка между датами.",
      url: "/date-calculator",
    },
    {
      id: 11,
      name: "Калькулятор микрозаймов",
      category: "finance math",
      image: "/micro2.svg",
      alt: "микрозаймы",
      description:
        "Микрозайм - это небольшие кредиты, предназначенные для предоставления.",
      url: "/microloan-calculator",
    },
    {
      id: 12,
      name: "Калькулятор генератора паролей",
      category: "finance math",
      image: "/parol.svg",
      alt: "генератор",
      description:
        "В цифровую эпоху пароль служит важнейшим ключом для доступа к различным учетным записям.",
      url: "/password-generator",
    },
  ];

  const filteredCalculators = calculators.filter((calculator) =>
    calculator.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <body>
      <HeaderModal />
      <section className="top">
        <div className="wrapper">
          <div className="topdesc">
            <h1>
              Самые простые и удобные <br />
              <span>онлайн-калькуляторы</span>
            </h1>
          </div>
          <div className="search-section-top">
            <input
              type="text"
              placeholder="Поиск калькулятора..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </section>

      <section className="listsection" id="2">
        <div className="calclist">
          {filteredCalculators.map((calculator) => (
            <a
              key={calculator.id}
              href={calculator.url}
              className={`calcitem ${calculator.category}`}
            >
              <span className="material-symbols-rounded symbol-width">
                <img src={calculator.image} alt={calculator.alt} />
              </span>
              <div className="calcalltext">
                <div className="calcname">{calculator.name}</div>
                <div className="calcdesc">{calculator.description}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </body>
  );
}

export default Home;
