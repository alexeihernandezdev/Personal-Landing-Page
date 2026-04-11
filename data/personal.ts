/** Datos de perfil no lingüísticos o propios (nombres propios, URLs, métricas). Los textos de UI viven en messages/. */
export const personal = {
  fullName: "Alexei Hernández",
  givenName: "Alexei",
  age: 26,
  initials: "AH",
  heroImageUrl:
    "/hero.jpg",
  profileImageUrl:
    "/me.jpg",
  yearsExperience: 6,
  /** Skills listado en la animación del terminal (nombres de tecnología). */
  codeConsoleSkills: ["React", "Node.js", "TypeScript"] as const,
} as const;
