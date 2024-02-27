import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор второй перегонки спирта сырца и отбора голов и хвостов",
  description:
    "Точный расчет отбора голов и хвостов при второй перегонке. Оптимизируйте процесс дробной перегонки спирта сырца с помощью нашего калькулятора.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://calcoffee.ru/second-fractional-distillation"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
