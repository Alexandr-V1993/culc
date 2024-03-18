import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор прибавки процента к числу",
  description:
    "Благодаря нашему калькулятору вам не нужно выполнять расчеты. Написав исходные данные (число, величина процента) и нажав кнопку «Рассчитать», вы мгновенно узнаете результат прибавления процента к числу.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://calcoffee.ru/add-percentage-number"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
