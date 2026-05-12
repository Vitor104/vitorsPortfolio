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
        { id: "fr", name: "Francês", level: "B1" },
        { id: "it", name: "Italiano", level: "A1" },
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
      email: "jv7554817@gmail.com",
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
      nameSolid: "João",
      nameMuted: "Vitor",
      description:
        "Web developer focused on creating modern, responsive, and intuitive experiences.",
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
        "Code, design, and continuous learning.",
      languagesHeading: "Languages",
      languages: [
        { id: "pt", name: "Portuguese", level: "Native" },
        { id: "en", name: "English", level: "B2" },
        { id: "es", name: "Spanish", level: "A2" },
        { id: "fr", name: "French", level: "B1" },
        { id: "it", name: "Italian", level: "A1" },
      ],
      body:
        "I am a Systems Analysis and Development student with a passion for technology, modern interfaces, and lifelong learning. Currently, I focus my studies on full-stack development, building responsive and intuitive applications with a strong emphasis on user experience. Beyond coding, I am interested in AI, design, languages, and creative development—fields that help me view technology through a broader and more strategic lens.",
      skills: SKILLS,
    },
    contact: {
      kicker: "Get in touch",
      headlineLine1: "Let's build",
      headlineLine2Muted: "something",
      headlineLine3: "together?",
      cta: "Start a project",
      email: "jv7554817@gmail.com",
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
      nameSolid: "João",
      nameMuted: "Vitor",
      description:
        "Desarrollador web enfocado en crear experiencias modernas, responsivas e intuitivas.",
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
        "Código, diseño y aprendizaje continuo.",
      languagesHeading: "Idiomas",
      languages: [
        { id: "pt", name: "Portugués", level: "Nativo" },
        { id: "en", name: "Inglés", level: "B2" },
        { id: "es", name: "Español", level: "A2" },
        { id: "fr", name: "Francés", level: "B1" },
        { id: "it", name: "Italiano", level: "A1" },
      ],
      body:
        "Soy estudiante de Análisis y Desarrollo de Sistemas y un apasionado de la tecnología, las interfaces modernas y el aprendizaje continuo. Actualmente, enfoco mis estudios en el desarrollo fullstack, creando aplicaciones responsivas e intuitivas con una excelente experiencia de usuario. Además de la programación, también me interesan la inteligencia artificial, el diseño, los idiomas y el desarrollo creativo, áreas que me permiten ver la tecnología de una forma más amplia y estratégica.",
      skills: SKILLS,
    },
    contact: {
      kicker: "Hablemos",
      headlineLine1: "Construyamos",
      headlineLine2Muted: "algo",
      headlineLine3: "juntos?",
      cta: "Iniciar proyecto",
      email: "jv7554817@gmail.com",
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
