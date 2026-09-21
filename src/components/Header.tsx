"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
  mainNavigation,
  type NavigationItem,
} from "@/lib/navigation";

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

function isExactPath(pathname: string, href: NavigationItem["href"]) {
  return normalizePath(pathname) === normalizePath(href);
}

export default function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const desktopTrainingRef = useRef<HTMLDivElement>(null);
  const desktopTrainingToggleRef = useRef<HTMLButtonElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(false);
  const [desktopTrainingOpen, setDesktopTrainingOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!desktopTrainingOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !desktopTrainingRef.current?.contains(event.target)
      ) {
        setDesktopTrainingOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [desktopTrainingOpen]);

  function openMobileMenu() {
    const trainingItem = mainNavigation.find((item) => item.children);

    setDesktopTrainingOpen(false);
    setMobileTrainingOpen(
      trainingItem ? isActivePath(pathname, trainingItem.href) : false,
    );
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
          {primaryNavigation.map((item) =>
            item.children ? (
              <div
                key={item.href}
                ref={desktopTrainingRef}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setDesktopTrainingOpen(false);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape" && desktopTrainingOpen) {
                    event.preventDefault();
                    event.stopPropagation();
                    setDesktopTrainingOpen(false);
                    desktopTrainingToggleRef.current?.focus();
                  }
                }}
                className="relative flex items-center gap-0.5"
              >
                <NavigationLink item={item} pathname={pathname} />
                <button
                  ref={desktopTrainingToggleRef}
                  type="button"
                  aria-label={
                    desktopTrainingOpen
                      ? "Cerrar opciones de Formación"
                      : "Abrir opciones de Formación"
                  }
                  aria-expanded={desktopTrainingOpen}
                  aria-controls="desktop-training-navigation"
                  onClick={() => setDesktopTrainingOpen((open) => !open)}
                  className="inline-flex size-11 items-center justify-center rounded-control text-foreground hover:bg-surface"
                >
                  <Chevron open={desktopTrainingOpen} />
                </button>

                <div
                  id="desktop-training-navigation"
                  hidden={!desktopTrainingOpen}
                  className="absolute top-[calc(100%+0.5rem)] left-0 z-50 w-64 rounded-panel border border-border bg-background p-2 shadow-sm shadow-foreground/10"
                >
                  <ul role="list">
                    {item.children.map((child) => {
                      const exact = isExactPath(pathname, child.href);

                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={exact ? "page" : undefined}
                            data-active={exact ? "true" : undefined}
                            onClick={() => setDesktopTrainingOpen(false)}
                            className="flex min-h-11 items-center rounded-control px-3 py-2 text-sm font-semibold text-foreground hover:bg-surface data-[active=true]:bg-soft-magenta/45 data-[active=true]:text-action-hover"
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <NavigationLink key={item.href} item={item} pathname={pathname} />
            ),
          )}
        </div>

        <div className="hidden xl:block">
          {collaborationLink ? (
            <Link
              href={collaborationLink.href}
              aria-current={
                isExactPath(pathname, collaborationLink.href) ? "page" : undefined
              }
              data-active={
                isActivePath(pathname, collaborationLink.href) ? "true" : undefined
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
        onClose={() => {
          setMobileMenuOpen(false);
          setMobileTrainingOpen(false);
        }}
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
            const exact = isExactPath(pathname, item.href);

            if (item.children) {
              return (
                <div key={item.href}>
                  <button
                    type="button"
                    aria-expanded={mobileTrainingOpen}
                    aria-controls="mobile-training-navigation"
                    data-active={active ? "true" : undefined}
                    onClick={() => setMobileTrainingOpen((open) => !open)}
                    className="flex min-h-12 w-full items-center justify-between rounded-control px-3 py-2 text-left text-lg font-semibold text-foreground hover:bg-surface data-[active=true]:bg-soft-magenta/45"
                  >
                    {item.label}
                    <Chevron open={mobileTrainingOpen} />
                  </button>

                  <ul
                    id="mobile-training-navigation"
                    hidden={!mobileTrainingOpen}
                    className="mt-1 ml-3 space-y-1 border-l border-border pl-3"
                    role="list"
                  >
                    {item.children.map((child) => {
                      const childExact = isExactPath(pathname, child.href);

                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={childExact ? "page" : undefined}
                            data-active={childExact ? "true" : undefined}
                            onClick={closeMobileMenu}
                            className="flex min-h-11 items-center rounded-control px-3 py-2 text-base font-semibold text-muted hover:bg-surface hover:text-foreground data-[active=true]:bg-surface data-[active=true]:text-action-hover"
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={exact ? "page" : undefined}
                data-active={active ? "true" : undefined}
                onClick={closeMobileMenu}
                className={
                  item.emphasis === "primary"
                    ? "btn-primary mt-4 justify-center"
                    : "flex min-h-12 items-center rounded-control px-3 py-2 text-lg font-semibold text-foreground hover:bg-surface data-[active=true]:bg-soft-magenta/45"
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
  const exact = isExactPath(pathname, item.href);

  return (
    <Link
      href={item.href}
      aria-current={exact ? "page" : undefined}
      data-active={active ? "true" : undefined}
      className="nav-link"
    >
      {item.label}
    </Link>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`block size-2.5 shrink-0 border-r-2 border-b-2 border-current transition-transform ${
        open ? "-rotate-[135deg]" : "rotate-45"
      }`}
    />
  );
}
