import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней до даты, счетчик дней до даты",
  description:
    "Сколько дней осталось до ожидаемого события можно посчитать с помощью калькулятора событий. Калькулятор высчитывает дни, часы, минуты и секунды.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/until-event-index"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
