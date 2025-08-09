import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import portfolio from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: portfolio?.name ? `${portfolio.name} · Portfolio` : "Portfolio",
  description: "Minimal, config-driven portfolio built with Next.js + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
