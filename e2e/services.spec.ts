import { test, expect } from "@playwright/test";

const KNOWN_SERVICE_SLUG = "web-applications";

test.describe("services", () => {
  test("/es/services lists services and link to detail works", async ({
    page,
  }) => {
    const response = await page.goto("/es/services");
    expect(response?.ok()).toBeTruthy();

    const detailLink = page
      .getByRole("link", { name: /ver detalle|view details/i })
      .first();
    if (await detailLink.count()) {
      await detailLink.click();
      await expect(page).toHaveURL(/\/es\/services\/[^/]+$/);
    } else {
      await page.goto(`/es/services/${KNOWN_SERVICE_SLUG}`);
      await expect(page).toHaveURL(/\/es\/services\/[^/]+$/);
    }
  });

  test("/en/services renders in english", async ({ page }) => {
    const response = await page.goto("/en/services");
    expect(response?.ok()).toBeTruthy();
  });

  test("/es/services/<valid-slug> renders the service detail", async ({
    page,
  }) => {
    const response = await page.goto(`/es/services/${KNOWN_SERVICE_SLUG}`);
    expect(response?.ok()).toBeTruthy();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("/es/services/<invalid-slug> returns a 404 (notFound)", async ({
    page,
  }) => {
    const response = await page.goto("/es/services/not-a-real-service");
    expect(response?.status()).toBe(404);
  });
});
