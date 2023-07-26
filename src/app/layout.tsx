import SideBar from "@/components/SideBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  const activeManu = {};
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* SIDEBAR */}
        {activeManu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <SideBar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <SideBar />
          </div>
        )}

        {/* HEADER */}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full 
        ${activeManu ? "md:ml-72" : "flex-2"}
        `}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <h1>navbar</h1>
          </div>
        </div>

        {/* {PAGE} */}
        {children}
      </body>
    </html>
  );
}
