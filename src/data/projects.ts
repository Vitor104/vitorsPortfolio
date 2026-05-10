import type { Locale } from "../i18n/types";

export type StackTag =
  | "React"
  | "Node"
  | "Python"
  | "Supabase"
  | "Vite"
  | "TypeScript"
  | "Storybook"
  | "Tailwind";

export type ProjectCopy = {
  title: string;
  tagline: string;
  description: string;
};

export type Project = {
  id: string;
  url: string;
  image: string;
  year: number;
  stack: StackTag[];
  copy: Record<Locale, ProjectCopy>;
};

export const PROJECTS: readonly Project[] = [
  {
    id: "pulse-dashboard",
    url: "https://example.com/pulse",
    image: "/projects/pulse.svg",
    year: 2025,
    stack: ["React", "TypeScript", "Node"],
    copy: {
      pt: {
        title: "Pulse Analytics",
        tagline: "Painel operacional em tempo quase real",
        description:
          "SPA focada em leitura rápida de KPIs, filtros compartilháveis por URL e camada de dados estática para demos.",
      },
      en: {
        title: "Pulse Analytics",
        tagline: "Near real-time operations dashboard",
        description:
          "SPA optimized for fast KPI scanning, URL-shareable filters, and a static data layer for demos.",
      },
      fr: {
        title: "Pulse Analytics",
        tagline: "Tableau opérationnel en quasi temps réel",
        description:
          "SPA orientée lecture rapide des KPI, filtres partageables par URL et couche de données statique pour les démos.",
      },
      es: {
        title: "Pulse Analytics",
        tagline: "Panel operativo casi en tiempo real",
        description:
          "SPA pensada para leer KPIs al vuelo, filtros compartibles por URL y capa de datos estática para demos.",
      },
      it: {
        title: "Pulse Analytics",
        tagline: "Dashboard operativo quasi in tempo reale",
        description:
          "SPA per lettura rapida dei KPI, filtri condivisibili via URL e layer dati statico per le demo.",
      },
    },
  },
  {
    id: "atlas-docs",
    url: "https://example.com/atlas",
    image: "/projects/atlas.svg",
    year: 2024,
    stack: ["React", "Vite", "TypeScript"],
    copy: {
      pt: {
        title: "Atlas Docs",
        tagline: "Documentação viva para squads distribuídos",
        description:
          "Experiência de leitura mobile-first, busca local e geração de conteúdo auxiliar por scripts Python no CI.",
      },
      en: {
        title: "Atlas Docs",
        tagline: "Living documentation for distributed squads",
        description:
          "Mobile-first reading experience, local search, and auxiliary content generation via Python scripts in CI.",
      },
      fr: {
        title: "Atlas Docs",
        tagline: "Documentation vivante pour équipes distribuées",
        description:
          "Lecture mobile-first, recherche locale et génération de contenu via scripts Python dans la CI.",
      },
      es: {
        title: "Atlas Docs",
        tagline: "Documentación viva para equipos distribuidos",
        description:
          "Lectura mobile-first, búsqueda local y generación de contenido con scripts Python en CI.",
      },
      it: {
        title: "Atlas Docs",
        tagline: "Documentazione viva per team distribuiti",
        description:
          "Lettura mobile-first, ricerca locale e generazione contenuti con script Python in CI.",
      },
    },
  },
  {
    id: "orbit-commerce",
    url: "https://example.com/orbit",
    image: "/projects/orbit.svg",
    year: 2024,
    stack: ["React", "Node", "Supabase"],
    copy: {
      pt: {
        title: "Orbit Commerce",
        tagline: "Checkout enxuto com observabilidade de funil",
        description:
          "Componentização estrita, estados de carregamento explícitos e vitrine de catálogo com carrossel performático.",
      },
      en: {
        title: "Orbit Commerce",
        tagline: "Lean checkout with funnel observability",
        description:
          "Strict componentization, explicit loading states, and a performant catalog carousel.",
      },
      fr: {
        title: "Orbit Commerce",
        tagline: "Checkout épuré avec observabilité du funnel",
        description:
          "Composants stricts, états de chargement explicites et carrousel catalogue performant.",
      },
      es: {
        title: "Orbit Commerce",
        tagline: "Checkout ligero con observabilidad de embudo",
        description:
          "Componentización estricta, estados de carga explícitos y carrusel de catálogo performante.",
      },
      it: {
        title: "Orbit Commerce",
        tagline: "Checkout snello con osservabilità sul funnel",
        description:
          "Componentizzazione rigorosa, stati di caricamento espliciti e carosello catalogo performante.",
      },
    },
  },
  {
    id: "lumen-design-system",
    url: "https://example.com/lumen",
    image: "/projects/lumen.svg",
    year: 2025,
    stack: ["React", "Storybook", "Tailwind"],
    copy: {
      pt: {
        title: "Lumen Design System",
        tagline: "Biblioteca acessível com tokens em camadas",
        description:
          "Sistema baseado em tokens, 60+ componentes acessíveis e documentação interativa em Storybook compartilhada entre produtos.",
      },
      en: {
        title: "Lumen Design System",
        tagline: "Accessible library with layered tokens",
        description:
          "Token-driven system, 60+ accessible components, and interactive Storybook docs shared across a product suite.",
      },
      fr: {
        title: "Lumen Design System",
        tagline: "Bibliothèque accessible à tokens en couches",
        description:
          "Système basé sur des tokens, plus de 60 composants accessibles et une documentation Storybook partagée entre produits.",
      },
      es: {
        title: "Lumen Design System",
        tagline: "Biblioteca accesible con tokens en capas",
        description:
          "Sistema basado en tokens, 60+ componentes accesibles y documentación interactiva en Storybook compartida entre productos.",
      },
      it: {
        title: "Lumen Design System",
        tagline: "Libreria accessibile con token a strati",
        description:
          "Sistema basato su token, oltre 60 componenti accessibili e documentazione Storybook condivisa tra prodotti.",
      },
    },
  },
] as const;
