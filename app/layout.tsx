import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Films",
  description: "Kinopoisk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={robotoFlex.className}>
      <body className="bg-[#191919] flex flex-row justify-start w-full text-[#e8e8e8]">
        <Sidebar />
        <main className="relative w-full pt-40 pb-10 pl-9 pr-9 ">
          <Header />
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
