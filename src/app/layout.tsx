import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PoolProvider } from "@/context/useBitcoinContext";
import { MetaMaskContextProvider } from "@/context/useMetaMask";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Speed",
  description: "Original or Nothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MetaMaskContextProvider>
          <PoolProvider>
            {children}
          </PoolProvider>
        </MetaMaskContextProvider>

      </body>
    </html>
  );
}