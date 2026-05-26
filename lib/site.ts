import { contactInfo } from "@data/contact";
import { social } from "@data/social";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}

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
