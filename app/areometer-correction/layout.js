import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор коррекции показаний Ареометра | По Температуре",
  description:
    "Калькулятор определит фактическую крепость дистиллята с поправкой на температуру образца. Учтите температурные изменения для точных результатов. Бесплатный онлайн инструмент.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/areometer-correction"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
