import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Алкогольный калькулятор для водителя. Алкокалькулятор",
  description:
    "Онлайн калькулятор расчета алкоголя в крови и выдыхаемом воздухе, время выведения алкоголя из организма, а так же степень опьянения и сроках отрезвления",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/bac-calculator"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
