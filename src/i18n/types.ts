export const LOCALES = ["pt", "en", "fr", "es", "it"] as const;

export type Locale = (typeof LOCALES)[number];

export type Messages = {
  meta: { siteTitle: string; languageMenu: string };
  nav: { hero: string; showcase: string; contact: string };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    loadingLabel: string;
  };
  showcase: {
    title: string;
    subtitle: string;
    prev: string;
    next: string;
    openDetails: string;
    stackLabel: string;
    visit: string;
    closeModal: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    linkedin: string;
    github: string;
  };
  footer: { rights: string };
};
