import { test, expect } from "@playwright/test";

test.describe("navigation - desktop", () => {
  test("clicking 'Proyectos' scrolls to #projects", async ({ page }) => {
    await page.goto("/es");
    await page.getByRole("link", { name: /^proyectos$/i }).first().click();
    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator("#projects")).toBeInViewport();
  });
});

test.describe("navigation - locale switcher", () => {
  test("switching to EN from home navigates to /en", async ({ page }) => {
    await page.goto("/es");
    await page
      .getByRole("link", { name: /switch to english|cambiar a ingl/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/en\/?$/);
    await expect(
      page.getByRole("heading", { name: /full stack web developer/i }),
    ).toBeVisible();
  });

  test("switching locale on /es/blog preserves the path", async ({ page }) => {
    await page.goto("/es/blog");
    await page
      .getByRole("link", { name: /switch to english|cambiar a ingl/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/en\/blog$/);
  });
});

test.describe("navigation - mobile", () => {
  test.use({ viewport: { width: 375, height: 720 } });

  test("hamburger toggles mobile menu open and closed", async ({ page }) => {
    await page.goto("/es");
    const toggle = page.getByRole("button", {
      name: /abrir y cerrar el men[uú] principal/i,
    });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  test("clicking a nav link in mobile menu closes it", async ({ page }) => {
    await page.goto("/es");
    const toggle = page.getByRole("button", {
      name: /abrir y cerrar el men[uú] principal/i,
    });
    await toggle.click();

    const panel = page.locator("#mobile-navigation-menu");
    await panel
      .getByRole("link", { name: /^proyectos$/i })
      .first()
      .click();

    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
