import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: " Документы",
  description:
    "Документы, calcoffee,calcoffee ru,  онлайн-калькуляторы,александр владимирович ,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/doks"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
