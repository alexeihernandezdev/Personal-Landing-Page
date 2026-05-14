import { test, expect } from "@playwright/test";

test.describe("blog", () => {
  test("/es/blog shows the personal blog hero and coming-soon section", async ({
    page,
  }) => {
    const response = await page.goto("/es/blog");
    expect(response?.ok()).toBeTruthy();
    await expect(
      page.getByRole("heading", { level: 1, name: /blog personal/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: /próximamente/i }),
    ).toBeVisible();
  });

  test("/en/blog shows the english version", async ({ page }) => {
    await page.goto("/en/blog");
    await expect(
      page.getByRole("heading", { level: 1, name: /personal blog/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: /coming soon/i }),
    ).toBeVisible();
  });

  test("/es/blog/<invalid> shows the not-found state and the back link works", async ({
    page,
  }) => {
    await page.goto("/es/blog/non-existent-post");
    await expect(
      page.getByRole("heading", { level: 1, name: /no encontrad/i }),
    ).toBeVisible();
    await page.getByRole("link", { name: /volver al blog/i }).click();
    await expect(page).toHaveURL(/\/es\/blog$/);
  });
});
