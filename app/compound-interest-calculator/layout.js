import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор сложного процента | Расчет с пополнением",
  description:
    "Используйте наш калькулятор сложных процентов, чтобы узнать, как ваши сбережения или инвестиции могут вырасти со временем, используя силу сложных процентов.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://calcoffee.ru/compound-interest-calculator"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
