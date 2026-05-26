import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { getMockMessages } from "../../../../../test/messages";
import {
  notFound,
  resetNavigationMocks,
  NextNotFoundError,
} from "../../../../../test/mocks/next-navigation";
import { services } from "@data/services";

vi.mock("@/components/pages/services/ServiceDetail", () => ({
  default: ({ service, locale }: { service: { slug: string }; locale: string }) => (
    <div data-testid="mock-service-detail">
      <span data-testid="service-slug">{service.slug}</span>
      <span data-testid="service-locale">{locale}</span>
    </div>
  ),
}));

import ServiceDetailPage, {
  generateMetadata,
} from "@/app/[locale]/services/[slug]/page";

beforeEach(() => {
  resetNavigationMocks();
});

afterEach(() => {
  vi.restoreAllMocks();
});

async function renderPage(locale: "es" | "en", slug: string) {
  const params = Promise.resolve({ locale, slug });
  const element = await ServiceDetailPage({ params });
  return render(
    <NextIntlClientProvider locale={locale} messages={getMockMessages(locale)}>
      {element}
    </NextIntlClientProvider>,
  );
}

describe("app/[locale]/services/[slug]/page.tsx", () => {
  it("renders ServiceDetail when slug exists", async () => {
    const service = services[0];
    await renderPage("es", service.slug);

    expect(screen.getByTestId("mock-service-detail")).toBeInTheDocument();
    expect(screen.getByTestId("service-slug")).toHaveTextContent(service.slug);
    expect(screen.getByTestId("service-locale")).toHaveTextContent("es");
  });

  it("invokes notFound for invalid slug", async () => {
    const params = Promise.resolve({
      locale: "es",
      slug: "non-existent-service",
    });

    await expect(ServiceDetailPage({ params })).rejects.toThrow(
      NextNotFoundError,
    );
    expect(notFound).toHaveBeenCalledTimes(1);
  });

  it("generates metadata with i18n title and description for valid service (es)", async () => {
    const service = services[0];
    const params = Promise.resolve({ locale: "es", slug: service.slug });
    const meta = await generateMetadata({ params });
    expect(typeof meta.title).toBe("string");
    expect((meta.title as string).length).toBeGreaterThan(0);
    expect(typeof meta.description).toBe("string");
    expect((meta.description as string).length).toBeGreaterThan(0);
  });

  it("returns 'Service not found' metadata for invalid slug", async () => {
    const params = Promise.resolve({ locale: "es", slug: "non-existent" });
    const meta = await generateMetadata({ params });
    expect(meta.title).toBe("Service not found");
  });

  it("emits Service + BreadcrumbList JSON-LD", async () => {
    const service = services[0];
    await renderPage("es", service.slug);

    const script = document.querySelector(
      'script[type="application/ld+json"]',
    ) as HTMLScriptElement | null;
    expect(script).not.toBeNull();

    const json = JSON.parse(script!.innerHTML);
    expect(json["@context"]).toBe("https://schema.org");
    const types = (json["@graph"] as Array<{ "@type": string }>).map(
      (n) => n["@type"],
    );
    expect(types).toContain("Service");
    expect(types).toContain("BreadcrumbList");
  });
});
