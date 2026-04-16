# Alexei Hernández — Portfolio

Sitio personal (Next.js App Router) con perfil, proyectos, blog y contacto. Incluye internacionalización (`next-intl`, español e inglés), metadatos y Open Graph, y envío de mensajes vía API OpenAPI (`@alexei2000/cms-openapi`).

## Requisitos

- [Node.js](https://nodejs.org/) **20** o superior (recomendado; alineado con las dependencias del proyecto)

## Instalación y comandos

```bash
npm install
```

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Compilación de producción |
| `npm run start` | Sirve la build (tras `npm run build`) |
| `npm run lint` | ESLint |

## Variables de entorno

Defínelas en tu entorno local (por ejemplo en un archivo `.env.local`, no versionado) o en el panel de tu proveedor de hosting.

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Origen público HTTPS del sitio (sin barra final). Se usa como base para metadatos absolutos: `metadataBase`, datos estructurados y previsualizaciones OG/Twitter. Si no está definida, en despliegues en Vercel se puede usar `VERCEL_URL` como respaldo; en local por defecto se usa `http://localhost:3000`. Ver `app/[locale]/layout.tsx`. |
| `NEXT_PUBLIC_BACKEND_API_URL` | URL base del backend para el cliente OpenAPI de mensajes (`MessagesApi`). Usada en `api/apiconfig.ts` y al crear mensajes desde el formulario de contacto (`api/messages/createMessage.ts`). |

## Despliegue

En producción, configura las variables anteriores en tu plataforma (por ejemplo [Vercel](https://vercel.com/docs/concepts/projects/environment-variables)). No se incluye aquí una URL pública fija del proyecto; añádela en este README si quieres documentarla explícitamente.
