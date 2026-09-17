import type { Metadata } from "next";

import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Recursos" };

export default function ResourcesPage() {
  return <PageShell title="Recursos" />;
}
