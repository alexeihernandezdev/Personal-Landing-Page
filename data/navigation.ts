export const navItems = [
  { type: "hash" as const, section: "hero" as const, navKey: "home" as const },
  { type: "hash" as const, section: "skills" as const, navKey: "skills" as const },
  { type: "hash" as const, section: "projects" as const, navKey: "projects" as const },
  { type: "path" as const, path: "/services" as const, navKey: "services" as const },
  { type: "path" as const, path: "/blog" as const, navKey: "blog" as const },
  { type: "hash" as const, section: "contact" as const, navKey: "contact" as const },
] as const;
