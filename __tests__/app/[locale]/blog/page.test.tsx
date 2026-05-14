import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../test/renderWithProviders";

vi.mock("@components/layout/Navigation", () => ({
  Navigation: () => <nav data-testid="mock-navigation" />,
}));
vi.mock("@components/layout/FooterClient", () => ({
  FooterClient: () => <footer data-testid="mock-footer-client" />,
}));
vi.mock("@components/layout/MouseGlow", () => ({
  MouseGlow: () => <div data-testid="mock-mouse-glow" />,
}));

import BlogPage from "@/app/[locale]/blog/page";

describe("app/[locale]/blog/page.tsx", () => {
  it("renders heading and coming-soon section in spanish", () => {
    renderWithProviders(<BlogPage />, { locale: "es" });

    expect(
      screen.getByRole("heading", { level: 1, name: /blog personal/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /próximamente/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/estamos preparando art[ií]culos/i),
    ).toBeInTheDocument();
  });

  it("renders heading and coming-soon section in english", () => {
    renderWithProviders(<BlogPage />, { locale: "en" });

    expect(
      screen.getByRole("heading", { level: 1, name: /personal blog/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /coming soon/i }),
    ).toBeInTheDocument();
  });

  it("includes Navigation, MouseGlow and Footer", () => {
    renderWithProviders(<BlogPage />, { locale: "es" });
    expect(screen.getByTestId("mock-navigation")).toBeInTheDocument();
    expect(screen.getByTestId("mock-mouse-glow")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer-client")).toBeInTheDocument();
  });

  it("provides #main-content focus target with tabIndex -1", () => {
    renderWithProviders(<BlogPage />, { locale: "es" });
    const main = document.getElementById("main-content");
    expect(main?.tagName).toBe("MAIN");
    expect(main).toHaveAttribute("tabIndex", "-1");
  });
});
