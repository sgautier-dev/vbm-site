import type { Metadata } from "next";

import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactPage() {
  return <PageShell title="Contacto" />;
}
