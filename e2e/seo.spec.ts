import { test, expect } from "@playwright/test";

const expectations = {
  es: {
    titleRe: /alexei hern[aá]ndez.*portfolio/i,
    descriptionRe: /desarrollador web/i,
    ogLocale: "es_ES",
    htmlLang: "es",
  },
  en: {
    titleRe: /alexei hern[aá]ndez.*portfolio/i,
    descriptionRe: /full stack/i,
    ogLocale: "en_US",
    htmlLang: "en",
  },
} as const;

for (const locale of ["es", "en"] as const) {
  test.describe(`seo (${locale})`, () => {
    test(`/${locale} exposes correct meta and OG tags`, async ({ page }) => {
      await page.goto(`/${locale}`);

      await expect(page.locator("html")).toHaveAttribute(
        "lang",
        expectations[locale].htmlLang,
      );
      await expect(page).toHaveTitle(expectations[locale].titleRe);

      const description = page.locator('meta[name="description"]');
      await expect(description).toHaveAttribute(
        "content",
        expectations[locale].descriptionRe,
      );

      const ogLocale = page.locator('meta[property="og:locale"]');
      await expect(ogLocale).toHaveAttribute(
        "content",
        expectations[locale].ogLocale,
      );

      const ogType = page.locator('meta[property="og:type"]');
      await expect(ogType).toHaveAttribute("content", "website");

      const twitter = page.locator('meta[name="twitter:card"]');
      await expect(twitter).toHaveAttribute("content", "summary_large_image");
    });

    test(`/${locale} embeds JSON-LD structured data`, async ({ page }) => {
      await page.goto(`/${locale}`);
      const scripts = await page
        .locator('script[type="application/ld+json"]')
        .allTextContents();
      expect(scripts.length).toBeGreaterThan(0);
      const parsed = JSON.parse(scripts[0]);
      expect(parsed["@context"]).toBe("https://schema.org");
      expect(Array.isArray(parsed["@graph"])).toBeTruthy();
      const types = (parsed["@graph"] as Array<{ "@type": string }>).map(
        (n) => n["@type"],
      );
      expect(types).toContain("Person");
      expect(types).toContain("WebSite");
    });
  });
}
