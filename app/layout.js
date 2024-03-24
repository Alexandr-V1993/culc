import "./globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Онлайн-калькуляторы: самые простые и удобные",
  description:
    "Онлайн-калькуляторы по различным тематикам: финасовые, валютные, математические, медицинские, строительные, для IT и даже самогонные.",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <meta
        name="8ebdddfd71d4f27e8a3626f550684b3c4ed7ccf9"
        content="8ebdddfd71d4f27e8a3626f550684b3c4ed7ccf9"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
