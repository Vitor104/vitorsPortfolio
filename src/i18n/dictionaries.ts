import type { Locale, Messages } from "./types";

export const DICTIONARIES: Record<Locale, Messages> = {
  pt: {
    meta: { siteTitle: "Portfólio do Vitor", languageMenu: "Idioma" },
    nav: { hero: "Início", showcase: "Projetos", contact: "Contato" },
    hero: {
      kicker: "Desenvolvedor Web · SPA · Performance",
      title: "Soluções web claras, rápidas e bem arquitetadas.",
      subtitle:
        "Portfólio single-page com i18n instantâneo, motion acessível e vitrine técnica modular — pronto para evoluir com seus próximos cases.",
      ctaPrimary: "Ver vitrine",
      ctaSecondary: "Falar comigo",
      loadingLabel: "Carregando experiência",
    },
    showcase: {
      title: "Vitrine de projetos",
      subtitle:
        "Aplicações reais em destaque. Navegue pelo carrossel e abra os detalhes para ver stack e link.",
      prev: "Projeto anterior",
      next: "Próximo projeto",
      openDetails: "Abrir detalhes",
      stackLabel: "Ferramentas",
      visit: "Abrir site",
      closeModal: "Fechar detalhes",
    },
    contact: {
      title: "Contato direto",
      subtitle:
        "Sem formulários em servidor — atalhos rápidos para e-mail e redes.",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: { rights: "Vitor's Portfolio · conteúdo estático · sem CMS" },
  },
  en: {
    meta: { siteTitle: "Vitor's Portfolio", languageMenu: "Language" },
    nav: { hero: "Home", showcase: "Projects", contact: "Contact" },
    hero: {
      kicker: "Web Developer · SPA · Performance",
      title: "Clear, fast, well-architected web work.",
      subtitle:
        "Single-page portfolio with instant i18n, accessible motion, and a modular technical showcase — ready to grow with your next case studies.",
      ctaPrimary: "View showcase",
      ctaSecondary: "Get in touch",
      loadingLabel: "Loading experience",
    },
    showcase: {
      title: "Project showcase",
      subtitle:
        "Real applications in focus. Browse the carousel and open details for stack and link.",
      prev: "Previous project",
      next: "Next project",
      openDetails: "Open details",
      stackLabel: "Tools",
      visit: "Open website",
      closeModal: "Close details",
    },
    contact: {
      title: "Direct contact",
      subtitle: "No server-side forms — quick shortcuts to email and socials.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: { rights: "Vitor's Portfolio · static content · no CMS" },
  },
  fr: {
    meta: { siteTitle: "Portfolio de Vitor", languageMenu: "Langue" },
    nav: { hero: "Accueil", showcase: "Projets", contact: "Contact" },
    hero: {
      kicker: "Développeur Web · SPA · Performance",
      title: "Des solutions web claires, rapides et bien architecturées.",
      subtitle:
        "Portfolio single-page avec i18n instantané, animations accessibles et vitrine modulaire — prêt à évoluer avec vos prochains cas.",
      ctaPrimary: "Voir la vitrine",
      ctaSecondary: "Me contacter",
      loadingLabel: "Chargement de l'expérience",
    },
    showcase: {
      title: "Vitrine de projets",
      subtitle:
        "Applications réelles mises en avant. Parcourez le carrousel et ouvrez les détails pour la stack et le lien.",
      prev: "Projet précédent",
      next: "Projet suivant",
      openDetails: "Ouvrir les détails",
      stackLabel: "Outils",
      visit: "Ouvrir le site",
      closeModal: "Fermer les détails",
    },
    contact: {
      title: "Contact direct",
      subtitle:
        "Pas de formulaires côté serveur — raccourcis vers l'e-mail et les réseaux.",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      rights: "Vitor's Portfolio · contenu statique · pas de CMS",
    },
  },
  es: {
    meta: { siteTitle: "Portafolio de Vitor", languageMenu: "Idioma" },
    nav: { hero: "Inicio", showcase: "Proyectos", contact: "Contacto" },
    hero: {
      kicker: "Desarrollador Web · SPA · Rendimiento",
      title: "Soluciones web claras, rápidas y bien arquitectadas.",
      subtitle:
        "Portafolio de una sola página con i18n instantáneo, motion accesible y vitrina modular — listo para crecer con tus próximos casos.",
      ctaPrimary: "Ver vitrina",
      ctaSecondary: "Hablemos",
      loadingLabel: "Cargando experiencia",
    },
    showcase: {
      title: "Vitrina de proyectos",
      subtitle:
        "Aplicaciones reales destacadas. Navega el carrusel y abre detalles para ver stack y enlace.",
      prev: "Proyecto anterior",
      next: "Siguiente proyecto",
      openDetails: "Abrir detalles",
      stackLabel: "Herramientas",
      visit: "Abrir sitio",
      closeModal: "Cerrar detalles",
    },
    contact: {
      title: "Contacto directo",
      subtitle:
        "Sin formularios en servidor — accesos rápidos a correo y redes.",
      email: "Correo",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: { rights: "Vitor's Portfolio · contenido estático · sin CMS" },
  },
  it: {
    meta: { siteTitle: "Portfolio di Vitor", languageMenu: "Lingua" },
    nav: { hero: "Home", showcase: "Progetti", contact: "Contatti" },
    hero: {
      kicker: "Sviluppatore Web · SPA · Performance",
      title: "Soluzioni web chiare, veloci e ben architettonate.",
      subtitle:
        "Portfolio single-page con i18n istantaneo, motion accessibile e vetrina modulare — pronto a crescere con i tuoi prossimi casi studio.",
      ctaPrimary: "Vedi vetrina",
      ctaSecondary: "Contattami",
      loadingLabel: "Caricamento esperienza",
    },
    showcase: {
      title: "Vetrina progetti",
      subtitle:
        "Applicazioni reali in evidenza. Scorri il carosello e apri i dettagli per stack e link.",
      prev: "Progetto precedente",
      next: "Progetto successivo",
      openDetails: "Apri dettagli",
      stackLabel: "Strumenti",
      visit: "Apri sito",
      closeModal: "Chiudi dettagli",
    },
    contact: {
      title: "Contatto diretto",
      subtitle:
        "Nessun modulo lato server — scorciatoie rapide a email e social.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: { rights: "Vitor's Portfolio · contenuto statico · no CMS" },
  },
};

export const DEFAULT_LOCALE: Locale = "pt";

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  fr: "fr",
  es: "es",
  it: "it",
};
