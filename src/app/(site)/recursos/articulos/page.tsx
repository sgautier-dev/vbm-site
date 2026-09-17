import type { Metadata } from "next";

import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Artículos" };

export default function ArticlesPage() {
  return <PageShell title="Artículos" />;
}
