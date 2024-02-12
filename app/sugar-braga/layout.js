import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор расчета Сахарной Браги | По Гидромодулю",
  description:
    "Определите оптимальное содержание алкоголя в браге, учитывая объем воды и вес сахара. Онлайн-калькулятор точно определит необходимые пропорции для создания идеальной смеси сахара и воды в вашей браге!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/sugar-braga"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
