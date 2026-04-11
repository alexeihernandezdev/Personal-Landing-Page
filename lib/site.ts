import { contactInfo } from "@data/contact";
import { social } from "@data/social";

/** Datos no lingüísticos: enlaces, email, ids de anclas estables. */
export const anchorIds = {
  hero: "hero",
  about: "about",
  projects: "projects",
  contact: "contact",
} as const;

export const siteConfig = {
  email: contactInfo.email,
  social: {
    github: social.github,
    linkedin: social.linkedin,
  },
} as const;
