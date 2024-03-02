import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор Микрозаймов для точных рассчетов процентов онлайн",
  description:
    "Калькулятор микрозаймов поможет вам онлайн рассчитать проценты по договору займа, узнать сумму платежа и переплаты. Получите точные данные для осознанных финансовых решений.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/microloan-calculator"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
