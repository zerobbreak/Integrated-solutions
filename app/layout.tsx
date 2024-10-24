import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { robo } from "./fonts/font";
import Navbar from "@/components/shared/NavMenu";
import Footer from "@/components/shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Synconex",
  description: "Synchronized Connectivity, Seamless Engagement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={` ${robo.className} ${geistSans.variable}  antialiased`}
      >
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
