import { contactInfo } from "./contact";
import { personal } from "./personal";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "mejores-practicas-react-2024",
    title: "Las Mejores Prácticas de React en 2024",
    excerpt: "Descubre las técnicas y patrones más actuales para escribir código React limpio, eficiente y mantenible.",
    content: `
# Las Mejores Prácticas de React en 2024

React sigue evolucionando y con ello, las mejores prácticas para desarrollar aplicaciones modernas. En este artículo exploraremos las técnicas más actuales.

## 1. Hooks Personalizados

Los hooks personalizados son una forma poderosa de reutilizar lógica entre componentes. Permiten extraer lógica de componentes en funciones reutilizables.

\`\`\`typescript
function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
\`\`\`

## 2. Composition Over Props

Preferir la composición sobre pasar muchas props hace que tus componentes sean más flexibles y fáciles de mantener.

## 3. Server Components

Con React Server Components, podemos renderizar componentes en el servidor, mejorando el rendimiento y la experiencia del usuario.

## Conclusión

Mantenerse actualizado con las mejores prácticas es esencial para escribir código de calidad. Estas técnicas te ayudarán a crear aplicaciones React más robustas y eficientes.
    `,
    date: "2024-03-15",
    readTime: "8 min",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    tags: ["React", "JavaScript", "Web Development"]
  },
  {
    id: "2",
    slug: "typescript-para-principiantes",
    title: "TypeScript para Principiantes: Guía Completa",
    excerpt: "Una introducción práctica a TypeScript que te llevará desde los conceptos básicos hasta técnicas avanzadas.",
    content: `
# TypeScript para Principiantes: Guía Completa

TypeScript se ha convertido en una herramienta esencial para el desarrollo moderno de JavaScript. Aprende cómo puede mejorar tu código.

## ¿Qué es TypeScript?

TypeScript es un superset de JavaScript que añade tipado estático opcional. Esto significa que puedes añadir tipos a tu código JavaScript para detectar errores antes de ejecutarlo.

## Tipos Básicos

\`\`\`typescript
// Tipos primitivos
let nombre: string = "${personal.givenName}";
let edad: number = ${personal.age};
let activo: boolean = true;

// Arrays
let tecnologias: string[] = ["React", "Node.js", "TypeScript"];

// Objetos
interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

const usuario: Usuario = {
  nombre: "${personal.fullName}",
  edad: ${personal.age},
  email: "${contactInfo.email}"
};
\`\`\`

## Ventajas de TypeScript

1. **Detección temprana de errores**: Los errores se detectan durante el desarrollo
2. **Mejor autocompletado**: Los editores pueden proporcionar mejores sugerencias
3. **Refactoring más seguro**: Los cambios en el código son más seguros
4. **Documentación implícita**: Los tipos sirven como documentación

## Conclusión

TypeScript puede parecer intimidante al principio, pero sus beneficios superan con creces la curva de aprendizaje inicial.
    `,
    date: "2024-03-10",
    readTime: "10 min",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    tags: ["TypeScript", "JavaScript", "Programming"]
  },
  {
    id: "3",
    slug: "optimizacion-rendimiento-web",
    title: "Optimización de Rendimiento Web: Técnicas Esenciales",
    excerpt: "Aprende cómo hacer que tus aplicaciones web sean más rápidas y eficientes con estas técnicas probadas.",
    content: `
# Optimización de Rendimiento Web: Técnicas Esenciales

El rendimiento web es crucial para la experiencia del usuario. Aquí te muestro técnicas esenciales para optimizar tus aplicaciones.

## 1. Lazy Loading

Carga componentes y recursos solo cuando sean necesarios:

\`\`\`typescript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

## 2. Memoización

Evita re-renderizados innecesarios con React.memo y useMemo:

\`\`\`typescript
const ExpensiveComponent = React.memo(({ data }) => {
  // Componente que solo se re-renderiza si data cambia
  return <div>{data}</div>;
});
\`\`\`

## 3. Optimización de Imágenes

- Usa formatos modernos como WebP
- Implementa lazy loading para imágenes
- Comprime las imágenes antes de subirlas

## 4. Code Splitting

Divide tu código en chunks más pequeños que se cargan bajo demanda.

## Conclusión

La optimización del rendimiento es un proceso continuo. Implementa estas técnicas y mide los resultados para ver el impacto real.
    `,
    date: "2024-03-05",
    readTime: "12 min",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Performance", "Web Development", "Optimization"]
  },
  {
    id: "4",
    slug: "diseno-sistemas-escalables",
    title: "Diseñando Sistemas de Software Escalables",
    excerpt: "Principios y patrones fundamentales para construir aplicaciones que crecen con tu negocio.",
    content: `
# Diseñando Sistemas de Software Escalables

La escalabilidad es clave cuando tu aplicación crece. Aprende los principios fundamentales para diseñar sistemas que puedan crecer contigo.

## Principios de Escalabilidad

### 1. Separación de Responsabilidades

Divide tu aplicación en servicios independientes que puedan escalar por separado.

### 2. Stateless Design

Diseña tus servicios para que sean stateless siempre que sea posible. Esto facilita el escalado horizontal.

### 3. Caching Inteligente

Implementa estrategias de caching en múltiples niveles:

\`\`\`typescript
// Cache en memoria
const cache = new Map();

function getData(key: string) {
  if (cache.has(key)) {
    return cache.get(key);
  }
  
  const data = fetchFromDatabase(key);
  cache.set(key, data);
  return data;
}
\`\`\`

## Patrones de Arquitectura

- **Microservicios**: Divide tu aplicación en servicios pequeños e independientes
- **Event-Driven**: Usa eventos para comunicación asíncrona entre servicios
- **CQRS**: Separa las operaciones de lectura y escritura

## Monitoreo y Observabilidad

No puedes escalar lo que no puedes medir. Implementa:
- Logging estructurado
- Métricas de rendimiento
- Trazado distribuido

## Conclusión

Diseñar sistemas escalables requiere pensar en el futuro, pero sin sobre-ingeniería. Empieza simple y escala cuando lo necesites.
    `,
    date: "2024-02-28",
    readTime: "15 min",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["Architecture", "Scalability", "System Design"]
  },
  {
    id: "5",
    slug: "css-moderno-2024",
    title: "CSS Moderno: Características que Debes Conocer",
    excerpt: "Explora las nuevas características de CSS que están cambiando la forma en que diseñamos interfaces web.",
    content: `
# CSS Moderno: Características que Debes Conocer

CSS ha evolucionado significativamente. Estas son las características modernas que cambiarán tu forma de escribir estilos.

## 1. Container Queries

Las container queries permiten estilos basados en el tamaño del contenedor:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
\`\`\`

## 2. CSS Grid y Subgrid

CSS Grid ha madurado y ahora incluye subgrid para layouts complejos:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid-item {
  display: grid;
  grid-template-rows: subgrid;
}
\`\`\`

## 3. CSS Custom Properties (Variables)

Las variables CSS hacen que tus estilos sean más mantenibles:

\`\`\`css
:root {
  --color-primary: #06B6D4;
  --spacing-unit: 1rem;
}

.button {
  background: var(--color-primary);
  padding: var(--spacing-unit);
}
\`\`\`

## 4. Cascade Layers

Organiza mejor tus estilos con cascade layers:

\`\`\`css
@layer base, components, utilities;

@layer base {
  /* Estilos base */
}

@layer components {
  /* Componentes */
}
\`\`\`

## Conclusión

CSS moderno ofrece herramientas poderosas para crear interfaces más mantenibles y responsivas. ¡Es hora de adoptarlas!
    `,
    date: "2024-02-20",
    readTime: "7 min",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    tags: ["CSS", "Web Design", "Frontend"]
  },
  {
    id: "6",
    slug: "seguridad-aplicaciones-web",
    title: "Seguridad en Aplicaciones Web: Guía Práctica",
    excerpt: "Protege tus aplicaciones web de vulnerabilidades comunes con estas prácticas de seguridad esenciales.",
    content: `
# Seguridad en Aplicaciones Web: Guía Práctica

La seguridad web es fundamental. Aprende a proteger tus aplicaciones de las amenazas más comunes.

## Vulnerabilidades Comunes

### 1. XSS (Cross-Site Scripting)

Nunca confíes en la entrada del usuario. Siempre sanitiza y escapa el contenido:

\`\`\`typescript
// ❌ Peligroso
element.innerHTML = userInput;

// ✅ Seguro
element.textContent = userInput;
\`\`\`

### 2. CSRF (Cross-Site Request Forgery)

Implementa tokens CSRF en todos los formularios:

\`\`\`typescript
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

fetch('/api/data', {
  method: 'POST',
  headers: {
    'X-CSRF-Token': csrfToken
  }
});
\`\`\`

### 3. SQL Injection

Usa queries parametrizadas siempre:

\`\`\`typescript
// ❌ Vulnerable
const query = \`SELECT * FROM users WHERE id = \${userId}\`;

// ✅ Seguro
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
\`\`\`

## Mejores Prácticas

1. **HTTPS en todo momento**: Nunca transmitas datos sensibles sin encriptación
2. **Autenticación fuerte**: Implementa autenticación de dos factores
3. **Validación de entrada**: Valida todo en el servidor, no solo en el cliente
4. **Principio de mínimo privilegio**: Los usuarios solo deben tener los permisos necesarios

## Headers de Seguridad

Implementa headers de seguridad importantes:

\`\`\`
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000
\`\`\`

## Conclusión

La seguridad no es opcional. Implementa estas prácticas desde el inicio de tu proyecto.
    `,
    date: "2024-02-15",
    readTime: "11 min",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    tags: ["Security", "Web Development", "Best Practices"]
  }
];
