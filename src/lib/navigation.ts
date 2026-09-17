export type NavigationItem = {
  label: string;
  href: `/${string}` | "/";
  emphasis?: "primary";
};

export const mainNavigation: readonly NavigationItem[] = [
  { label: "Fundación", href: "/fundacion/" },
  { label: "Formación", href: "/formacion/" },
  { label: "Acompañamiento", href: "/acompanamiento/" },
  { label: "Recursos", href: "/recursos/" },
  { label: "ZenCare", href: "/zencare/" },
  { label: "Colabora", href: "/colabora/", emphasis: "primary" },
] as const;

export const footerNavigation = {
  main: mainNavigation,
  training: [
    { label: "Presencial", href: "/formacion/presencial/" },
    { label: "Online", href: "/formacion/online/" },
    { label: "Entidades", href: "/formacion/entidades/" },
    { label: "Retiros", href: "/formacion/retiros/" },
  ],
  resources: [
    { label: "Agenda", href: "/recursos/agenda/" },
    { label: "Artículos", href: "/recursos/articulos/" },
    { label: "Vídeos", href: "/recursos/videos/" },
  ],
  contact: [{ label: "Contacto", href: "/contacto/" }],
} as const satisfies Record<string, readonly NavigationItem[]>;
