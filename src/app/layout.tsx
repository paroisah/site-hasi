import type { Metadata } from "next";
import { Caveat, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "700"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hasi — Consultoria Estratégica de Conteúdo",
  description:
    "Conteúdo que transforma percepção em valor. Para marcas do universo feminino que querem ser vistas, lembradas e escolhidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${caveat.variable} ${nunito.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
