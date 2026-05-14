import { test, expect } from "@playwright/test";

const KNOWN_PROJECT_SLUG = "leberp-erp-ecosystem";

test.describe("projects", () => {
  test("/es/project/<valid-slug> shows the project detail", async ({
    page,
  }) => {
    const response = await page.goto(`/es/project/${KNOWN_PROJECT_SLUG}`);
    expect(response?.ok()).toBeTruthy();

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /tecnolog[ií]as/i }),
    ).toBeVisible();
  });

  test("/es/project/<invalid-slug> shows not-found and back link goes home", async ({
    page,
  }) => {
    await page.goto("/es/project/not-a-real-project");
    await expect(
      page.getByRole("heading", { level: 1, name: /no encontrad/i }),
    ).toBeVisible();
    const back = page.getByRole("link", { name: /volver a proyectos/i });
    await expect(back).toBeVisible();
    await back.click();
    await expect(page).toHaveURL(/\/es\/?#projects$/);
  });

  test("/en/project/<valid-slug> renders the english version", async ({
    page,
  }) => {
    await page.goto(`/en/project/${KNOWN_PROJECT_SLUG}`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
