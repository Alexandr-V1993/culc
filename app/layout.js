import "./globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Онлайн-калькуляторы: самые простые и удобные",
  description:
    "Калькулятор процентов онлайн. Бесплатный калькулятор для расчета процентов на любую сумму. Узнайте, сколько вы получите или заплатите в зависимости от процентной ставки.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
