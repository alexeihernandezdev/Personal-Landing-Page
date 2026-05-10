import { test, expect } from "@playwright/test";

const FORMSPREE_RE = /formspree\.io\/f\/xrerlela/;

test.describe("contact form", () => {
  test("submitting the form with a 200 from Formspree shows the success state", async ({
    page,
  }) => {
    await page.route(FORMSPREE_RE, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true }),
      });
    });
    // Backend CMS API may not be reachable from the test environment; stub it.
    await page.route(/\/messages$/, async (route) => {
      await route.fulfill({ status: 201, body: "{}" });
    });

    await page.goto("/es#contact");
    await page.getByLabel(/nombre/i).fill("Alexei");
    await page.getByLabel(/email|correo/i).fill("ah@example.com");
    await page.getByLabel(/mensaje/i).fill("Hello there!");
    await page.getByRole("button", { name: /enviar/i }).click();

    await expect(
      page.getByRole("heading", { name: /mensaje enviado/i }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: /enviar otro/i })).toBeVisible();
  });

  test("submitting the form with a 500 from Formspree shows an error toast", async ({
    page,
  }) => {
    await page.route(FORMSPREE_RE, async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ error: "boom" }),
      });
    });
    await page.route(/\/messages$/, async (route) => {
      await route.fulfill({ status: 500, body: "{}" });
    });

    await page.goto("/es#contact");
    await page.getByLabel(/nombre/i).fill("Alexei");
    await page.getByLabel(/email|correo/i).fill("ah@example.com");
    await page.getByLabel(/mensaje/i).fill("Hello there!");
    await page.getByRole("button", { name: /enviar/i }).click();

    await expect(page.getByRole("alert")).toBeVisible();
  });
});
