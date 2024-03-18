import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор процента от числа",
  description:
    "Онлайн калькулятор процента от числа. выполняет операции с процентами: нахождение процента от данного числа, расчет процентного соотношения между числами, прибавление или вычитание процента от заданного числа.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.rupercent-of-number"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
