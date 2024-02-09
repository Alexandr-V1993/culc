import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор НДФЛ | Налоговый калькулятор ",
  description:
    "Онлайн расчет налога на доходы физических лиц (НДФЛ) от суммы на руки или полной зарплаты по различным ставкам, действующим с 2022 по 2024 год: 9%, 13%, 15%, 30%, 35%. Получите точные результаты в несколько кликов!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="canonical" href={"http://calcoffee.ru/ndfl"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
