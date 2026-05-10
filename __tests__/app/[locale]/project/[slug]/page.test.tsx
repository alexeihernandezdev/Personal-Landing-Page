import { afterEach, describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../../test/renderWithProviders";
import {
  resetNavigationMocks,
  setMockParams,
  useParams,
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

describe("app/[locale]/project/[slug]/page.tsx", () => {
  it("renders the project detail when slug exists (es)", () => {
    const project = getProjects("es")[0];
    setMockParams({ slug: project.slug });
    useParams.mockReturnValue({ slug: project.slug });

    renderWithProviders(<ProjectDetailPage />, { locale: "es" });

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

  it("renders the english version using english data when locale is en", () => {
    const project = getProjects("en")[0];
    setMockParams({ slug: project.slug });
    useParams.mockReturnValue({ slug: project.slug });

    renderWithProviders(<ProjectDetailPage />, { locale: "en" });

    expect(
      screen.getByRole("heading", { level: 1, name: project.title }),
    ).toBeInTheDocument();
  });

  it("renders the not-found state for an invalid slug", () => {
    setMockParams({ slug: "this-slug-does-not-exist" });
    useParams.mockReturnValue({ slug: "this-slug-does-not-exist" });

    renderWithProviders(<ProjectDetailPage />, { locale: "es" });

    expect(
      screen.getByRole("heading", { level: 1, name: /no encontrado/i }),
    ).toBeInTheDocument();
    const back = screen.getByRole("link", { name: /volver a proyectos/i });
    expect(back).toBeInTheDocument();
    expect(back.getAttribute("href")).toMatch(/^\/es\/?#projects$/);
  });

  it("treats array slug params by reading the first element", () => {
    const project = getProjects("es")[1];
    useParams.mockReturnValue({ slug: [project.slug, "ignored"] });

    renderWithProviders(<ProjectDetailPage />, { locale: "es" });

    expect(
      screen.getByRole("heading", { level: 1, name: project.title }),
    ).toBeInTheDocument();
  });
});
