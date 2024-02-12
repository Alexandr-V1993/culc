import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор абсолютного спирта и отбора голов | В спирте-сырце",
  description:
    "Калькулятор отбора голов позволит определить объем вредных компонентов в верхней части сырья и объем чистого спирта в полученном дистилляте. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/head-selection"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
