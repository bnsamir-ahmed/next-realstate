import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./navFooter/Header";
import Footer from "./footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Aaaqar",
  description: "real state",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
