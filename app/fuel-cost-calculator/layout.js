import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title:
    "Калькулятор расхода топлива | Оптимизируйте расходы на топливо онлайн",
  description:
    "Калькулятор расхода топлива: узнайте точное потребление и оптимизируйте затраты на топливо онлайн!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/fuel-cost-calculator"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
