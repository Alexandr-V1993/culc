import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сумма прописью",
  description:
    "Переведите сумму, выраженную цифрами, в текстовый формат, обеспечивая правильное описание для включения в договоры и иные юридические документы.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="canonical" href={"http://localhost:3000/summapro"} />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
