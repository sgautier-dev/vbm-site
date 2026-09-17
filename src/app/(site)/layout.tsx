import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
