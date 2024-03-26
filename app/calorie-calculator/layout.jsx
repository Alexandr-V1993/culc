import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор калорий: рассчитайте суточное потребление калорий",
  description:
    "Калькулятор калорий позволяет рассчитать суточное потребление белков, жиров и углеводов, необходимое каждый день для поддержания, снижения или набора веса. Формула Харриса-Бенедикта и Миффлина-Сан Жеора",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/calorie-calculator"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
