import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "На сколько процентов одно число больше другого",
  description:
    "Калькулятор для вычисления на сколько одно число больше другого в процентах или на сколько процентов увеличилось число.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://calcoffee.ru/percentage-number-greater"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
