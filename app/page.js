import HeaderModal from "./components/HeaderModal";
import Footer from "./components/Footer";
function Home() {
  return (
    <body>
      <HeaderModal />
      <section class="top">
        <div class="wrapper">
          <div class="topdesc">
            <h1>
              Самые простые и удобные <br />
              <span>онлайн-калькуляторы</span>
            </h1>
          </div>
        </div>
      </section>
      <section class="listsection" id="2">
        <div class="calclist">
          {/* <a href="/simple/" class="calcitem math study">
              <span class="material-symbols-rounded"></span>
              <div class="calcalltext">
                <div class="calcname">Обычный калькулятор</div>
                <div class="calcdesc">Просто посчитает чего вы там хотели.</div>
              </div>
            </a> */}
          <a href="/nds/" class="calcitem finance ">
            <span class="material-symbols-rounded symbol-width">
              <img src="/nds.svg" alt="ндс" />
            </span>
            <div class="calcalltext">
              <div class="calcname">Калькулятор НДС</div>
              <div class="calcdesc">
                Выделит сумму налога из цены по любой ставке.
              </div>
            </div>
          </a>
          <a href="/ndfl/" class="calcitem finance ">
            <span class="material-symbols-rounded symbol-width">
              <img src="/ndfl2.svg" alt="ндфл" />
            </span>
            <div class="calcalltext">
              <div class="calcname">Калькулятор НДФЛ</div>
              <div class="calcdesc">Вычислит сумму подоходного налога.</div>
            </div>
          </a>
          <a href="/summapro" class="calcitem finance it">
            <span class="material-symbols-rounded symbol-width">
              <img src="/summa.svg" alt="сумма" />
            </span>
            <div class="calcalltext">
              <div class="calcname">Сумма прописью</div>
              <div class="calcdesc">
                Правильно переведёт цифры и числа в слова.
              </div>
            </div>
          </a>
          {/* <a href="/html/" class="calcitem it ">
              <span class="material-symbols-rounded"></span>
              <div class="calcalltext">
                <div class="calcname">HTML-редактор</div>
                <div class="calcdesc">
                  Поможет визуально редактировать код онлайн.
                </div>
              </div>
            </a> */}
          <a href="/imt" class="calcitem health sport">
            <span class="material-symbols-rounded symbol-width">
              <img src="/medic.svg" alt="здоровье" />
            </span>
            <div class="calcalltext">
              <div class="calcname">Калькулятор ИМТ</div>
              <div class="calcdesc">
                Скажет, есть ли у вас проблемы с весом по индексу массы тела.
              </div>
            </div>
          </a>
          {/* <a href="/krug/" class="calcitem geom study">
              <span class="material-symbols-rounded"></span>
              <div class="calcalltext">
                <div class="calcname">Площадь круга</div>
                <div class="calcdesc">
                  Рассчитает площать круга по диаметру, радиусу или длине
                  окружности.
                </div>
              </div>
            </a>  */}

          {/* <a
              href="/alco/"
              class="calcitem car food health"
             
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">ликер</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Алкокалькулятор</div>
                <div class="calcdesc">
                  Оценит время, когда можно сесть за руль после выпитого
                  спиртного.
                </div>
              </div>
            </a>
            <a href="/pass/" class="calcitem it " style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">ключ</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Генератор паролей</div>
                <div class="calcdesc">
                  Создаст надёжный пароль, который трудно взломать.
                </div>
              </div>
            </a>
            <a
              href="/walk/"
              class="calcitem health sport fun"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">пеший туризм</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор ходьбы</div>
                <div class="calcdesc">
                  Продемонстрирует, сколько калорий вы расходуете когда идёте.
                </div>
              </div>
            </a>
    
            <a href="/diam/" class="calcitem geom " style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">
                    круговая диаграмма
                  </font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Диаметр круга</div>
                <div class="calcdesc">
                  Определит диаметр по длине окружности и не только.
                </div>
              </div>
            </a>
            <a
              href="/bmr/"
              class="calcitem health food"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">выпрямить</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор BMR</div>
                <div class="calcdesc">
                  Подсчитает скорость базовового метаболима (основного обмена
                  веществ).
                </div>
              </div>
            </a>
            <a href="/point/" class="calcitem study " style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">школа</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Средний балл</div>
                <div class="calcdesc">
                  Рассчитает средний балл диплома или аттестата.
                </div>
              </div>
            </a>
            <a href="/vpoint/" class="calcitem study " style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">школа</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Средний взвешенный</div>
                <div class="calcdesc">Определит средневзвешенную оценку.</div>
              </div>
            </a>
            <a href="/gpa/" class="calcitem study " style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">школа</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор GPA</div>
                <div class="calcdesc">
                  Правильно посчитает Grade Point Average.
                </div>
              </div>
            </a>
          
            <a
              href="/velo/"
              class="calcitem sport health"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">
                    направления_велосипед
                  </font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Калории на велосипеде</div>
                <div class="calcdesc">
                  Произведёт расчёт расхода энергии в поездке.
                </div>
              </div>
            </a>
            <a href="/okr/" class="calcitem geom " style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">круг</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Длина окружности</div>
                <div class="calcdesc">
                  Посчитает периметр круга по диаметру, радиусу, площади.
                </div>
              </div>
            </a>
            <a
              href="/pulse/"
              class="calcitem health sport"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">Monitor_heart</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор пульса</div>
                <div class="calcdesc">
                  Подберёт пульсовую зону для сжигания жира.
                </div>
              </div>
            </a>
            <a href="/meat/" class="calcitem food fun" style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">Outdoor_grill</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">
                      Калькулятор гриля
                    </font>
                  </font>
                </div>
                <div class="calcdesc">
                  Определит количество мяса, чтобы хватило на всех.
                </div>
              </div>
            </a>
            <a href="/son/" class="calcitem health fun" style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">Гостиница</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор сна</div>
                <div class="calcdesc">
                  Укажет когда лечь или встать, чтобы выспаться.
                </div>
              </div>
            </a>
            <a
              href="/protein/"
              class="calcitem food health"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">яйцо</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор белка</div>
                <div class="calcdesc">
                  Определит суточную норму протеина для взрослого человека.
                </div>
              </div>
            </a>
            <a
              href="/ovulation/"
              class="calcitem woman "
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">событие</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор овуляции</div>
                <div class="calcdesc">
                  Назначит оптимальную дату для зачатия и покажет фертильные
                  дни.
                </div>
              </div>
            </a>
            <a
              href="/kbzu/"
              class="calcitem food health"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">Быстрое питание</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор КБЖУ</div>
                <div class="calcdesc">
                  Рассчитает норму потребления калорий, белков, жиров и
                  углеводов.
                </div>
              </div>
            </a>
            <a
              href="/weight/"
              class="calcitem health sport"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">масса</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Идеальный вес</div>
                <div class="calcdesc">
                  Покажет, какой вес для вас является наиболее подходящим.
                </div>
              </div>
            </a>
            <a
              href="/sizes/"
              class="calcitem fun woman"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">выпрямить</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Размер одежды</div>
                <div class="calcdesc">
                  Определит ваш размер одежды для мужчин и женщин.
                </div>
              </div>
            </a>
            <a
              href="/run/"
              class="calcitem sport health"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">направления_бег</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор бега</div>
                <div class="calcdesc">
                  Продемонстрирует, сколько калорий вы расходуете во время
                  пробежки.
                </div>
              </div>
            </a>
            <a
              href="/hronomer/"
              class="calcitem study it"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">речь_в_текст</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Хрономер</div>
                <div class="calcdesc">
                  Подсчитает хронометраж: время чтения текста вслух.
                </div>
              </div>
            </a>
            <a href="/step/" class="calcitem sport " style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">
                    Transfer_within_a_station
                  </font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Длина шага</div>
                <div class="calcdesc">
                  Измерит длину вашего шага при ходьбе или беге.
                </div>
              </div>
            </a>
            <a href="/random/" class="calcitem it math" style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">авто-обновление</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Рандомайзер</font>
                  </font>
                </div>
                <div class="calcdesc">
                  Выберет нужное количество случайных чисел заданном диапазоне.
                </div>
              </div>
            </a>
            <a href="/gender/" class="calcitem woman " style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">семья_туалет</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Пол ребёнка</div>
                <div class="calcdesc">
                  Научно определит вероятность рождения мальчика или девочки.
                </div>
              </div>
            </a>
            <a
              href="/coin/"
              class="calcitem math it finance"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">монетизация_вкл.</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Бросить монетку</div>
                <div class="calcdesc">
                  Каждый раз независимым случайным образом выпадет орёл или
                  решка.
                </div>
              </div>
            </a>
            <a href="/tables/" class="calcitem study " style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">сетка_он</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Таблицы Шульте</div>
                <div class="calcdesc">
                  Тренируйте внимание, память и скорость чтения.
                </div>
              </div>
            </a>
            <a
              href="/roots/"
              class="calcitem math study"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">сделано_все</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор корней</div>
                <div class="calcdesc">
                  Посчитает квадратные и кубические радикалы.
                </div>
              </div>
            </a>
            <a
              href="/drobi/"
              class="calcitem math study"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">view_comfy_alt</font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор дробей</div>
                <div class="calcdesc">
                  Вычислит сумму, разность, произведение и частное.
                </div>
              </div>
            </a>
            <a
              href="/quadratic/"
              class="calcitem math study"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">
                    надстрочный индекс
                  </font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Квадратные уравнения</div>
                <div class="calcdesc">
                  Найдёт дискриминант и корни, если они существуют.
                </div>
              </div>
            </a>
            <a href="/fuel/" class="calcitem car " style="display: block;">
              <span class="material-symbols-rounded">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">
                    local_gas_station
                  </font>
                </font>
              </span>
              <div class="calcalltext">
                <div class="calcname">Расход топлива</div>
                <div class="calcdesc">
                  Не даст остаться без бензина в дороге.
                </div>
              </div>
            </a>
            <a
              href="/interest/"
              class="calcitem finance math"
              style="display: block;"
            >
              <span class="material-symbols-rounded">percent</span>
              <div class="calcalltext">
                <div class="calcname">Сложный процент</div>
                <div class="calcdesc">
                  Покажет как можно копить и преумножать свой капитал.
                </div>
              </div>
            </a>
            <a href="/newyear/" class="calcitem fun " style="display: block;">
              <span class="material-symbols-rounded">park</span>
              <div class="calcalltext">
                <div class="calcname">Таймер нового года</div>
                <div class="calcdesc">
                  Произведёт обратный отсчёт до ближайшего 1 января.
                </div>
              </div>
            </a>
            <a href="/leto/" class="calcitem fun " style="display: block;">
              <span class="material-symbols-rounded">sunny</span>
              <div class="calcalltext">
                <div class="calcname">Сколько ждать лето</div>
                <div class="calcdesc">
                  Таймер покажет, сколько времени осталось до ближайшего лета.
                </div>
              </div>
            </a>
            <a
              href="/engineer/"
              class="calcitem math finance it build"
              style="display: block;"
            >
              <span class="material-symbols-rounded">engineering</span>
              <div class="calcalltext">
                <div class="calcname">Инженерный калькулятор</div>
                <div class="calcdesc">
                  Посчитает самые сложные примеры на продвинутом уровне.
                </div>
              </div>
            </a>
            <a
              href="/mult/"
              class="calcitem math study"
              style="display: block;"
            >
              <span class="material-symbols-rounded">sort</span>
              <div class="calcalltext">
                <div class="calcname">Умножение в столбик</div>
                <div class="calcdesc">
                  Школьный способ нахождения произведения больших чисел.
                </div>
              </div>
            </a>
            <a href="/visulky/" class="calcitem fun " style="display: block;">
              <span class="material-symbols-rounded">dialpad</span>
              <div class="calcalltext">
                <div class="calcname">Висюльки онлайн</div>
                <div class="calcdesc">
                  Можно поиграться и не портить свой интерьер.
                </div>
              </div>
            </a>
            <a href="/gym/" class="calcitem sport " style="display: block;">
              <span class="material-symbols-rounded">fitness_center</span>
              <div class="calcalltext">
                <div class="calcname">Жим лежа</div>
                <div class="calcdesc">
                  Посчитает, штангу какого веса вы сможете выжать лежа от груди.
                </div>
              </div>
            </a>
            <a href="/age/" class="calcitem fun " style="display: block;">
              <span class="material-symbols-rounded">child_care</span>
              <div class="calcalltext">
                <div class="calcname">Возраст человека</div>
                <div class="calcdesc">
                  Определит точный возраст по дате рождения.
                </div>
              </div>
            </a>
            <a href="/dog/" class="calcitem fun " style="display: block;">
              <span class="material-symbols-rounded">
                sound_detection_dog_barking
              </span>
              <div class="calcalltext">
                <div class="calcname">Возраст собаки</div>
                <div class="calcdesc">
                  Рассчитает условный возраст питомца по человеческим меркам.
                </div>
              </div>
            </a>
            <a href="/cat/" class="calcitem fun " style="display: block;">
              <span class="material-symbols-rounded">pets</span>
              <div class="calcalltext">
                <div class="calcname">Возраст кошки</div>
                <div class="calcdesc">
                  Покажет возраст питомца в условных человеческих годах.
                </div>
              </div>
            </a>
            <a href="/ball/" class="calcitem geom " style="display: block;">
              <span class="material-symbols-rounded">sports_basketball</span>
              <div class="calcalltext">
                <div class="calcname">Объем шара (сферы)</div>
                <div class="calcdesc">
                  Посчитает объем любого сферического объекта.
                </div>
              </div>
            </a>
            <a href="/triangle/" class="calcitem geom " style="display: block;">
              <span class="material-symbols-rounded">change_history</span>
              <div class="calcalltext">
                <div class="calcname">Площадь треугольника</div>
                <div class="calcdesc">
                  Измерит площадь треугольника по сторонам, высоте, углам и т.п.
                </div>
              </div>
            </a>
            <a href="/cylinder/" class="calcitem geom " style="display: block;">
              <span class="material-symbols-rounded">database</span>
              <div class="calcalltext">
                <div class="calcname">Объем цилиндра</div>
                <div class="calcdesc">
                  Подсчитает объем цилиндрических фигур: трубы, стакана, бочки и
                  так далее.
                </div>
              </div>
            </a>
            <a
              href="/breakstone/"
              class="calcitem build "
              style="display: block;"
            >
              <span class="material-symbols-rounded">snowing</span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор щебня</div>
                <div class="calcdesc">
                  Рассчитает объем или вес щебенки разных видов и фракций.
                </div>
              </div>
            </a>
            <a href="/sand/" class="calcitem build " style="display: block;">
              <span class="material-symbols-rounded">landscape</span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор песка</div>
                <div class="calcdesc">
                  Произведет расчет объема или веса разных видов песка.
                </div>
              </div>
            </a>
            <a
              href="/tonne/"
              class="calcitem build physic"
              style="display: block;"
            >
              <span class="material-symbols-rounded">scale</span>
              <div class="calcalltext">
                <div class="calcname">Перевод в тонны</div>
                <div class="calcdesc">
                  Переведет вес из тонн и в тонны различных величин.
                </div>
              </div>
            </a>
            <a
              href="/box/"
              class="calcitem build geom car"
              style="display: block;"
            >
              <span class="material-symbols-rounded">inventory_2</span>
              <div class="calcalltext">
                <div class="calcname">Объем коробок</div>
                <div class="calcdesc">
                  Определит, сколько кубических метров или литров поместится к
                  коробки.
                </div>
              </div>
            </a>
            <a href="/conus/" class="calcitem geom " style="display: block;">
              <span class="material-symbols-rounded">change_history</span>
              <div class="calcalltext">
                <div class="calcname">Объем конуса</div>
                <div class="calcdesc">
                  Посчитает объем любых конусовидных фигур.
                </div>
              </div>
            </a>
            <a
              href="/cutpyramid/"
              class="calcitem geom "
              style="display: block;"
            >
              <span class="material-symbols-rounded">glass_cup</span>
              <div class="calcalltext">
                <div class="calcname">Объем усеченной пирамиды</div>
                <div class="calcdesc">
                  Определит объем усеченной пирамиды по специальной формуле.
                </div>
              </div>
            </a>
            <a
              href="/cylinderarea/"
              class="calcitem geom "
              style="display: block;"
            >
              <span class="material-symbols-rounded">database</span>
              <div class="calcalltext">
                <div class="calcname">Площадь цилиндра</div>
                <div class="calcdesc">
                  Рассчитает площадь поверхности цилиндрической фигуры.
                </div>
              </div>
            </a>
            <a
              href="/rectangle/"
              class="calcitem geom "
              style="display: block;"
            >
              <span class="material-symbols-rounded">crop_7_5</span>
              <div class="calcalltext">
                <div class="calcname">Площадь прямоугольника</div>
                <div class="calcdesc">
                  Измерит площадь прямоугольника по сторонам или диагоналям.
                </div>
              </div>
            </a>
            <a href="/trapeze/" class="calcitem geom " style="display: block;">
              <span class="material-symbols-rounded">airlines</span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор трапеции</div>
                <div class="calcdesc">
                  Определит площадь любой трапеции по специальной формуле.
                </div>
              </div>
            </a>
            <a href="/cutconus/" class="calcitem geom " style="display: block;">
              <span class="material-symbols-rounded">glass_cup</span>
              <div class="calcalltext">
                <div class="calcname">Усечённый конус</div>
                <div class="calcdesc">
                  Посчитает объем и площадь усеченного конуса.
                </div>
              </div>
            </a>
            <a href="/pyramid/" class="calcitem geom " style="display: block;">
              <span class="material-symbols-rounded">change_history</span>
              <div class="calcalltext">
                <div class="calcname">Объем пирамиды</div>
                <div class="calcdesc">
                  Узнайте объем пирамиды по высоте, площади основания или
                  стороне основания.
                </div>
              </div>
            </a>
            <a
              href="/timestable/"
              class="calcitem study math"
              style="display: block;"
            >
              <span class="material-symbols-rounded">table</span>
              <div class="calcalltext">
                <div class="calcname">Тренажер умножения</div>
                <div class="calcdesc">
                  Запоминайте таблицу умножения онлайн с помощью тренажёра.
                </div>
              </div>
            </a>
            <a
              href="/tube/"
              class="calcitem build geom physic"
              style="display: block;"
            >
              <span class="material-symbols-rounded">database</span>
              <div class="calcalltext">
                <div class="calcname">Объем трубы</div>
                <div class="calcdesc">
                  Определит объем трубы по диаметру и длине трубопровода.
                </div>
              </div>
            </a>
            <a
              href="/betonline/"
              class="calcitem build "
              style="display: block;"
            >
              <span class="material-symbols-rounded">house</span>
              <div class="calcalltext">
                <div class="calcname">Ленточный фундамент</div>
                <div class="calcdesc">
                  Рассчитает объем раствора для заливки для фундамента-ленты.
                </div>
              </div>
            </a>
            <a
              href="/betonplate/"
              class="calcitem build "
              style="display: block;"
            >
              <span class="material-symbols-rounded">crop_16_9</span>
              <div class="calcalltext">
                <div class="calcname">Фундамент-плита</div>
                <div class="calcdesc">
                  Посчитает объем бетона для заливки для фундамента-плиты.
                </div>
              </div>
            </a>
            <a href="/board/" class="calcitem build " style="display: block;">
              <span class="material-symbols-rounded">outdoor_garden</span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор доски</div>
                <div class="calcdesc">
                  Понадобится, чтобы точно рассчитать количество досок
                </div>
              </div>
            </a>
            <a
              href="/laminate/"
              class="calcitem build "
              style="display: block;"
            >
              <span class="material-symbols-rounded">capture</span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор ламината</div>
                <div class="calcdesc">
                  Подскажет необходимое количество ламината на комнату.
                </div>
              </div>
            </a>
            <a href="/spoon/" class="calcitem food " style="display: block;">
              <span class="material-symbols-rounded">restaurant_menu</span>
              <div class="calcalltext">
                <div class="calcname">Граммы в ложки</div>
                <div class="calcdesc">
                  Переведёт граммы в чайные или столовые ложки и наоборот.
                </div>
              </div>
            </a>
            <a href="/temprun/" class="calcitem sport " style="display: block;">
              <span class="material-symbols-rounded">directions_run</span>
              <div class="calcalltext">
                <div class="calcname">Темп бега</div>
                <div class="calcdesc">
                  Определит оптимальный темп или скорость для пробежки.
                </div>
              </div>
            </a>
            <a
              href="/wallpaper/"
              class="calcitem build "
              style="display: block;"
            >
              <span class="material-symbols-rounded">receipt_long</span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор обоев</div>
                <div class="calcdesc">
                  Рассчитает необходимое количество обоев на комнату
                </div>
              </div>
            </a>
            <a href="/walls/" class="calcitem build " style="display: block;">
              <span class="material-symbols-rounded">location_automation</span>
              <div class="calcalltext">
                <div class="calcname">Площадь стен</div>
                <div class="calcdesc">
                  Покажет площадь стен для любой комнаты с учетом дверей и окон.
                </div>
              </div>
            </a>
            <a href="/arc/" class="calcitem geom build" style="display: block;">
              <span class="material-symbols-rounded">wifi_find</span>
              <div class="calcalltext">
                <div class="calcname">Длина дуги</div>
                <div class="calcdesc">
                  Вычислит длину дуги окружности по радиусу и углу или формуле
                  Гюйгенса.
                </div>
              </div>
            </a>
            <a
              href="/body/"
              class="calcitem health sport"
              style="display: block;"
            >
              <span class="material-symbols-rounded">groups</span>
              <div class="calcalltext">
                <div class="calcname">Тип телосложения</div>
                <div class="calcdesc">
                  Определит тип телосложения: эктоморф, эндоморф, мезоморф.
                </div>
              </div>
            </a>
            <a href="/brick/" class="calcitem build " style="display: block;">
              <span class="material-symbols-rounded">nest_multi_room</span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор кирпича</div>
                <div class="calcdesc">
                  Подсчитает количество кирпичей в одном кубическим метре.
                </div>
              </div>
            </a>
            <a href="/glue/" class="calcitem build " style="display: block;">
              <span class="material-symbols-rounded">calendar_view_month</span>
              <div class="calcalltext">
                <div class="calcname">Плиточный клей</div>
                <div class="calcdesc">
                  Покажет расход клея для плитки на квадратные метры помещения.
                </div>
              </div>
            </a>
            <a href="/paint/" class="calcitem build " style="display: block;">
              <span class="material-symbols-rounded">imagesearch_roller</span>
              <div class="calcalltext">
                <div class="calcname">Расход краски</div>
                <div class="calcdesc">
                  Оценит расход краски для стен, потолка или других
                  поверхностей.
                </div>
              </div>
            </a>
            <a
              href="/power/"
              class="calcitem physic build"
              style="display: block;"
            >
              <span class="material-symbols-rounded">power</span>
              <div class="calcalltext">
                <div class="calcname">Мощность тока</div>
                <div class="calcdesc">
                  Рассчитает мощность электрического тока в ваттах.
                </div>
              </div>
            </a>
            <a
              href="/twonumbersless/"
              class="calcitem math finance"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                heap_snapshot_thumbnail
              </span>
              <div class="calcalltext">
                <div class="calcname">На сколько % меньше</div>
                <div class="calcdesc">
                  Определит, на сколько процентов одно число меньше другого.
                </div>
              </div>
            </a>
            <a
              href="/twonumbersmore/"
              class="calcitem math finance"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                heap_snapshot_multiple
              </span>
              <div class="calcalltext">
                <div class="calcname">На сколько % больше</div>
                <div class="calcdesc">
                  Покажет, на сколько процентов одно число больше другого.
                </div>
              </div>
            </a>
            <a
              href="/shoes/"
              class="calcitem fun woman"
              style="display: block;"
            >
              <span class="material-symbols-rounded">footprint</span>
              <div class="calcalltext">
                <div class="calcname">Размер обуви</div>
                <div class="calcdesc">
                  Определит размер обуви по параметрам стопы.
                </div>
              </div>
            </a>
            <a
              href="/space/"
              class="calcitem build geom"
              style="display: block;"
            >
              <span class="material-symbols-rounded">format_shapes</span>
              <div class="calcalltext">
                <div class="calcname">Объем помещения</div>
                <div class="calcdesc">
                  Посчитает объем комнаты или любого помещения.{" "}
                </div>
              </div>
            </a>
            <a
              href="/speed/"
              class="calcitem physic car"
              style="display: block;"
            >
              <span class="material-symbols-rounded">speed</span>
              <div class="calcalltext">
                <div class="calcname">Средняя скорость</div>
                <div class="calcdesc">
                  Рассчитает среднюю скорость автомобиля или бегуна.
                </div>
              </div>
            </a>
            <a
              href="/tank/"
              class="calcitem car geom build"
              style="display: block;"
            >
              <span class="material-symbols-rounded">propane_tank</span>
              <div class="calcalltext">
                <div class="calcname">Объем бака</div>
                <div class="calcdesc">
                  Посчитает объем цилиндрического, прямоугольного или
                  автомобильного бака.
                </div>
              </div>
            </a>
            <a
              href="/numberminuspercent/"
              class="calcitem finance math"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                heap_snapshot_thumbnail
              </span>
              <div class="calcalltext">
                <div class="calcname">Вычесть процент из числа</div>
                <div class="calcdesc">
                  Вычтет любой процент от любого числа.
                </div>
              </div>
            </a>
            <a
              href="/peraddnumber/"
              class="calcitem finance math"
              style="display: block;"
            >
              <span class="material-symbols-rounded">
                heap_snapshot_multiple
              </span>
              <div class="calcalltext">
                <div class="calcname">Добавить процент к числу</div>
                <div class="calcdesc">
                  Прибавит любой процент к любому числу.
                </div>
              </div>
            </a> */}
          <a href="/percent/" class="calcitem finance math">
            <span class="material-symbols-rounded symbol-width">
              <img src="/percent.svg" alt="процент" />
            </span>
            <div class="calcalltext">
              <div class="calcname">Калькулятор процентов</div>
              <div class="calcdesc">
                Произведёт любые действия с числами и процентами.
              </div>
            </div>
          </a>
          {/* <a href="/pernumber/" class="calcitem finance math">
              <span class="material-symbols-rounded">humidity_percentage</span>
              <div class="calcalltext">
                <div class="calcname">Проценты от числа</div>
                <div class="calcdesc">
                  Рассчитает значение процента от любого числа.
                </div>
              </div>
            </a>
            <a href="/cube/" class="calcitem geom ">
              <span class="material-symbols-rounded">deployed_code</span>
              <div class="calcalltext">
                <div class="calcname">Объем куба</div>
                <div class="calcdesc">
                  Определит объем любого кубического предмета.
                </div>
              </div>
            </a>
            <a href="/floor/" class="calcitem build ">
              <span class="material-symbols-rounded">dock_to_bottom</span>
              <div class="calcalltext">
                <div class="calcname">Наливной пол</div>
                <div class="calcdesc">
                  Рассчитает расход смеси для самовыравнивающихся полов.
                </div>
              </div>
            </a>
            <a href="/linoleum/" class="calcitem build ">
              <span class="material-symbols-rounded">background_dot_large</span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор линолеума</div>
                <div class="calcdesc">
                  Определит количество линолеума в рулонах и квадратных метрах.
                </div>
              </div>
            </a>
            <a href="/plaster/" class="calcitem build ">
              <span class="material-symbols-rounded">trolley</span>
              <div class="calcalltext">
                <div class="calcname">Расход штукатурки</div>
                <div class="calcdesc">
                  Покажет расход различных марок гипсовой или бетонной
                  штукатурки.
                </div>
              </div>
            </a>
            <a href="/fractionindegree/" class="calcitem math ">
              <span class="material-symbols-rounded">superscript</span>
              <div class="calcalltext">
                <div class="calcname">Дробь в степень</div>
                <div class="calcdesc">
                  Возведет любую дробь в любую степень.
                </div>
              </div>
            </a>
            <a href="/friction/" class="calcitem physic ">
              <span class="material-symbols-rounded">
                vertical_align_bottom
              </span>
              <div class="calcalltext">
                <div class="calcname">Коэффициент трения</div>
                <div class="calcdesc">
                  Рассчитает коэффициент силы трения поверхности.
                </div>
              </div>
            </a>
            <a href="/logarithm/" class="calcitem math ">
              <span class="material-symbols-rounded">airline_stops</span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор логарифмов</div>
                <div class="calcdesc">
                  Вычислит натуральные, десятичные и другие логарифмы.
                </div>
              </div>
            </a>
            <a href="/ohmlaw/" class="calcitem physic study build">
              <span class="material-symbols-rounded">electrical_services</span>
              <div class="calcalltext">
                <div class="calcname">Закон Ома</div>
                <div class="calcdesc">
                  Посчитает сопротивление, силу тока и напряжение.
                </div>
              </div>
            </a>
            <a href="/parallelepiped/" class="calcitem geom ">
              <span class="material-symbols-rounded">deployed_code</span>
              <div class="calcalltext">
                <div class="calcname">Объем параллелепипеда</div>
                <div class="calcdesc">
                  Рассчитает объем любого параллелепипеда.
                </div>
              </div>
            </a>
            <a href="/pi/" class="calcitem math geom study">
              <span class="material-symbols-rounded">
                format_textdirection_l_to_r
              </span>
              <div class="calcalltext">
                <div class="calcname">Число Пи</div>
                <div class="calcdesc">
                  Покажет число Пи с точностью до нужного количества знаков.
                </div>
              </div>
            </a>
            <a href="/picket/" class="calcitem build ">
              <span class="material-symbols-rounded">outdoor_garden</span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор штакетника</div>
                <div class="calcdesc">
                  Рассчитает необходимое количество штакетника для забора.
                </div>
              </div>
            </a>
            <a href="/scale/" class="calcitem fun study build geom">
              <span class="material-symbols-rounded">zoom_in</span>
              <div class="calcalltext">
                <div class="calcname">Калькулятор масштабов</div>
                <div class="calcdesc">
                  Переведет именованный масштаб на чертеже в реальный и
                  наоборот.
                </div>
              </div>
            </a>
            <a href="/characters/" class="calcitem it study">
              <span class="material-symbols-rounded">text_fields</span>
              <div class="calcalltext">
                <div class="calcname">Количество символов</div>
                <div class="calcdesc">
                  Посчитает количество символов в тексте с пробелами и без.
                </div>
              </div>
            </a>
            <a href="/cubearea/" class="calcitem geom physic">
              <span class="material-symbols-rounded">view_in_ar</span>
              <div class="calcalltext">
                <div class="calcname">Площадь куба</div>
                <div class="calcdesc">
                  Рассчитает онлайн площадь поверхности куба по длине ребер или
                  диагоналям.
                </div>
              </div>
            </a>
            <a href="/euler/" class="calcitem math geom">
              <span class="material-symbols-rounded">e_mobiledata_badge</span>
              <div class="calcalltext">
                <div class="calcname">Числа Эйлера</div>
                <div class="calcdesc">
                  Покажет нужное число знаков после запятой в числе «e» (Эйлера,
                  Непера).
                </div>
              </div>
            </a>
            <a href="/hexagon/" class="calcitem geom ">
              <span class="material-symbols-rounded">hexagon</span>
              <div class="calcalltext">
                <div class="calcname">Площадь шестиугольника</div>
                <div class="calcdesc">
                  Рассчитает площадь равностороннего шестиугольника.
                </div>
              </div>
            </a>
            <a href="/spherearea/" class="calcitem geom ">
              <span class="material-symbols-rounded">sports_baseball</span>
              <div class="calcalltext">
                <div class="calcname">Площадь шара</div>
                <div class="calcdesc">
                  Определит площадь поверхности сферических объектов.
                </div>
              </div>
            </a>
            <a href="/numsys/" class="calcitem it math">
              <span class="material-symbols-rounded">swap_horiz</span>
              <div class="calcalltext">
                <div class="calcname">Cистемы счисления</div>
                <div class="calcdesc">
                  Переводит числа между системами счисления (двоичная,
                  восьмеричная, десятичная и т.д.).
                </div>
              </div>
            </a> */}
        </div>
      </section>

      <Footer />
    </body>
  );
}

export default Home;
