import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingActionBar } from "@/components/floating-action-bar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "SP Accessories | Better In Your Life",
    template: "%s | SP Accessories",
  },
  description:
    "Your trusted source for quality phone accessories in Sabah, Malaysia. Phone cases, screen protectors, charging cables, power banks, and more across 3 locations in Kota Kinabalu.",
  keywords: [
    "phone accessories",
    "Kota Kinabalu",
    "Sabah",
    "phone cases",
    "screen protectors",
    "charging cables",
    "power banks",
    "Malaysia",
  ],
  openGraph: {
    title: "SP Accessories | Smart Phone Accessories Sdn Bhd",
    description:
      "Quality phone accessories across 3 branches in Sabah, Malaysia.",
    type: "website",
    locale: "en_MY",
  },
};

export const viewport: Viewport = {
  themeColor: "#c41e2a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased red-slash-bg`}>
        <LanguageProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <FloatingActionBar />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
