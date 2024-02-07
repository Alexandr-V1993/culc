"use client";
import TopForm from "../components/TopForm";
import HeaderModal from "../components/HeaderModal";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";
import Contents from "../components/Contents";
import "./Ndfl.css";
function Imt() {
  const [selectSumm, setSelectSumm] = useState("before");
  const [selectSummProcent, setSelectSummProcent] = useState(13);
  const [number, setNumber] = useState("");
  const obj = {
    amount: Number(number),
    mode: selectSumm,
    taxRate: selectSummProcent,
  };

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор"}
        description={
          "Рассчитайте онлайн НДФЛ от суммы на руки или полной зарплаты по разным ставкам."
        }
        span={"НДФЛ"}
      >
        <Form
          obj={obj}
          url={"https://calcline.ru/api/calculate/pit"}
          formTitle={"Расчет НДФЛ"}
          ndfl={"НДФЛ"}
          summaOblog={"Сумма после налогооблажения"}
        >
          <label class="row-2 van">
            <span>Налогообложения</span>
            <div class="select">
              <select
                name="age"
                id="actionnds"
                class="input"
                value={selectSumm}
                onChange={(e) => setSelectSumm(e.target.value)}
              >
                <option value="before">Сумма до налогообложения</option>
                <option value="after">Сумма после налогообложения</option>
              </select>
            </div>
          </label>
          <label class="row-2 two">
            <span>Ставка налога</span>
            <div class="select">
              <select
                name="age"
                id="actionnds"
                class="input"
                onChange={(e) => setSelectSummProcent(e.target.value)}
              >
                <option value="13">Подоходный налог(13% - 15%)</option>
                <option value="13" selected>
                  Налог на дивиденды (13%)
                </option>
                <option value="30">НДФЛ для нерезидентов(30%)</option>
                <option value="35">Налог на выиграши(35%)</option>
              </select>
            </div>
          </label>

          <label class="numrange row-1">
            <span>Сумма</span>
            <input
              type="number"
              class="input"
              id="nprice"
              min="0"
              max="100000"
              onChange={(e) => setNumber(e.target.value)}
            />
            <div class="notation">р.</div>
          </label>
        </Form>
        <Contents>
          {" "}
          <h2 id="1">Что такое НДФЛ или подоходный налог?</h2>
          <p class="opredelenie">
            <strong>НДФЛ</strong> — налог на доход физических лиц или подоходный
            налог, им облагаются личные доходы граждан, получаемые в виде денег,
            в натуральной форме или в виде материальной выгоды.
          </p>
          <p> </p>
          <p>
            В Российской Федерации действует пять различных ставок НДФЛ: 9%,
            13%, 15%, 30%, 35%. Ставка 9% применяется к редким случаям, таким
            как дивиденды, полученные до 1 января 2015 года. Широко используемая
            ставка 13% облагает большинство доходов, включая заработную плату и
            другие вознаграждения за труд, если годовой доход не превышает 5
            миллионов рублей. В случае превышения этой суммы применяется ставка
            15%.
          </p>
          <p>
            Ставка 30% применяется к доходам от ценных бумаг в определенных
            условиях, облагает доходы нерезидентов. Максимальная ставка 35%
            применяется, например, к выигрышам в лотереях или конкурсах, если
            сумма превышает 4000 рублей.
          </p>
          <p>
            Важно отметить, что НДФЛ рассчитывается отдельно для каждой выплаты,
            и вычеты не всегда применяются. Этот налог имеет свои особенности и
            влияет на финансовое состояние граждан, учитывая разнообразные
            источники их доходов.
          </p>
          <h3>Ставка 9%</h3>
          <p>
            Это самая редко применяемая ставка, и по ней рассчитывают налог с
            доходов от прошлых лет, в частности:
          </p>
          <ul>
            <li>дивидендов, полученных до 1 января 2015 года;</li>
            <li>
              процентов по облигациям с ипотечным покрытием, эмитированным до 1
              января 2007 года;
            </li>
            <li>
              доверительного управления ипотечным покрытием по сертификатам,
              выданным до 1 января 2007 года.
            </li>
          </ul>
          <h3>Ставка 13%</h3>
          <p>
            Большинство доходов облагается именно по ставке НДФЛ в 13%. Налог на
            доходы физических лиц по этой ставке считается:
          </p>
          <ul>
            <li>
              с доходов, полученных от трудовой деятельности резидента РФ – с
              заработной платы и иных вознаграждений за труд при доходе до 5 млн
              рублей в год;
            </li>
            <li>
              с доходов от трудовой деятельности высококвалифицированного
              специалиста – нерезидента (иностранца) при доходе до 5 млн рублей
              в год;
            </li>
            <li>
              с доходов членов экипажей судов, плавающих (или ходящих) под
              флагом РФ,&nbsp;участников госпрограммы по добровольному
              переселению в РФ соотечественников, проживающих за рубежом;
            </li>
            <li>
              с дивидендов для физических лиц-резидентов (при доходе до 5 млн
              рублей в год).
            </li>
          </ul>
          <h3>Ставка 15%</h3>
          <p>
            Действительно, с 2022 года действует ставка НДФЛ в размере 15% для
            тех, кто зарабатывает более пяти миллионов рублей в год нарастающим
            итогом с начала года. Но облагается по ставке 15% не вся сумма, а
            сумма свыше 5 млн рублей. Предельная сумма в 5 млн рублей, с
            превышения которой нужно платить НДФЛ по повышенной ставке,
            рассчитывается отдельно по каждой налоговой базе на основании
            п.&nbsp;1 и&nbsp;п.&nbsp;3.1 ст.&nbsp;224&nbsp;НК РФ.
          </p>
          <p>
            Например, если вы зарабатываете по одному миллиону рублей в месяц
            (обязательно свяжитесь со мной или купите мой курс), то ваш годовой
            доход будет равен 12 млн рублей. За 5 млн вы заплатите налог в 13%,
            а за 7 млн – в 15%. То есть:
          </p>
          <h3>Ставка 30%</h3>
          <ul>
            <li>
              доходы по ценным бумагам учитывают на счете депо иностранного
              номинального держателя, иностранного уполномоченного держателя или
              на счете депо депозитарных программ;
            </li>
            <li>
              получатель дохода не предоставил налоговому агенту информацию в
              соответствии с требованиями статьи&nbsp;214.6 НК РФ
            </li>
          </ul>
          <p>
            По ставке НДФЛ 30 % облагаются доходы нерезидентов. При условии, что
            эти доходы не подпадают под ставки 13 или 15 процентов, как в случае
            с высококвалифицированными иностранными специалистами или при
            выплате иностранцам дивидендов от российских фирм. Также важно
            учесть, что НДФЛ рассчитывают по каждой выплате отдельно, а вычеты
            не применяются.
          </p>
          <h3>Ставка 35%</h3>
          <p>
            35% – это максимально возможная ставка налога на доходы физлиц в
            России. Как и со ставкой 30%, налог рассчитывают по каждой выплате
            отдельно, вычеты не применяются. Налог на доходы физических лиц по
            этой ставке рассчитывается с:
          </p>
          <ul>
            <li>
              выигрышей в лотереях, конкурсах и тому подобного от суммы более 4
              000 (четырёх тысяч) рублей;
            </li>
            <li>
              суммы экономии на процентах при получении займа в части превышения
              установленных размеров;
            </li>
            <li>
              процентов по вкладам в банках в части превышения установленных
              размеров;
            </li>
            <li>
              платы за использование денег пайщиков, процентов за пользование
              сельскохозяйственным кредитом, поученным в форме займа от членов
              кооператива, в части превышения установленных размеров.
            </li>
          </ul>
          <p>
            Чаще всего, это ставка касается именно первого варианта, связанного
            с лотереями и прочими конкурсами.
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Imt;
