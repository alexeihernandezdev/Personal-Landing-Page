import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { getMockMessages } from "../../../../../test/messages";
import {
  notFound,
  resetNavigationMocks,
  NextNotFoundError,
} from "../../../../../test/mocks/next-navigation";
import { getProjects } from "@/data/projects";

vi.mock("@components/layout/Navigation", () => ({
  Navigation: () => <nav data-testid="mock-navigation" />,
}));
vi.mock("@components/layout/FooterClient", () => ({
  FooterClient: () => <footer data-testid="mock-footer-client" />,
}));
vi.mock("@components/layout/MouseGlow", () => ({
  MouseGlow: () => <div data-testid="mock-mouse-glow" />,
}));

import ProjectDetailPage from "@/app/[locale]/project/[slug]/page";

afterEach(() => {
  resetNavigationMocks();
});

async function renderPage(locale: "es" | "en", slug: string) {
  const params = Promise.resolve({ locale, slug });
  const element = await ProjectDetailPage({ params });
  return render(
    <NextIntlClientProvider locale={locale} messages={getMockMessages(locale)}>
      {element}
    </NextIntlClientProvider>,
  );
}

describe("app/[locale]/project/[slug]/page.tsx", () => {
  it("renders the project detail when slug exists (es)", async () => {
    const project = getProjects("es")[0];
    await renderPage("es", project.slug);

    expect(
      screen.getByRole("heading", { level: 1, name: project.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(project.category)).toBeInTheDocument();
    expect(screen.getByText(project.year)).toBeInTheDocument();
    expect(screen.getByText(project.role)).toBeInTheDocument();
    for (const tech of project.technologies.slice(0, 3)) {
      expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
    }
  });

  it("renders the english version using english data when locale is en", async () => {
    const project = getProjects("en")[0];
    await renderPage("en", project.slug);

    expect(
      screen.getByRole("heading", { level: 1, name: project.title }),
    ).toBeInTheDocument();
  });

  it("calls notFound for an invalid slug", async () => {
    const params = Promise.resolve({ locale: "es", slug: "this-slug-does-not-exist" });

    await expect(ProjectDetailPage({ params })).rejects.toThrow(NextNotFoundError);
    expect(notFound).toHaveBeenCalledTimes(1);
  });

  it("emits SoftwareApplication + BreadcrumbList JSON-LD", async () => {
    const project = getProjects("es")[0];
    await renderPage("es", project.slug);

    const script = document.querySelector(
      'script[type="application/ld+json"]',
    ) as HTMLScriptElement | null;
    expect(script).not.toBeNull();

    const json = JSON.parse(script!.innerHTML);
    expect(json["@context"]).toBe("https://schema.org");
    const types = (json["@graph"] as Array<{ "@type": string }>).map(
      (n) => n["@type"],
    );
    expect(types).toContain("SoftwareApplication");
    expect(types).toContain("BreadcrumbList");
  });
});
