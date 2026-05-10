import type { Locale, Messages } from "./types";

const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Figma",
  "Testing",
  "Performance",
] as const;

export const DICTIONARIES: Record<Locale, Messages> = {
  pt: {
    meta: { siteTitle: "Portfólio do Vitor", languageMenu: "Idioma" },
    nav: { hero: "Início", work: "Trabalho", about: "Sobre", contact: "Contato" },
    hero: {
      kicker: "Desenvolvedor Web — Portfólio 2026",
      nameSolid: "João",
      nameMuted: "Vitor",
      description:
        "Construo experiências web performáticas e acessíveis — de interfaces pixel-perfect a sistemas de back-end robustos.",
      loadingLabel: "Carregando experiência",
    },
    work: {
      kicker: "Trabalhos selecionados",
      counter: (count) =>
        `( ${count} ${count === 1 ? "projeto" : "projetos"} )`,
      prev: "Projeto anterior",
      next: "Próximo projeto",
      openDetails: "Abrir detalhes",
      stackLabel: "Ferramentas",
      visit: "Abrir site",
      closeModal: "Fechar detalhes",
    },
    about: {
      kicker: "Sobre",
      title:
        "Tenho carinho pelo ofício — código limpo, design pensado e experiências que parecem naturais para quem usa.",
      languagesHeading: "Idiomas",
      languages: [
        { id: "en", name: "Inglês", level: "B2" },
        { id: "fr", name: "Francês", level: "B1" },
        { id: "es", name: "Espanhol", level: "A2" },
        { id: "it", name: "Italiano", level: "A1" },
      ],
      body:
        "Com mais de seis anos na indústria, trabalhei com startups e empresas estabelecidas — construindo desde produtos voltados ao cliente até ferramentas para devs. Brilho em ambientes onde design e engenharia se cruzam.",
      skills: SKILLS,
    },
    contact: {
      kicker: "Vamos conversar",
      headlineLine1: "Vamos construir",
      headlineLine2Muted: "algo",
      headlineLine3: "juntos.",
      cta: "Iniciar projeto",
      email: "vitor@example.com",
      linkedin: "linkedin.com/in/vitor",
      github: "github.com/vitor",
    },
    footer: { rights: "Vitor's Portfolio · conteúdo estático · sem CMS" },
  },
  en: {
    meta: { siteTitle: "Vitor's Portfolio", languageMenu: "Language" },
    nav: { hero: "Home", work: "Work", about: "About", contact: "Contact" },
    hero: {
      kicker: "Web Developer — Portfolio 2026",
      nameSolid: "Vitor",
      nameMuted: "Mendes",
      description:
        "I build performant, accessible web experiences — from pixel-perfect interfaces to robust back-end systems.",
      loadingLabel: "Loading experience",
    },
    work: {
      kicker: "Selected work",
      counter: (count) =>
        `( ${count} ${count === 1 ? "project" : "projects"} )`,
      prev: "Previous project",
      next: "Next project",
      openDetails: "Open details",
      stackLabel: "Tools",
      visit: "Open website",
      closeModal: "Close details",
    },
    about: {
      kicker: "About",
      title:
        "I care deeply about the craft — clean code, considered design, and experiences that feel effortless to the people who use them.",
      languagesHeading: "Languages",
      languages: [
        { id: "en", name: "English", level: "B2" },
        { id: "fr", name: "French", level: "B1" },
        { id: "es", name: "Spanish", level: "A2" },
        { id: "it", name: "Italian", level: "A1" },
      ],
      body:
        "With over six years in the industry, I've worked with startups and established companies alike — building everything from customer-facing products to developer tooling. I thrive in collaborative environments where design and engineering intersect.",
      skills: SKILLS,
    },
    contact: {
      kicker: "Get in touch",
      headlineLine1: "Let's build",
      headlineLine2Muted: "something",
      headlineLine3: "together.",
      cta: "Start a project",
      email: "vitor@example.com",
      linkedin: "linkedin.com/in/vitor",
      github: "github.com/vitor",
    },
    footer: { rights: "Vitor's Portfolio · static content · no CMS" },
  },
  fr: {
    meta: { siteTitle: "Portfolio de Vitor", languageMenu: "Langue" },
    nav: { hero: "Accueil", work: "Travail", about: "À propos", contact: "Contact" },
    hero: {
      kicker: "Développeur Web — Portfolio 2026",
      nameSolid: "Vitor",
      nameMuted: "Mendes",
      description:
        "Je construis des expériences web performantes et accessibles — d'interfaces pixel-perfect à des systèmes back-end robustes.",
      loadingLabel: "Chargement de l'expérience",
    },
    work: {
      kicker: "Travaux sélectionnés",
      counter: (count) =>
        `( ${count} ${count === 1 ? "projet" : "projets"} )`,
      prev: "Projet précédent",
      next: "Projet suivant",
      openDetails: "Ouvrir les détails",
      stackLabel: "Outils",
      visit: "Ouvrir le site",
      closeModal: "Fermer les détails",
    },
    about: {
      kicker: "À propos",
      title:
        "J'attache une grande importance au métier — code propre, design réfléchi et expériences fluides pour ceux qui les utilisent.",
      languagesHeading: "Langues",
      languages: [
        { id: "en", name: "Anglais", level: "B2" },
        { id: "fr", name: "Français", level: "B1" },
        { id: "es", name: "Espagnol", level: "A2" },
        { id: "it", name: "Italien", level: "A1" },
      ],
      body:
        "Avec plus de six ans d'expérience, j'ai travaillé avec des startups comme avec des entreprises établies — en construisant des produits clients comme des outils pour développeurs. Je m'épanouis là où design et ingénierie se rencontrent.",
      skills: SKILLS,
    },
    contact: {
      kicker: "Restons en contact",
      headlineLine1: "Construisons",
      headlineLine2Muted: "quelque chose",
      headlineLine3: "ensemble.",
      cta: "Démarrer un projet",
      email: "vitor@example.com",
      linkedin: "linkedin.com/in/vitor",
      github: "github.com/vitor",
    },
    footer: { rights: "Vitor's Portfolio · contenu statique · pas de CMS" },
  },
  es: {
    meta: { siteTitle: "Portafolio de Vitor", languageMenu: "Idioma" },
    nav: { hero: "Inicio", work: "Trabajo", about: "Sobre mí", contact: "Contacto" },
    hero: {
      kicker: "Desarrollador Web — Portafolio 2026",
      nameSolid: "Vitor",
      nameMuted: "Mendes",
      description:
        "Construyo experiencias web performantes y accesibles — desde interfaces pixel-perfect hasta sistemas back-end robustos.",
      loadingLabel: "Cargando experiencia",
    },
    work: {
      kicker: "Trabajos seleccionados",
      counter: (count) =>
        `( ${count} ${count === 1 ? "proyecto" : "proyectos"} )`,
      prev: "Proyecto anterior",
      next: "Siguiente proyecto",
      openDetails: "Abrir detalles",
      stackLabel: "Herramientas",
      visit: "Abrir sitio",
      closeModal: "Cerrar detalles",
    },
    about: {
      kicker: "Sobre mí",
      title:
        "Me importa profundamente el oficio — código limpio, diseño pensado y experiencias que se sienten naturales para quien las usa.",
      languagesHeading: "Idiomas",
      languages: [
        { id: "en", name: "Inglés", level: "B2" },
        { id: "fr", name: "Francés", level: "B1" },
        { id: "es", name: "Español", level: "A2" },
        { id: "it", name: "Italiano", level: "A1" },
      ],
      body:
        "Con más de seis años en la industria, he trabajado con startups y empresas consolidadas — construyendo desde productos para el cliente hasta herramientas para devs. Me realizo donde diseño e ingeniería se cruzan.",
      skills: SKILLS,
    },
    contact: {
      kicker: "Hablemos",
      headlineLine1: "Construyamos",
      headlineLine2Muted: "algo",
      headlineLine3: "juntos.",
      cta: "Iniciar proyecto",
      email: "vitor@example.com",
      linkedin: "linkedin.com/in/vitor",
      github: "github.com/vitor",
    },
    footer: { rights: "Vitor's Portfolio · contenido estático · sin CMS" },
  },
  it: {
    meta: { siteTitle: "Portfolio di Vitor", languageMenu: "Lingua" },
    nav: { hero: "Home", work: "Lavori", about: "Chi sono", contact: "Contatti" },
    hero: {
      kicker: "Sviluppatore Web — Portfolio 2026",
      nameSolid: "Vitor",
      nameMuted: "Mendes",
      description:
        "Costruisco esperienze web performanti e accessibili — da interfacce pixel-perfect a sistemi back-end robusti.",
      loadingLabel: "Caricamento esperienza",
    },
    work: {
      kicker: "Lavori selezionati",
      counter: (count) =>
        `( ${count} ${count === 1 ? "progetto" : "progetti"} )`,
      prev: "Progetto precedente",
      next: "Progetto successivo",
      openDetails: "Apri dettagli",
      stackLabel: "Strumenti",
      visit: "Apri sito",
      closeModal: "Chiudi dettagli",
    },
    about: {
      kicker: "Chi sono",
      title:
        "Mi importa profondamente del mestiere — codice pulito, design pensato ed esperienze fluide per chi le usa.",
      languagesHeading: "Lingue",
      languages: [
        { id: "en", name: "Inglese", level: "B2" },
        { id: "fr", name: "Francese", level: "B1" },
        { id: "es", name: "Spagnolo", level: "A2" },
        { id: "it", name: "Italiano", level: "A1" },
      ],
      body:
        "Con oltre sei anni nel settore, ho lavorato sia con startup che con aziende consolidate — costruendo prodotti per i clienti e tool per sviluppatori. Sboccio dove design e ingegneria si incontrano.",
      skills: SKILLS,
    },
    contact: {
      kicker: "Parliamone",
      headlineLine1: "Costruiamo",
      headlineLine2Muted: "qualcosa",
      headlineLine3: "insieme.",
      cta: "Avvia un progetto",
      email: "vitor@example.com",
      linkedin: "linkedin.com/in/vitor",
      github: "github.com/vitor",
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
