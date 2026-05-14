import { afterEach, describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../test/renderWithProviders";
import {
  resetNavigationMocks,
  usePathname,
} from "../../test/mocks/next-navigation";

import { LocaleSwitcher } from "@components/layout/LocaleSwitcher";

afterEach(() => {
  resetNavigationMocks();
});

describe("LocaleSwitcher", () => {
  it("renders both ES and EN options with the active locale marked", () => {
    usePathname.mockReturnValue("/blog");
    renderWithProviders(<LocaleSwitcher />, { locale: "es" });

    const es = screen.getByRole("link", { name: /es/i });
    const en = screen.getByRole("link", { name: /switch to english|cambiar a ingl/i });

    expect(es).toHaveAttribute("aria-current", "page");
    expect(en).not.toHaveAttribute("aria-current", "page");
  });

  it("preserves the current pathname when switching locale", () => {
    usePathname.mockReturnValue("/blog");
    renderWithProviders(<LocaleSwitcher />, { locale: "es" });

    const en = screen.getByRole("link", {
      name: /switch to english|cambiar a ingl/i,
    });
    expect(en).toHaveAttribute("href", "/en/blog");
  });

  it("calls onNavigate when a locale link is clicked", async () => {
    const onNavigate = vi.fn();
    usePathname.mockReturnValue("/");
    renderWithProviders(
      <LocaleSwitcher onNavigate={onNavigate} />,
      { locale: "es" },
    );

    const en = screen.getByRole("link", {
      name: /switch to english|cambiar a ingl/i,
    });
    const user = userEvent.setup();
    await user.click(en);
    expect(onNavigate).toHaveBeenCalledTimes(1);
  });

  it("shows english locale as active when locale is en", () => {
    usePathname.mockReturnValue("/");
    renderWithProviders(<LocaleSwitcher />, { locale: "en" });

    const en = screen.getByRole("link", { name: /en/i });
    expect(en).toHaveAttribute("aria-current", "page");
  });

  it("uses translated aria-label for the group", () => {
    usePathname.mockReturnValue("/");
    renderWithProviders(<LocaleSwitcher />, { locale: "es" });
    expect(screen.getByRole("group", { name: /idioma/i })).toBeInTheDocument();
  });
});
