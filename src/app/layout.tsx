import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCI Serious Games Dashboard",
  description: "Interactive dashboard for evaluating serious games for MCI assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}>
        <Header />
        <main className="container mx-auto px-4 md:px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
