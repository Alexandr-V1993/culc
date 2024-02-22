import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор скидок онлайн | Рассчитать цену и процент скидки ",
  description:
    "Онлайн-калькулятор для определения окончательной цены после скидки, сэкономленной суммы или первоначальной цены до скидки, связанной с покупкой со скидкой.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/discount-calculator"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
