import Link from "next/link";

import { footerNavigation } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex flex-col text-foreground">
              <span className="text-xs leading-none font-bold tracking-[0.14em] uppercase">
                Fundación
              </span>
              <span className="mt-2 font-editorial text-2xl leading-none font-semibold">
                Vivir un Buen Morir
              </span>
            </Link>
          </div>

          <FooterColumn title="Fundación VBM" items={footerNavigation.main} />
          <FooterColumn title="Formación" items={footerNavigation.training} />
          <FooterColumn
            title="Recursos y contacto"
            items={[...footerNavigation.resources, ...footerNavigation.contact]}
          />
        </div>

        <p className="mt-10 border-t border-border pt-6 text-sm text-muted">
          © {new Date().getFullYear()} Fundación Vivir un Buen Morir
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; href: `/${string}` | "/" }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-bold text-foreground">{title}</h2>
      <ul className="mt-4 space-y-2" role="list">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex min-h-11 items-center text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
