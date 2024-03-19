import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор высчета процента из числа",
  description:
    "Наш онлайн калькулятор выполняет функцию вычитания процентов из числа.Отнять проценты о числа можно, сначала рассчитав необходимый процент от этого числа затем вычесть получившийся результат из числа.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://calcoffee.ru/percentage-from-number"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
