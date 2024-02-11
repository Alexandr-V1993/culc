import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор замены сахара Глюкозой | Фруктозой &amp; Декстрозой",
  description:
    "Расчет поможет определить, сколько вам потребуется глюкозы, чтобы без потерь крепости напитка заменить сахар глюкозой придав ему полезных свойств.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://calcoffee.ru/alcohol-calculator/replacement-sugar"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
