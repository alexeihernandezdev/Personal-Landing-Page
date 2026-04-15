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
  github: string;
  demo: string;
  category: string;
  year: string;
  role: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription:
      "Plataforma de comercio electrónico completa con panel de administración, pasarela de pagos y gestión de inventario.",
    fullDescription:
      "Una plataforma de comercio electrónico full-stack diseñada para pequeñas y medianas empresas. El sistema incluye un panel de administración robusto, integración con múltiples pasarelas de pago, gestión avanzada de inventario, y un sistema de recomendaciones basado en el comportamiento del usuario.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "Docker"],
    features: [
      "Carrito de compras en tiempo real con sincronización multi-dispositivo",
      "Panel de administración con analytics y reportes detallados",
      "Sistema de gestión de inventario con alertas automáticas",
      "Integración con Stripe para pagos seguros",
      "Sistema de recomendaciones basado en ML",
      "Notificaciones push para ofertas y actualizaciones",
      "API RESTful documentada con Swagger",
      "Autenticación JWT con refresh tokens",
    ],
    challenges: [
      {
        title: "Optimización de rendimiento en catálogo grande",
        description:
          "Con más de 50,000 productos, implementé virtualización de listas, lazy loading de imágenes y caché inteligente con Redis, reduciendo el tiempo de carga en un 70%.",
      },
      {
        title: "Manejo de transacciones concurrentes",
        description:
          "Diseñé un sistema de bloqueo optimista para prevenir over-selling durante picos de tráfico, garantizando la integridad de las transacciones.",
      },
      {
        title: "Sincronización en tiempo real",
        description:
          "Implementé WebSockets para sincronizar el carrito entre dispositivos, permitiendo a los usuarios continuar su compra desde cualquier lugar.",
      },
    ],
    github: "https://github.com",
    demo: "https://example.com",
    category: "E-commerce",
    year: "2024",
    role: "Full Stack Developer",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
  },
  {
    id: "2",
    slug: "task-management-app",
    title: "Task Management App",
    shortDescription:
      "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y analytics.",
    fullDescription:
      "Una aplicación moderna de gestión de proyectos diseñada para equipos remotos. Incluye tableros Kanban personalizables, colaboración en tiempo real, seguimiento de tiempo, y potentes herramientas de análisis para medir la productividad del equipo.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind",
      "Prisma",
      "WebSockets",
    ],
    features: [
      "Tableros Kanban con drag & drop fluido",
      "Colaboración en tiempo real con presencia de usuarios",
      "Sistema de comentarios y menciones",
      "Seguimiento de tiempo integrado",
      "Notificaciones inteligentes por email y push",
      "Dashboard de analytics con métricas de productividad",
      "Etiquetas y filtros personalizables",
      "Integraciones con Slack y GitHub",
    ],
    challenges: [
      {
        title: "Sincronización de estado en tiempo real",
        description:
          "Implementé un sistema de Operational Transformation para resolver conflictos cuando múltiples usuarios editan simultáneamente, similar a Google Docs.",
      },
      {
        title: "Rendimiento con datasets grandes",
        description:
          "Optimicé las queries de PostgreSQL y añadí índices estratégicos, logrando respuestas sub-100ms incluso con más de 100,000 tareas.",
      },
      {
        title: "Sistema de notificaciones escalable",
        description:
          "Diseñé un sistema de cola con Bull para procesar notificaciones de forma asíncrona, manejando picos de hasta 10,000 notificaciones por minuto.",
      },
    ],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Productivity",
    year: "2024",
    role: "Lead Developer",
    screenshots: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    ],
  },
  {
    id: "3",
    slug: "portfolio-generator",
    title: "Portfolio Generator",
    shortDescription:
      "Generador de portfolios personalizados con múltiples plantillas y exportación a código.",
    fullDescription:
      "Una herramienta SaaS que permite a desarrolladores y diseñadores crear portfolios profesionales sin código. Incluye un editor visual drag-and-drop, múltiples plantillas personalizables, y la capacidad de exportar el código final para hosting propio.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    technologies: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Vite",
      "Monaco Editor",
    ],
    features: [
      "Editor visual drag-and-drop intuitivo",
      "12+ plantillas profesionales prediseñadas",
      "Personalización completa de colores y tipografía",
      "Exportación a código React/HTML limpio",
      "Sistema de temas con preview en tiempo real",
      "Optimización automática de imágenes",
      "SEO integrado con meta tags personalizables",
      "Hosting gratuito con subdominio personalizado",
    ],
    challenges: [
      {
        title: "Editor visual complejo",
        description:
          "Construí un sistema de componentes flexible que permite arrastrar, soltar y reorganizar secciones mientras se mantiene el código generado limpio y semántico.",
      },
      {
        title: "Generación de código optimizado",
        description:
          "Desarrollé un sistema de templates que genera código React moderno, tree-shakeable y accesible, con un bundle size 40% menor que alternativas similares.",
      },
      {
        title: "Preview en tiempo real",
        description:
          "Implementé un iframe sandbox con comunicación bidireccional para preview en vivo sin afectar el rendimiento del editor principal.",
      },
    ],
    github: "https://github.com",
    demo: "https://example.com",
    category: "SaaS",
    year: "2023",
    role: "Solo Developer",
    screenshots: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    ],
  },
];
