import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PakRide Car Rentals — Rent a Car in Pakistan",
    template: "%s — PakRide Car Rentals",
  },
  description:
    "Book reliable rental cars in Karachi, Lahore, Islamabad/Rawalpindi and more. Transparent PKR pricing, flexible pickup, and quick booking via WhatsApp.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "PakRide Car Rentals — Rent a Car in Pakistan",
    description:
      "Browse cars, compare PKR rates, and request booking in minutes. Available in major cities across Pakistan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
