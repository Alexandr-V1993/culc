import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "На сколько процентов одно число меньше другого",
  description:
    "Калькулятор для вычисления на сколько одно число меньше другого в процентах или на сколько процентов уменьшилось число",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://calcoffee.ru/percentage-number-less"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
