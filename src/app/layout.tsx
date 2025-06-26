// FINAL CODE FOR: src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/shared/Header";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BenefitPlus - Local Discounts & Events",
  description: "Connecting members with local discounts, events, and partner offers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header /> 
          <main>{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}