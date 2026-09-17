import type { Metadata } from "next";

import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Formación online" };

export default function OnlineTrainingPage() {
  return <PageShell title="Formación online" />;
}
