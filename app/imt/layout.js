import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор ИМТ | Определите свой индекс массы тела ",
  description:
    "Определите, соответствует ли ваш вес норме, недостаточен ли он или, возможно, есть признаки ожирения. Адаптировано для всех возрастов и полов: мужчин, женщин, подростков и детей. Узнайте, как поддерживать здоровый вес!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="canonical" href={"http://calcoffee.ru/imt"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
