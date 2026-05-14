import { test, expect } from "@playwright/test";

const heroByLocale = {
  es: { greeting: "Hola, soy", role: "Desarrollador Web Full Stack" },
  en: { greeting: "Hi, I'm", role: "Full Stack Web Developer" },
};

test.describe("home", () => {
  for (const locale of ["es", "en"] as const) {
    test(`renders home with hero and key sections (${locale})`, async ({
      page,
    }) => {
      const response = await page.goto(`/${locale}`);
      expect(response?.ok()).toBeTruthy();

      await expect(
        page.getByText(heroByLocale[locale].greeting),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", { name: heroByLocale[locale].role }),
      ).toBeVisible();

      await expect(page.locator("#hero")).toBeVisible();
      await expect(page.locator("#skills")).toBeAttached();
      await expect(page.locator("#projects")).toBeAttached();
      await expect(page.locator("#contact")).toBeAttached();
    });
  }

  test("skip-to-content link is the first focusable element and reveals on focus", async ({
    page,
  }) => {
    await page.goto("/es");
    await page.keyboard.press("Tab");
    const focused = page.locator(":focus");
    await expect(focused).toHaveText(/saltar al contenido/i);
    await expect(focused).toHaveAttribute("href", "#main-content");
  });

  test("renders the footer with the developer name", async ({ page }) => {
    await page.goto("/es");
    const footer = page.locator("footer");
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toContainText("Alexei Hernández");
  });
});
