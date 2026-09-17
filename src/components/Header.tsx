"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import { mainNavigation, type NavigationItem } from "@/lib/navigation";

const primaryNavigation = mainNavigation.filter(
  (item) => item.emphasis !== "primary",
);
const collaborationLink = mainNavigation.find(
  (item) => item.emphasis === "primary",
);

function normalizePath(path: string) {
  if (path === "/") {
    return path;
  }

  return `${path.replace(/\/+$/, "")}/`;
}

function isActivePath(pathname: string, href: NavigationItem["href"]) {
  const currentPath = normalizePath(pathname);
  const targetPath = normalizePath(href);

  return currentPath === targetPath || currentPath.startsWith(targetPath);
}

export default function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  function openMobileMenu() {
    dialogRef.current?.showModal();
    setMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    dialogRef.current?.close();
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>

      <nav
        aria-label="Navegación principal"
        className="section-container flex min-h-20 items-center justify-between gap-6"
      >
        <BrandLink />

        <div className="hidden items-center gap-5 xl:flex">
          {primaryNavigation.map((item) => (
            <NavigationLink key={item.href} item={item} pathname={pathname} />
          ))}
        </div>

        <div className="hidden xl:block">
          {collaborationLink ? (
            <Link
              href={collaborationLink.href}
              aria-current={
                isActivePath(pathname, collaborationLink.href) ? "page" : undefined
              }
              className="btn-primary"
            >
              {collaborationLink.label}
            </Link>
          ) : null}
        </div>

        <button
          type="button"
          aria-label="Abrir el menú principal"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={openMobileMenu}
          className="inline-flex min-h-12 items-center gap-2 rounded-control border border-border px-3 text-sm font-bold text-foreground hover:bg-surface xl:hidden"
        >
          <span aria-hidden="true" className="grid gap-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
          Menú
        </button>
      </nav>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-labelledby="mobile-navigation-title"
        onClose={() => setMobileMenuOpen(false)}
        className="mobile-menu fixed inset-y-0 right-0 left-auto m-0 h-dvh w-full max-w-sm overflow-y-auto border-0 border-l border-border bg-background p-6 text-foreground shadow-2xl shadow-foreground/10 xl:hidden"
      >
        <div className="flex items-center justify-between gap-4">
          <h2 id="mobile-navigation-title" className="text-sm font-bold">
            Navegación
          </h2>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="inline-flex min-h-12 items-center justify-center rounded-control border border-border px-3 text-sm font-bold hover:bg-surface"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-2">
          {mainNavigation.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={closeMobileMenu}
                className={
                  item.emphasis === "primary"
                    ? "btn-primary mt-4 justify-center"
                    : "flex min-h-12 items-center rounded-control px-3 py-2 text-lg font-semibold text-foreground hover:bg-surface aria-[current=page]:bg-soft-magenta/45"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </dialog>
    </header>
  );
}

function BrandLink() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-12 max-w-56 flex-col justify-center text-foreground no-underline"
    >
      <span className="text-[0.6875rem] leading-none font-bold tracking-[0.14em] uppercase">
        Fundación
      </span>
      <span className="mt-1 font-editorial text-lg leading-none font-semibold">
        Vivir un Buen Morir
      </span>
    </Link>
  );
}

function NavigationLink({
  item,
  pathname,
}: {
  item: NavigationItem;
  pathname: string;
}) {
  const active = isActivePath(pathname, item.href);

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      data-active={active ? "true" : undefined}
      className="nav-link"
    >
      {item.label}
    </Link>
  );
}
