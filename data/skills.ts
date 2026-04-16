import type { SkillIconKey } from "./skillIcons";

export type { SkillIconKey };

export const skillGroups: {
  key: string;
  icon: SkillIconKey;
  technologies: string[];
}[] = [
  {
    key: "frontend",
    icon: "layout",
    technologies: [
      "CSS",
      "CSS Modules",
      "Electron",
      "HTML",
      "Leaflet",
      "MUI",
      "Next.js",
      "React",
      "React Hook Form",
      "React Leaflet",
      "Redux Toolkit",
      "Tailwind CSS",
      "TanStack Query",
      "TypeScript",
      "Vite",
      "Zod",
    ],
  },
  {
    key: "backend",
    icon: "server",
    technologies: [
      ".NET",
      "ASP.NET Core",
      "Azure Functions",
      "C#",
      "Entity Framework Core",
      "Express",
      "Java",
      "Laravel",
      "NestJS",
      "Node.js",
      "PHP",
      "Python",
      "REST APIs",
    ],
  },
  {
    key: "database",
    icon: "database",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Redis",
      "SQLite",
      "SQL Server",
      "Firebase",
    ],
  },
  {
    key: "devops",
    icon: "code2",
    technologies: [
      "Adobe Illustrator",
      "AWS",
      "Azure",
      "Box2D",
      "Box2DLights",
      "CI/CD",
      "Docker",
      "Git",
      "GitHub Actions",
      "Gradle",
      "LibGDX",
      "TeaVM",
    ],
  },
];
