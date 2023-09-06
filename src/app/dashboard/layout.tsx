"use client";
import ActiveSidebar from "@/components/ActiveSidebar";
import { StateProvider } from "@/contexts/ContextProvider";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

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
        <StateProvider>
          <ThemeProvider>
            <ActiveSidebar>{children}</ActiveSidebar>
          </ThemeProvider>
        </StateProvider>
      </body>
    </html>
  );
}
