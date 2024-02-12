import "./globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Онлайн-калькуляторы: самые простые и удобные",
  description:
    "Онлайн-калькуляторы по различным тематикам: финасовые, валютные, математические, медицинские, строительные, для IT и даже самогонные.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
