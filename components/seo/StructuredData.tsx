import { getTranslations } from "next-intl/server";
import { contactInfo } from "@/data/contact";
import { personal } from "@/data/personal";
import { social } from "@/data/social";

type Props = {
  locale: string;
  /** Canonical site origin (same logic as metadata base URL). */
  siteUrl: string;
};

/**
 * JSON-LD for the locale home. Single graph per locale layout request.
 *
 * URL convention: both Person.url and WebSite.url use `${siteUrl}/${locale}` (localized
 * home), so schema matches page language and metadata; `siteUrl` alone remains the
 * deployment origin used elsewhere for absolute assets (e.g. OG images).
 */
export async function StructuredData({ locale, siteUrl }: Props) {
  const origin = siteUrl.replace(/\/$/, "");
  const homeUrl = `${origin}/${locale}`;

  const tMetadata = await getTranslations({ locale, namespace: "metadata" });
  const tHero = await getTranslations({ locale, namespace: "hero" });

  const personId = `${homeUrl}#person`;
  const websiteId = `${homeUrl}#website`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: personal.fullName,
        url: homeUrl,
        jobTitle: tHero("role"),
        sameAs: [social.github, social.linkedin],
        email: contactInfo.email,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: tMetadata("siteName"),
        description: tMetadata("description"),
        url: homeUrl,
        publisher: { "@id": personId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
