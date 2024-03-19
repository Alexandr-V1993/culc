import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор расчета процентов одного числа от другого",
  description:
    "Бесплатный онлайн калькулятор поможет рассчитать сколько процентов составляет одно число от другого по формуле: Первое число / Второе число * 100%.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/number-of-number"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
