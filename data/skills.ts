import type { SkillIconKey } from "./skillIcons";

export type { SkillIconKey };

export const skillGroups: {
  icon: SkillIconKey;
  technologies: string[];
}[] = [
  {
    icon: "layout",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    icon: "server",
    technologies: ["Node.js", "Express", "Python", "REST APIs"],
  },
  {
    icon: "database",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    icon: "code2",
    technologies: ["Git", "Docker", "AWS", "CI/CD"],
  },
];
