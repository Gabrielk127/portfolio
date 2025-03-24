import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gabriel Fernandes",
  description:
    "Portfólio de Desenvolvimento - Gabriel Fernandes | Entre em contato para fazer seu orçamento!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Analytics />
      <body className={`bg-[#1E1E1E] ${poppins}`}>{children}</body>
    </html>
  );
}
