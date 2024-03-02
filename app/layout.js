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
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
