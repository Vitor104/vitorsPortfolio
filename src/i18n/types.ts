export const LOCALES = ["pt", "en", "fr", "es", "it"] as const;

export type Locale = (typeof LOCALES)[number];

export type Messages = {
  meta: { siteTitle: string; languageMenu: string };
  nav: { hero: string; work: string; about: string; contact: string };
  hero: {
    kicker: string;
    nameSolid: string;
    nameMuted: string;
    description: string;
    loadingLabel: string;
  };
  work: {
    kicker: string;
    counter: (count: number) => string;
    prev: string;
    next: string;
    openDetails: string;
    stackLabel: string;
    visit: string;
    closeModal: string;
  };
  about: {
    kicker: string;
    title: string;
    body: string;
    skills: readonly string[];
  };
  contact: {
    kicker: string;
    headlineLine1: string;
    headlineLine2Muted: string;
    headlineLine3: string;
    cta: string;
    email: string;
    linkedin: string;
    github: string;
  };
  footer: { rights: string };
};
