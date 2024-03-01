import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор дней | Расчет дней между датами, рабочих или отпуска",
  description:
    "Калькулятор дней и дат: расчитайте количество дней, рабочих дней, недель, месяцев между датами или добавьте/вычтите дни от текущей даты. Планируйте своё время эффективно с калькулятором дат.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/date-calculator"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
