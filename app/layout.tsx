import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Smart Phone Accessories Sdn Bhd | Better In Your Life",
    template: "%s | Smart Phone Accessories",
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
    title: "Smart Phone Accessories Sdn Bhd",
    description:
      "Quality phone accessories across 3 branches in Sabah, Malaysia.",
    type: "website",
    locale: "en_MY",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a56db",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
