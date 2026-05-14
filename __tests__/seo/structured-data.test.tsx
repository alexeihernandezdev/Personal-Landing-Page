import { afterEach, describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { setMockServerLocale } from "../../test/mocks/next-intl-server";
import { StructuredData } from "@/components/seo/StructuredData";

afterEach(() => {
  vi.restoreAllMocks();
});

async function renderStructured(locale: "es" | "en", siteUrl: string) {
  setMockServerLocale(locale);
  const element = await StructuredData({ locale, siteUrl });
  return render(element);
}

function readJsonLd(): Record<string, unknown> {
  const script = document.querySelector(
    'script[type="application/ld+json"]',
  ) as HTMLScriptElement | null;
  expect(script).not.toBeNull();
  return JSON.parse(script!.innerHTML);
}

describe("StructuredData", () => {
  it("emits a schema.org @graph with Person and WebSite entries", async () => {
    await renderStructured("es", "https://www.example.com");
    const json = readJsonLd();
    expect(json["@context"]).toBe("https://schema.org");
    const graph = json["@graph"] as Array<Record<string, unknown>>;
    const types = graph.map((n) => n["@type"]);
    expect(types).toContain("Person");
    expect(types).toContain("WebSite");
  });

  it("strips trailing slash from siteUrl when building urls", async () => {
    await renderStructured("es", "https://www.example.com/");
    const json = readJsonLd();
    const graph = json["@graph"] as Array<Record<string, unknown>>;
    const person = graph.find((n) => n["@type"] === "Person")!;
    expect(person.url).toBe("https://www.example.com/es");
    expect(person["@id"]).toBe("https://www.example.com/es#person");
  });

  it("uses the english strings for english locale", async () => {
    await renderStructured("en", "https://www.example.com");
    const json = readJsonLd();
    const graph = json["@graph"] as Array<Record<string, unknown>>;
    const person = graph.find((n) => n["@type"] === "Person")!;
    expect(person.url).toBe("https://www.example.com/en");
    expect(typeof person.jobTitle).toBe("string");
    expect(person.jobTitle as string).toMatch(/full stack/i);
  });
});
