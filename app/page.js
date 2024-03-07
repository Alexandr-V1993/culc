"use client";
import React, { useState } from "react";
import HeaderModal from "./components/HeaderModal";
import Footer from "./components/Footer";
import Contents from "@/app/components/Contents";
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
      <Contents>
        <h2 className="tops-content cont-row">
          Каталог <span> Онлайн Калькуляторов</span> - Ваш Надежный Помощник в
          Вычислениях!
        </h2>
        <p>
          Добро пожаловать на <strong>CALCOFFEE.RU</strong>, многофункциональный
          и уникальный портал, созданный для решения разнообразных задач в
          различных сферах жизни. Наш каталог онлайн калькуляторов представляет
          собой бесценный ресурс, ориентированный на упрощение вычислительных
          задач в финансах, математике, бухгалтерии и повседневной жизни.
        </p>
        <p>
          Разнообразие наших калькуляторов предоставляет возможность точных
          вычислений, специально настроенных под ваши потребности. Нужна помощь
          в финансовом планировании? Погрузитесь в мир наших финансовых
          калькуляторов, предоставляющих информацию о кредитах, ипотеках,
          инвестициях и сбережениях. Решение математических задач становится
          легким и увлекательным с нашими калькуляторами, охватывающими
          проценты, геометрию, алгебру и многие другие области.
        </p>
        <p>
          Для профессионалов в сфере бухгалтерии мы предлагаем
          специализированные инструменты для подсчета налогов (ДНС, НДФЛ) и
          расчетов зарплат.
        </p>
        <p>
          Наш каталог также включает калькуляторы, охватывающие здравоохранение,
          науку, полезные чек-листы и гайды, конвертеры валют, онлайн
          рандомайзеры и генераторы - все, что может пригодиться в повседневной
          жизни.
        </p>
        <p>
          Будьте вы студентом или профессионалом, <strong>CALCOFFEE.RU</strong>{" "}
          предоставляет простую и удобную навигацию, делая сложные вычисления
          доступными для каждого. Исследуйте наш разнообразный арсенал
          калькуляторов прямо сейчас и упростите свои вычисления в любой
          ситуации!
        </p>
        <p>
          Помимо вышеупомянутых возможностей, <strong>CALCOFFEE.RU</strong>{" "}
          предлагает вам уникальные инструменты для решения широкого спектра
          задач. Наши калькуляторы в области здравоохранения помогут вам
          расчитать дозировку лекарств или определить индекс массы тела. В
          разделе науки вы найдете калькуляторы для проведения химических
          расчетов или определения времени полураспада веществ. Мы также
          предоставляем удобные онлайн-чек-листы для повседневных задач и гайды
          по решению различных проблем.
        </p>
        <p>
          Не забывайте и о наших конвертерах валют, которые обеспечивают
          актуальные курсы обмена, и генераторах случайных данных, пригодных для
          игр, тестов или творческих проектов. Наша цель - не только
          предоставить вам инструменты для решения конкретных задач, но и
          сделать ваш онлайн-опыт максимально увлекательным и полезным.
        </p>
        <p>
          С <strong>CALCOFFEE.RU</strong> каждый может легко освоить и
          использовать необходимые инструменты, благодаря интуитивному
          интерфейсу и доступности наших калькуляторов. Расширьте свои
          вычислительные возможности прямо сейчас, и давайте вместе делать вашу
          жизнь более вычисленной, удобной и интересной!
        </p>
        <p>
          Исследуйте наш разнообразный набор калькуляторов и упростите свои
          вычисления прямо сейчас!
        </p>
      </Contents>
      <Footer />
    </body>
  );
}

export default Home;
