import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/redux";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cafetería Next.js",
  description: "Cafetería Next.js con App Router y Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-100`}>{children}</body>
      </html>
    </ReduxProvider>
  );
}
