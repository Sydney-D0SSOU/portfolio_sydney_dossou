export type AppCopy = {
  name: string;
  role: string;
  intro: string;
  ctaPrimary: string;
  ctaSecondary: string;
  nav: {
    about: string;
    stack: string;
    expertise: string;
    projects: string;
    experience: string;
    contact: string;
  };
  sections: {
    aboutTitle: string;
    aboutBody: string;
    aboutMaster: string;
    stackTitle: string;
    expertiseTitle: string;
    expertiseSubtitle: string;
    projectTitle: string;
    experienceTitle: string;
    contactTitle: string;
    contactBody: string;
  };
  expertise: {
    backend: {
      title: string;
      description: string;
      highlights: string[];
    };
    frontend: {
      title: string;
      description: string;
      highlights: string[];
    };
    data: {
      title: string;
      description: string;
      highlights: string[];
    };
  };
};

export const copyByLocale: Record<"en" | "fr", AppCopy> = {
  en: {
    name: "Sydney Dossou",
    role: "Mid-Level Backend Engineer, Fullstack Capable.",
    intro:
      "I build reliable APIs and business-ready systems with a backend-first mindset. I ship fullstack when needed, with clean architecture, solid data modeling, and a focus on long-term maintainability.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Me",
    nav: {
      about: "About",
      stack: "Stack",
      expertise: "Expertise",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    sections: {
      aboutTitle: "About",
      aboutBody:
        "I'm a fullstack engineer with a strong backend orientation. I design modular APIs, reliable workflows, and data-aware systems that solve real operational challenges. My focus is practical engineering: clean structure, security-first patterns, and maintainable delivery.",
      aboutMaster:
        "Currently pursuing a Master's in Artificial Intelligence and Big Data, deepening my expertise in machine learning and data-driven decision systems.",
      stackTitle: "Core Stack",
      expertiseTitle: "Expertise",
      expertiseSubtitle: "Where I excel and what I bring to your team",
      projectTitle: "Featured Projects",
      experienceTitle: "Professional Journey",
      contactTitle: "Let's Build Something Strong",
      contactBody:
        "If you need a backend-focused fullstack engineer to structure APIs, stabilize delivery, and ship production-ready features, let's talk.",
    },
    expertise: {
      backend: {
        title: "Backend Engineering",
        description:
          "I design production-ready APIs with clear architecture, robust validation, and reliable domain workflows.",
        highlights: [
          "Express.js + TypeScript layered architecture (Controllers → Services → Repositories)",
          "Prisma ORM with complex relational schemas (40+ models, migrations, transactions)",
          "Authentication & Security (JWT 2FA, OAuth, bcrypt, Helmet, rate limiting)",
          "Real-time capabilities (Socket.io namespaces, event-driven patterns)",
          "File management & cloud (AWS S3 integration, signed URLs, streaming uploads)",
          "Payment integrations and transactional workflows",
          "Scheduling and async jobs (node-cron, queue patterns, idempotency)",
        ],
      },
      frontend: {
        title: "Frontend Delivery",
        description:
          "Modern, responsive UIs with a focus on design systems and user experience. Fluent in React, Next.js, and component-driven architecture.",
        highlights: [
          "Next.js 16+ with App Router, server components, and client-side patterns",
          "TypeScript-first UI development with strict typing",
          "Design systems and component libraries (Tailwind v4, shadcn/ui, Phosphor Icons)",
          "Animation and interactivity (Framer Motion, CSS transitions, glassmorphism)",
          "Responsive design and mobile-first approach",
          "Performance optimization and accessibility best practices",
        ],
      },
      data: {
        title: "Data & Insights",
        description:
          "Turning raw data into actionable intelligence. Backend reporting, exports, analytics, and now diving deeper into AI and Big Data.",
        highlights: [
          "Reporting pipelines (CSV/Excel exports with json2csv, xlsx)",
          "Analytics queries and KPI aggregations",
          "Data pipeline design and event sourcing patterns",
          "Now pursuing: Machine Learning, advanced SQL, Big Data processing",
          "Understanding data as a competitive advantage",
        ],
      },
    },
  },
  fr: {
    name: "Sydney Dossou",
    role: "Ingénieur Backend Mid-Level, Fullstack capable.",
    intro:
      "Je construis des APIs fiables et des systèmes orientés métier avec une approche backend-first. Je livre aussi côté fullstack quand nécessaire, avec une architecture propre, une modélisation de données solide et une logique maintenable.",
    ctaPrimary: "Voir les projets",
    ctaSecondary: "Me contacter",
    nav: {
      about: "À propos",
      stack: "Stack",
      expertise: "Expertise",
      projects: "Projets",
      experience: "Expérience",
      contact: "Contact",
    },
    sections: {
      aboutTitle: "À propos",
      aboutBody:
        "Je suis un ingénieur fullstack à forte dominante backend. Je conçois des APIs modulaires, des workflows fiables et des systèmes orientés données qui répondent à de vrais enjeux opérationnels. Mon approche reste pragmatique: structure claire, sécurité, et livraison maintenable.",
      aboutMaster:
        "Actuellement en Master Intelligence Artificielle et Big Data, approfondissant mon expertise en machine learning et systèmes d'aide à la décision orientés données.",
      stackTitle: "Stack principale",
      expertiseTitle: "Expertise",
      expertiseSubtitle: "Mes forces et ce que j'apporte à votre équipe",
      projectTitle: "Projets phares",
      experienceTitle: "Parcours professionnel",
      contactTitle: "Construisons quelque chose de solide",
      contactBody:
        "Si vous cherchez un profil fullstack orienté backend pour structurer vos APIs, fiabiliser la livraison et mettre en production proprement, échangeons.",
    },
    expertise: {
      backend: {
        title: "Ingénierie Backend",
        description:
          "Je conçois des APIs prêtes pour la production avec une architecture claire, une validation stricte et des workflows métier robustes.",
        highlights: [
          "Express.js + TypeScript en architecture en couches (Controllers → Services → Repositories)",
          "Prisma ORM avec schémas relationnels complexes (40+ modèles, migrations, transactions)",
          "Authentification & Sécurité (JWT 2FA, OAuth, bcrypt, Helmet, rate limiting)",
          "Capacités temps réel (Socket.io namespaces, patterns événementiels)",
          "Gestion de fichiers & cloud (intégration AWS S3, URLs signées, uploads en streaming)",
          "Intégrations de paiement et workflows transactionnels",
          "Scheduling et jobs async (node-cron, queue patterns, idempotence)",
        ],
      },
      frontend: {
        title: "Delivery Frontend",
        description:
          "UIs modernes et responsives avec un focus sur les design systems et l'expérience utilisateur. Fluide avec React, Next.js et l'architecture composants.",
        highlights: [
          "Next.js 16+ avec App Router, server components et patterns client",
          "Développement UI TypeScript-first avec typage strict",
          "Design systems et component libraries (Tailwind v4, shadcn/ui, Phosphor Icons)",
          "Animation et interactivité (Framer Motion, transitions CSS, glassmorphism)",
          "Responsive design et approche mobile-first",
          "Optimisation de performance et bonnes pratiques d'accessibilité",
        ],
      },
      data: {
        title: "Data & Insights",
        description:
          "Transformer les données brutes en intelligence actionnelle. Reporting backend, exports, analytics, et exploration plus profonde en IA et Big Data.",
        highlights: [
          "Pipelines de reporting (exports CSV/Excel avec json2csv, xlsx)",
          "Requêtes analytics et agrégations KPI",
          "Design de pipeline de données et patterns event sourcing",
          "En cours: Machine Learning, SQL avancé, traitement Big Data",
          "Comprendre la donnée comme avantage compétitif",
        ],
      },
    },
  },
};
