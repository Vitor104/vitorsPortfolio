export const LOCALES = ["pt", "en", "fr", "es", "it"] as const;

export type Locale = (typeof LOCALES)[number];

/** ISO-style id for emoji flags and stable keys — not tied to UI locale selection. */
export type AboutLanguageId = "en" | "fr" | "es" | "it";

export type AboutLanguage = {
  readonly id: AboutLanguageId;
  /** Localized language name ("English", "Inglês", …). */
  readonly name: string;
  /** CEFR-style level label; kept identical across locales. */
  readonly level: string;
};

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
    languagesHeading: string;
    languages: readonly AboutLanguage[];
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
