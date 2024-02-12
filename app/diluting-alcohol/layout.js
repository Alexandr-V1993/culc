import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор разбавления спирта водой",
  description:
    "Легко разбавляйте домашние спиртные напитки водой для получения идеальной смеси. Добейтесь идеального содержания алкоголя без особых усилий. Оптимизируйте процесс приготовления самогона с помощью нашего онлайн-калькулятора!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/diluting-alcohol"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
