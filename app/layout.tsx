import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Embassy Solutions | Premium Embassy & Consulate Services",
  description:
    "Embassy Solutions is a specialized service provider dedicated to addressing the unique operational needs of foreign embassies and consulates. Construction, IT, Maintenance, Security, and more.",
  keywords: [
    "Embassy Solutions",
    "embassy services",
    "consulate services",
    "diplomatic services",
    "construction",
    "maintenance",
    "security",
    "IT services",
    "chauffeur",
    "South Africa",
    "Pretoria",
  ],
  authors: [{ name: "Embassy Solutions" }],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Embassy Solutions | Premium Embassy & Consulate Services",
    description:
      "Specialized service provider for foreign embassies and consulates. Your trusted partner in diplomatic excellence.",
    url: "https://www.embassysolutions.co.za",
    siteName: "Embassy Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}