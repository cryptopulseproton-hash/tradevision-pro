import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { MarketProvider } from "../context/MarketContext";
import { PortfolioProvider } from "../context/PortfolioContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TradeVision Pro",
  description: "Professional Trading Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <MarketProvider>
          <PortfolioProvider>
            {children}
          </PortfolioProvider>
        </MarketProvider>
      </body>
    </html>
  );
}
