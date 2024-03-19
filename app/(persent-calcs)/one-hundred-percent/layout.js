import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Найти 100 процентов",
  description:
    "Калькулятор для вычисления 100 процентов, если известно что определенное число это N процентов",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/one-hundred-percent"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
