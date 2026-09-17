import type { Metadata } from "next";
import { Cormorant_SC, Figtree } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const cormorantSc = Cormorant_SC({
  variable: "--font-cormorant-sc",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vivirunbuenmorir.es"),
  title: {
    default: "Fundación Vivir un Buen Morir",
    template: "%s | Fundación Vivir un Buen Morir",
  },
  applicationName: "Fundación Vivir un Buen Morir",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={`${figtree.variable} ${cormorantSc.variable}`}>
      <body>{children}</body>
    </html>
  );
}
