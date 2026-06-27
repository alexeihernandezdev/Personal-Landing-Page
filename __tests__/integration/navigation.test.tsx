import { afterEach, describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../test/renderWithProviders";
import {
  resetNavigationMocks,
  usePathname,
} from "../../test/mocks/next-navigation";

import { Navigation } from "@components/layout/Navigation";
import { personal } from "@data/personal";

afterEach(() => {
  resetNavigationMocks();
});

describe("Navigation", () => {
  it("renders the brand initials and full name", () => {
    usePathname.mockReturnValue("/");
    renderWithProviders(<Navigation />, { locale: "es" });
    expect(screen.getByText(personal.initials)).toBeInTheDocument();
    expect(screen.getAllByText(personal.fullName).length).toBeGreaterThan(0);
  });

  it("renders the spanish nav labels", () => {
    usePathname.mockReturnValue("/");
    renderWithProviders(<Navigation />, { locale: "es" });
    expect(screen.getAllByRole("link", { name: /^inicio$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /^proyectos$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /^contacto$/i }).length).toBeGreaterThan(0);
  });

  it("does not render services or blog nav links", () => {
    usePathname.mockReturnValue("/");
    renderWithProviders(<Navigation />, { locale: "es" });
    expect(screen.queryByRole("link", { name: /^servicios$/i })).toBeNull();
    expect(screen.queryByRole("link", { name: /^blog$/i })).toBeNull();
  });

  it("opens and closes the mobile menu via the toggle button", async () => {
    usePathname.mockReturnValue("/");
    renderWithProviders(<Navigation />, { locale: "es" });

    const toggle = screen.getByRole("button", {
      name: /abrir y cerrar el men[uú] principal/i,
    });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    const user = userEvent.setup();
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile menu after clicking a nav link", async () => {
    usePathname.mockReturnValue("/");
    renderWithProviders(<Navigation />, { locale: "es" });

    const toggle = screen.getByRole("button", {
      name: /abrir y cerrar el men[uú] principal/i,
    });
    const user = userEvent.setup();
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    const projectsLinks = screen.getAllByRole("link", { name: /^proyectos$/i });
    await user.click(projectsLinks[projectsLinks.length - 1]);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("hash anchors include the section id", () => {
    usePathname.mockReturnValue("/");
    renderWithProviders(<Navigation />, { locale: "es" });
    const projects = screen.getAllByRole("link", { name: /^proyectos$/i });
    expect(projects[0].getAttribute("href")).toMatch(/#projects$/);
  });
});
