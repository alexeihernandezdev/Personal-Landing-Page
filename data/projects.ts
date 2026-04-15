export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: {
    title: string;
    description: string;
  }[];
  /** Si está vacío o ausente, no se muestra el botón de código. */
  github?: string;
  demo: string;
  /** Si es true, el enlace de demo usa el texto "Ver" / "View" (producción) en lugar de "Demo". */
  demoIsProduction?: boolean;
  category: string;
  year: string;
  role: string;
  screenshots: string[];
}

const leberpEcosystemEs: Project = {
  id: "3",
  slug: "leberp-erp-ecosystem",
  title: "Leberp — ecosistema ERP",
  shortDescription:
    "ERP cloud B2B (ventas, almacén, logística, tesorería, compras, analítica y POS): SPA en React, cliente de mostrador en Electron y backend .NET en Azure.",
  fullDescription:
    "Participación en el desarrollo de un ERP / plataforma de gestión orientada a operaciones de ventas, almacén, logística, tesorería, compras, catálogo, analítica y punto de venta, con cliente web (SPA), cliente POS multiplataforma (Electron) y monorepo backend en .NET con API, Azure Functions, integraciones y componentes de datos tabulares configurables e histórico.",
  image: "/projects/l1.png",
  technologies: [
    "TypeScript",
    "React 18",
    "Vite",
    "Redux Toolkit",
    "TanStack Query",
    "MUI",
    "React Hook Form",
    "Zod",
    "Electron",
    ".NET 8",
    "ASP.NET Core",
    "Entity Framework Core",
    "Azure Functions",
    "Azure",
  ],
  features: [
    "Frontend enterprise a gran escala: dominios de negocio amplios (pedidos, almacén, envíos, facturación, compras, analítica, RRHH, configuración), tablas y formularios complejos, informes y visualización (ECharts, Nivo, ApexCharts, entre otros)",
    "Cliente web con React, Vite, React Router, estado con Redux Toolkit / Zustand / TanStack Query, validación con Zod, UI con MUI, Radix, dnd-kit y piezas de datos muy densas (tablas virtuales, hojas tipo spreadsheet)",
    "Cliente POS en Electron (Windows, macOS, Linux): empaquetado con electron-builder, actualizaciones automáticas, protocolo propio para deep links, IPC tipado e impresión térmica para entorno retail",
    "Backend de dominio rico en .NET 8: ASP.NET Core con OpenAPI, EF Core, Azure Functions (HTTP, Service Bus, temporizadores, Durable Functions), Redis, integración con servicios Azure y pipelines con artefactos privados",
    "Integración entre capas: cliente API versionado frente a la API de Leberp, flujos desacoplados con colas y tareas masivas, telemetría con Application Insights en web, POS y componentes cloud",
    "Calidad de producto: ESLint, Prettier, Vitest, Testing Library, Playwright, Storybook y análisis de bundle en el ecosistema frontend",
  ],
  challenges: [
    {
      title: "Complejidad funcional y consistencia",
      description:
        "Mantener coherencia UX y de datos entre módulos muy distintos (ventas, almacén, tesorería, POS) y entre canales web y escritorio, con reglas de negocio cambiantes y alto volumen de pantallas.",
    },
    {
      title: "Rendimiento en interfaces densas",
      description:
        "Listados y grillas con mucho volumen de información requieren virtualización, consultas bien acotadas con TanStack Query y cuidado del bundle en una base de código muy amplia.",
    },
  ],
  demo: "https://leberp.com/",
  demoIsProduction: true,
  category: "Software empresarial",
  year: "2020 – actualidad",
  role: "Desarrollador full stack",
  screenshots: ["/projects/l1.png", "/projects/l2.png", "/projects/l3.png"],
};

const leberpEcosystemEn: Project = {
  ...leberpEcosystemEs,
  title: "Leberp — ERP ecosystem",
  shortDescription:
    "B2B cloud ERP (sales, warehouse, logistics, treasury, purchasing, analytics, and POS): React SPA, Electron desktop client, and .NET backend on Azure.",
  fullDescription:
    "Contributing to the development of an ERP / business management platform focused on sales, warehouse, logistics, treasury, purchasing, catalog, analytics, and point-of-sale operations, with a web (SPA) client, a cross-platform Electron POS client, and a .NET backend monorepo with APIs, Azure Functions, integrations, and configurable tabular data components and history.",
  features: [
    "Large-scale enterprise frontend: broad business domains (orders, warehouse, shipping, invoicing, purchasing, analytics, HR, settings), complex tables and forms, reporting and charts (ECharts, Nivo, ApexCharts, among others)",
    "Web client with React, Vite, React Router, Redux Toolkit / Zustand / TanStack Query, Zod validation, MUI and Radix, dnd-kit, and very dense data UIs (virtualized tables, spreadsheet-style views)",
    "Electron POS for Windows, macOS, and Linux: electron-builder packaging, auto-updates, custom protocol for deep links, typed IPC, and thermal printing for retail",
    "Rich .NET 8 backend: ASP.NET Core with OpenAPI, EF Core, Azure Functions (HTTP, Service Bus, timers, Durable Functions), Redis, Azure integrations, and private artifact pipelines",
    "Cross-layer integration: versioned API client against the Leberp API, decoupled flows with queues and bulk jobs, Application Insights across web, POS, and cloud components",
    "Product quality: ESLint, Prettier, Vitest, Testing Library, Playwright, Storybook, and bundle analysis on the frontend side",
  ],
  challenges: [
    {
      title: "Functional complexity and consistency",
      description:
        "Keeping UX and data consistency across very different modules (sales, warehouse, treasury, POS) and between web and desktop channels, with evolving rules and a huge screen surface.",
    },
    {
      title: "Performance for dense UIs",
      description:
        "Large grids and heavy lists need virtualization, well-scoped TanStack Query usage, and careful bundle strategy in a very large codebase.",
    },
  ],
  category: "Enterprise software",
  year: "2020 – present",
  role: "Full stack developer",
};

const lashExtensionsEs: Project = {
  id: "1",
  slug: "beauty-lash-extensions-site",
  title: "Sitio web — extensiones de pestañas",
  shortDescription:
    "Web estática y marketing local para un negocio de belleza: servicios, precios, contacto, mapa y contenido bilingüe (inglés / español).",
  fullDescription:
    "Plantilla y demo de sitio promocional centrado en extensiones de pestañas. Incluye catálogo de servicios con precios de ejemplo, formulario de contacto, mapa interactivo con OpenStreetMap y navegación responsive. Los textos de negocio, coordenadas y destino del formulario son configurables en un módulo de datos con placeholders, carrusel en la home y pie de página con contacto y redes.",
  image: "/projects/m1.png",
  technologies: [
    "Next.js 13",
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "CSS Modules",
    "Leaflet",
    "React Leaflet",
    "react-icons",
    "next/font",
    "Middleware i18n",
    "FormSubmit",
  ],
  features: [
    "App Router de Next.js con rutas localizadas `[lang]` y `generateStaticParams` para inglés y español",
    "Detección de idioma con middleware (`Accept-Language`) y prefijos de URL explícitos",
    "Diccionarios JSON por locale y contenido de servicios generado en servidor",
    "Mapa embebido con Leaflet y OSM; carga solo en cliente para evitar problemas de SSR",
    "Formulario de contacto con POST a FormSubmit (destino configurable en datos)",
    "UI responsive: navegación sticky, menú móvil, grid de servicios y carrusel animado en la home",
    "Metadatos SEO por página con `generateMetadata` y prefijos de título configurables",
    "Estilos con Tailwind CSS y CSS Modules en componentes puntuales; tipografía Inter vía `next/font`",
  ],
  challenges: [
    {
      title: "Internacionalización y rutas",
      description:
        "Coordinar redirección inicial de locale, rutas estables `/en` y `/es`, y textos desde JSON sin duplicar layout, manteniendo buen SEO y enlaces compartibles.",
    },
    {
      title: "Leaflet fuera de SSR",
      description:
        "El mapa requiere DOM y no convive bien con el render en servidor; se encapsuló la carga con import dinámico y `ssr: false` para montar React Leaflet solo en el cliente.",
    },
    {
      title: "Contacto sin backend propio",
      description:
        "El envío del formulario se externaliza a FormSubmit para no mantener API Routes ni servidor de correo en el proyecto, documentando el destino en el módulo de datos.",
    },
  ],
  github: "https://github.com/alexei2000/MV-Eyelashes",
  demo: "https://mv-eyelashes.vercel.app",
  demoIsProduction: true,
  category: "Desarrollo web",
  year: "2023",
  role: "Desarrollador frontend",
  screenshots: ["/projects/m1.png", "/projects/m2.png"],
};

const lashExtensionsEn: Project = {
  ...lashExtensionsEs,
  title: "Beauty website — lash extensions",
  shortDescription:
    "Static marketing site for a beauty business: services, pricing, contact, map, and bilingual content (English / Spanish).",
  fullDescription:
    "Promotional site template focused on lash extensions. It includes a service catalog with sample prices, a contact form, an interactive OpenStreetMap map, and responsive navigation. Business copy, map coordinates, and form destination are configurable via a data module with placeholders, a carousel on the home page, and a footer with contact and social links.",
  features: [
    "Next.js App Router with `[lang]` routes and `generateStaticParams` for English and Spanish",
    "Locale detection via middleware (`Accept-Language`) and explicit URL prefixes",
    "Per-locale JSON dictionaries and server-oriented service content",
    "Embedded map with Leaflet and OSM; client-only loading to avoid SSR issues",
    "Contact form posting to FormSubmit (configurable destination in data)",
    "Responsive UI: sticky nav, mobile menu, service grid, and animated home carousel",
    "Per-page SEO metadata via `generateMetadata` and configurable title prefixes",
    "Tailwind CSS plus CSS Modules where needed; Inter via `next/font`",
  ],
  challenges: [
    {
      title: "Internationalization and routing",
      description:
        "Aligning initial locale redirects, stable `/en` and `/es` routes, and JSON-driven copy without duplicating layout, while keeping SEO and shareable URLs in good shape.",
    },
    {
      title: "Leaflet without SSR",
      description:
        "The map needs the DOM and does not play well with server rendering; it is loaded with dynamic import and `ssr: false` so React Leaflet mounts only on the client.",
    },
    {
      title: "Contact without a custom backend",
      description:
        "Form submission is delegated to FormSubmit to avoid API routes or a mail server in the repo, with the destination documented in the data module.",
    },
  ],
  category: "Web development",
  year: "2023",
  role: "Frontend developer",
};

const iceClimberEs: Project = {
  id: "2",
  slug: "ice-climber-libgdx",
  title: "Ice Climber Remake",
  shortDescription:
    "Remake multiplataforma del clásico Ice Climber de NES, con física 2D avanzada, iluminación dinámica y despliegue automatizado.",
  fullDescription:
    "Proyecto de videojuego 2D inspirado en el clásico Ice Climber. Desarrollado originalmente hace años y actualizado recientemente para demostrar el uso de tecnologías modernas como LibGDX y TeaVM. El juego presenta una mecánica de ascenso vertical, bloques destructibles, enemigos con IA simple y un sistema de iluminación basado en Box2D. Incluye tres niveles completos, persistencia de puntuaciones mediante JSON y una arquitectura modular que permite la ejecución tanto en escritorio como en navegadores web. Las texturas fueron elaboradas en Adobe Illustrator.",
  image: "/projects/s2.png",
  technologies: [
    "Java",
    "LibGDX",
    "Box2D",
    "Box2DLights",
    "TeaVM",
    "Gradle",
    "GitHub Actions",
    "Adobe Illustrator",
  ],
  features: [
    "Texturas y assets gráficos creados en Adobe Illustrator",
    "Física 2D realista mediante el motor Box2D integrado",
    "Sistema de iluminación dinámica en tiempo real con Box2DLights",
    "Tres mundos jugables con progresión de dificultad y transiciones animadas",
    "Compilación cruzada a JavaScript para ejecución en navegador sin plugins",
    "Persistencia de récords y puntuaciones en formato JSON",
    "Interfaz de usuario personalizada (Freezing UI) con Scene2D",
    "Automatización de despliegue mediante CI/CD a GitHub Pages",
    "IA de enemigos (Yeti y Oso) integrada con gdx-ai",
  ],
  challenges: [
    {
      title: "Portabilidad Web con TeaVM",
      description:
        "El mayor reto fue migrar un código base antiguo de Java a un entorno web. Utilicé TeaVM para transpilar el bytecode a JavaScript, resolviendo incompatibilidades de reflexión y ajustando el manejo de assets para entornos de red.",
    },
    {
      title: "Mantenimiento y Refactorización",
      description:
        "Actualicé el proyecto de versiones obsoletas a LibGDX 1.14.0 y Gradle 9.4.0, implementando una arquitectura modular (core, desktop, teavm) para separar la lógica de negocio del renderizado específico de plataforma.",
    },
    {
      title: "Física e Iluminación en 2D",
      description:
        "Integré un ciclo de día/noche simplificado (Sun + RayHandler) sincronizado con el mundo físico de Box2D para crear una atmósfera invernal inmersiva.",
    },
  ],
  github: "https://github.com/alexei2000/Ice-climber",
  demo: "https://alexei2000.github.io/Ice-climber/",
  category: "Desarrollo de videojuegos",
  year: "2020",
  role: "Desarrollador de juegos",
  screenshots: ["/projects/s1.png", "/projects/s2.png", "/projects/s3.png"],
};

const iceClimberEn: Project = {
  ...iceClimberEs,
  title: "Ice Climber Remake",
  shortDescription:
    "Cross-platform remake of the classic NES Ice Climber, with advanced 2D physics, dynamic lighting, and automated deployment.",
  fullDescription:
    "A 2D game project inspired by the classic Ice Climber. Originally built years ago and recently updated to showcase modern tooling with LibGDX and TeaVM. The game features vertical climbing mechanics, destructible blocks, simple enemy AI, and Box2D-based lighting. It includes three full levels, JSON score persistence, and a modular architecture that runs on desktop and in the browser. Textures were created in Adobe Illustrator.",
  features: [
    "Textures and graphic assets made in Adobe Illustrator",
    "Realistic 2D physics using the integrated Box2D engine",
    "Real-time dynamic lighting with Box2DLights",
    "Three playable worlds with difficulty progression and animated transitions",
    "Cross-compilation to JavaScript for plugin-free browser play",
    "High-score and record persistence in JSON",
    "Custom UI (Freezing UI) built with Scene2D",
    "Automated CI/CD deployment to GitHub Pages",
    "Enemy AI (Yeti and Bear) powered by gdx-ai",
  ],
  challenges: [
    {
      title: "Web portability with TeaVM",
      description:
        "The hardest part was migrating legacy Java to the web. I used TeaVM to transpile bytecode to JavaScript, fixing reflection issues and tuning asset loading for network environments.",
    },
    {
      title: "Maintenance and refactoring",
      description:
        "I upgraded the project to LibGDX 1.14.0 and Gradle 9.4.0 with a modular layout (core, desktop, teavm) separating business logic from platform-specific rendering.",
    },
    {
      title: "2D physics and lighting",
      description:
        "I wired a simplified day/night cycle (Sun + RayHandler) to the Box2D world for an immersive winter atmosphere.",
    },
  ],
  category: "Game development",
  year: "2020",
  role: "Game developer",
};

export type AppLocale = "es" | "en";

export const projectsByLocale: Record<AppLocale, Project[]> = {
  es: [leberpEcosystemEs, lashExtensionsEs, iceClimberEs],
  en: [leberpEcosystemEn, lashExtensionsEn, iceClimberEn],
};

export function getProjects(locale: string): Project[] {
  if (locale === "en") return projectsByLocale.en;
  return projectsByLocale.es;
}

export function projectHasGithubLink(
  project: Project,
): project is Project & { github: string } {
  const g = project.github;
  return typeof g === "string" && g.trim().length > 0;
}
