import type { Metadata } from "next";

import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Fundación" };

export default function FoundationPage() {
  return <PageShell title="Fundación" />;
}
