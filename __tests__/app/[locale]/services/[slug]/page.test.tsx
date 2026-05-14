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

describe("app/[locale]/services/[slug]/page.tsx", () => {
  it("renders ServiceDetail when slug exists", async () => {
    const service = services[0];
    const params = Promise.resolve({ locale: "es", slug: service.slug });
    const element = await ServiceDetailPage({ params });

    render(
      <NextIntlClientProvider locale="es" messages={getMockMessages("es")}>
        {element}
      </NextIntlClientProvider>,
    );

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

  it("generates metadata with slug for valid service", async () => {
    const service = services[0];
    const params = Promise.resolve({ locale: "es", slug: service.slug });
    const meta = await generateMetadata({ params });
    expect(meta.title).toBe(`Services - ${service.slug}`);
    expect(meta.description).toBe("Professional technology services");
  });

  it("returns 'Service not found' metadata for invalid slug", async () => {
    const params = Promise.resolve({ locale: "es", slug: "non-existent" });
    const meta = await generateMetadata({ params });
    expect(meta.title).toBe("Service not found");
  });
});
