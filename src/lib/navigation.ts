export type NavigationItem = {
  label: string;
  href: `/${string}` | "/";
  emphasis?: "primary";
};

export type MainNavigationItem = NavigationItem & {
  children?: readonly NavigationItem[];
};

export const trainingNavigation: readonly NavigationItem[] = [
  { label: "Formación VBM", href: "/formacion/" },
  { label: "Presencial", href: "/formacion/presencial/" },
  { label: "Online", href: "/formacion/online/" },
  { label: "Para entidades", href: "/formacion/entidades/" },
  { label: "Retiros VBM", href: "/formacion/retiros/" },
] as const;

export const mainNavigation: readonly MainNavigationItem[] = [
  { label: "Fundación", href: "/fundacion/" },
  {
    label: "Formación",
    href: "/formacion/",
    children: trainingNavigation,
  },
  { label: "Acompañamiento", href: "/acompanamiento/" },
  { label: "Recursos", href: "/recursos/" },
  { label: "ZenCare", href: "/zencare/" },
  { label: "Colabora", href: "/colabora/", emphasis: "primary" },
] as const;

export const footerNavigation = {
  main: mainNavigation,
  training: trainingNavigation.slice(1),
  resources: [
    { label: "Agenda", href: "/recursos/agenda/" },
    { label: "Artículos", href: "/recursos/articulos/" },
    { label: "Vídeos", href: "/recursos/videos/" },
  ],
  contact: [{ label: "Contacto", href: "/contacto/" }],
} as const satisfies Record<string, readonly NavigationItem[]>;
