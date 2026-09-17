import type { Metadata } from "next";

import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Formación" };

export default function TrainingPage() {
  return <PageShell title="Formación" />;
}
