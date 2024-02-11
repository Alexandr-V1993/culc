import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор процентов | Начислить и Выделить НДС",
  description:
    "Онлайн калькулятор процентов.Вычислите онлайн разницу в процентах между двумя числами, определите, насколько одно число превосходит или уступает другому, а также определите, какой процент составляет одно число от другого. Произведите прибавление или вычитание процента от числа.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/percent"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
