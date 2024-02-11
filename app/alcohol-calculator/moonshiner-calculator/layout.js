import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Калькулятор смешивания спиртов",
  description:
    "Калькулятор смешивания спиртов вычислит крепость самогона, полученного при смешивании двух спиртов разной крепости.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://calcoffee.ru/alcohol-calculator/moonshiner-calculator"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
