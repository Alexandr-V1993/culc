import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор НДС | Расчет процентов онлайн",
  description:
    "Онлайн Калькулятор НДС поможет вам быстро рассчитать налог на добавленную стоимость. Введите сумму без НДС, и он выдаст результат в цифрах и прописью. Ставки НДС: 0%, 10%, 20% .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="canonical" href={"http://calcoffee.ru/nds"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
