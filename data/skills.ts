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
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Next.js",
      "HTML",
      "CSS",
    ],
  },
  {
    key: "backend",
    icon: "server",
    technologies: [
      "Node.js",
      "Express",
      "NestJS",
      "C#",
      ".NET",
      "PHP",
      "Laravel",
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
    technologies: ["Git", "Docker", "AWS", "CI/CD"],
  },
];
