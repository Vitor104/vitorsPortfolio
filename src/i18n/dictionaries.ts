import type { Locale, Messages } from "./types";

const SKILLS = [
  "React",
  "Javascript",
  "HTML5 & CSS3",
  "Bootstrap 5",
  "UI / UX Design",
  "PostgreSQL",
  "Supabase (BaaS)",
  "Java",
  "MySQL",
  "Python",
  "Scikit-learn",
  "Git & GitHub",
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
        "Desenvolvedor web focado em criar experiências modernas, responsivas e intuitivas.",
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
        "Código, design e aprendizado contínuo.",
      languagesHeading: "Idiomas",
      languages: [
        { id: "pt", name: "Português", level: "Nativo" },
        { id: "en", name: "Inglês", level: "B2" },
        { id: "es", name: "Espanhol", level: "A2" },
      ],
      body:
      "Sou estudante de Análise e Desenvolvimento de Sistemas e apaixonado por tecnologia, interfaces modernas e aprendizado contínuo. Atualmente foco meus estudos em desenvolvimento fullstack, criando aplicações responsivas, intuitivas e com boa experiência de usuário. Além da programação, também tenho interesse em inteligência artificial, design, idiomas e desenvolvimento criativo, áreas que me ajudam a enxergar tecnologia de forma mais ampla e estratégica.",
      skills: SKILLS,
    },
    contact: {
      kicker: "Vamos conversar",
      headlineLine1: "Vamos construir",
      headlineLine2Muted: "algo",
      headlineLine3: "juntos?",
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
        { id: "pt", name: "Portuguese", level: "Native" },
        { id: "en", name: "English", level: "B2" },
        { id: "es", name: "Spanish", level: "A2" },
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
        { id: "pt", name: "Portugués", level: "Nativo" },
        { id: "en", name: "Inglés", level: "B2" },
        { id: "es", name: "Español", level: "A2" },
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
};

export const DEFAULT_LOCALE: Locale = "pt";

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};
