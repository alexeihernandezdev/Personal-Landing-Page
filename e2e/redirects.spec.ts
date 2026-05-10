import { test, expect } from "@playwright/test";

test.describe("redirects", () => {
  test("/ redirects to /es (default locale)", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveURL(/\/es\/?$/);
  });

  test("/es/project redirects to /es", async ({ page }) => {
    await page.goto("/es/project");
    await expect(page).toHaveURL(/\/es\/?$/);
  });

  test("/en/project redirects to /en", async ({ page }) => {
    await page.goto("/en/project");
    await expect(page).toHaveURL(/\/en\/?$/);
  });
});
