import Navbar from "@/components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Creatine Mongolia",
  description: "Америк чанартай фитнесс нэмэлт тэжээл",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
