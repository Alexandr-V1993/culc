import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор самогонщика Онлайн | Расчет Самогона",
  description:
    "Алкогольные калькуляторы самогонщика для всех этапов перегонки, помогут вам: разбавить спирт, рассчитать сахарную брагу, вычислить крепость продукта на выходе.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="canonical" href={"http://calcoffee.ru/alcohol-calculator"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
