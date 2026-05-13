import type { Locale } from "../i18n/types";
import imgProjects from "../data/imgProjects/FlowBill.png";

export type StackTag =
  | "React"
  | "Tailwind CSS"
  | "Lucide React"
  | "Supabase"
  | "Vite"
  | "Bootstrap 5"
  | "OpenWeatherMap API"
  | "GSAP"
  | "CSS3";

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
    id: "flowBill",
    url: "../data/imgProjects/FlowBill.png",
    image: "src/data/imgProjects/FlowBill.png",
    year: 2025,
    stack: ["React", "Tailwind CSS", "Lucide React"],
    copy: {
      pt: {
        title: "FlowBill",
        tagline: "Gamificação financeira e tracking para freelancers",
        description:
          "Cronômetro de faturamento em tempo real, Client-Side Storage para máxima privacidade e UI reativa estilizada via classes utilitárias.",
      },
      en: {
        title: "FlowBill",
        tagline: "Financial gamification and tracking for freelancers",
        description:
          "Real-time billing timer, Client-Side Storage for maximum privacy, and reactive UI styled via utility classes.",
      },
      es: {
        title: "FlowBill",
        tagline: "Gamificación financiera y seguimiento para freelancers",
        description:
          "Cronómetro de facturación en tiempo real, Client-Side Storage para máxima privacidad y UI reactiva estilizada mediante clases utilitarias.",
      },
    },
  },
  {
    id: "lume-dashboard",
    url: "https://lumedashboard.netlify.app/login",
    image: "../data/imgProjects/lumeDashboard.png",
    year: 2026,
    stack: ["React", "Bootstrap 5", "Supabase", "Vite"],
    copy: {
      pt: {
        title: "Lume Dashboard",
        tagline: "Sistema de gestão de vendas e estoque",
        description:
          "Sistema que não apenas registra o que saiu, mas prevê o que vai acontecer com o estoque.",
      },
      en: {
        title: "Lume Dashboard",
        tagline: "Sales and inventory management system",
        description:
          "A system that not only records what went out, but predicts what will happen with the inventory.",
      },
      es: {
        title: "Lume Dashboard",
        tagline: "Sistema de gestión de ventas e inventario",
        description:
          "Un sistema que no solo registra lo que salió, sino que predice lo que sucederá con el inventario.",
      },
    },
  },
  {
    id: "sky-cast",
    url: "https://skycastdaily.netlify.app/",
    image: "../data/imgProjects/SkyCast.png",
    year: 2024,
    stack: ["React", "Bootstrap 5", "OpenWeatherMap API"],
    copy: {
      pt: {
        title: "Sky Cast",
        tagline: "Sua janela em tempo real para o clima global",
        description:
          "Uma interface intuitiva que consome a OpenWeather API para fornecer dados meteorológicos precisos de qualquer cidade, transformando números brutos em previsões visuais claras.",
      },
      en: {
        title: "Sky Cast",
        tagline: "Your real-time window into global weather",
        description:
          "An intuitive interface powered by the OpenWeather API to provide accurate meteorological data for any city, transforming raw numbers into clear visual forecasts.",
      },
      es: {
        title: "Sky Cast",
        tagline: "Tu ventana en tiempo real al clima global",
        description:
          "Una interfaz intuitiva que utiliza la API de OpenWeather para ofrecer datos meteorológicos precisos de cualquier ciudad, transformando estadísticas en pronósticos visuales claros.",
      },
    },
  },
  {
    id: "artemis-project",
    url: "https://artemiisproject.netlify.app/",
    image: "../data/imgProjects/artemisProject.png",
    year: 2026,
    stack: ["React", "Vite", "GSAP", "CSS3"],
    copy: {
      pt: {
        title: "Artemis Project",
        tagline: "Scrollytelling imersivo pelo espaço profundo",
        description:
          "Experiência cinematográfica com rolagem horizontal simulada (Fake Horizontal Scroll), animações atreladas ao scroll de alta performance e degradação graciosa para dispositivos móveis.",
      },
      en: {
        title: "Artemis Project",
        tagline: "Immersive scrollytelling through deep space",
        description:
          "Cinematic experience featuring simulated horizontal scrolling (Fake Horizontal Scroll), high-performance scroll-linked animations, and graceful degradation for mobile devices.",
      },
      es: {
        title: "Artemis Project",
        tagline: "Scrollytelling inmersivo por el espacio profundo",
        description:
          "Experiencia cinematográfica con desplazamiento horizontal simulado (Fake Horizontal Scroll), animaciones vinculadas al scroll de alto rendimiento y degradación elegante para dispositivos móviles.",
      },
    },
  },
] as const;
