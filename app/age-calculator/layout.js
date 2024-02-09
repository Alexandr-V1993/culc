import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор возраста онлайн | Расчитать количества лет на дату ",
  description:
    "Этот бесплатный калькулятор возраста рассчитывает возраст в годах, месяцах, неделях, днях, часах, минутах, секундах. Идеально подходит для воспоминаний о прошлом или планирования будущего.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="canonical" href={"https://calcoffee.ru/age-calculator"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
