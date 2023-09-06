"use client";
import ThemeProvider from "@/contexts/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import "./globals.css";
import { Providers } from "@/lib/providers";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "dashboard default",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
