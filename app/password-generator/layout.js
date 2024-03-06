import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Генератор Паролей | Онлайн & Бесплатно",
  description:
    "Генератор паролей онлайн. Создай надёжный пароль с помощью нашего онлайн генератора. Защититесь от угроз безопасности",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="canonical" href={"http://calcoffee.ru/password-generator"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
