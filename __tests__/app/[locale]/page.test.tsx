import { afterEach, describe, expect, it, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { getMockMessages } from "../../../test/messages";
import { setMockServerLocale } from "../../../test/mocks/next-intl-server";

vi.mock("@/components/pages/home/hero/Hero", () => ({
  Hero: () => <div data-testid="mock-hero">hero</div>,
}));
vi.mock("@/components/pages/home/profile/ProfileSection", () => ({
  ProfileSection: () => <div data-testid="mock-profile">profile</div>,
}));
vi.mock("@/components/pages/home/skills/Skills", () => ({
  Skills: () => <div data-testid="mock-skills">skills</div>,
}));
vi.mock("@/components/pages/projects/Projects", () => ({
  Projects: () => <div data-testid="mock-projects">projects</div>,
}));
vi.mock("@components/layout/Footer", () => ({
  Footer: () => <footer data-testid="mock-footer">footer</footer>,
}));
vi.mock("@components/layout/Navigation", () => ({
  Navigation: () => <nav data-testid="mock-navigation">nav</nav>,
}));
vi.mock("@components/layout/MouseGlow", () => ({
  MouseGlow: () => <div data-testid="mock-mouse-glow" />,
}));
vi.mock("@/components/pages/home/console/CodeConsole", () => ({
  CodeConsole: () => <div data-testid="mock-console">console</div>,
}));
vi.mock("@/components/pages/home/contact/Contact", () => ({
  Contact: () => <section data-testid="mock-contact">contact</section>,
}));

import HomePage from "@/app/[locale]/page";

afterEach(() => {
  vi.restoreAllMocks();
});

async function renderHome(locale: "es" | "en" = "es") {
  setMockServerLocale(locale);
  let element: React.ReactElement;
  await act(async () => {
    element = await HomePage();
  });

  return render(
    <NextIntlClientProvider locale={locale} messages={getMockMessages(locale)}>
      {element!}
    </NextIntlClientProvider>,
  );
}

describe("app/[locale]/page.tsx (home)", () => {
  it("renders all main sections and layout pieces (es)", async () => {
    await renderHome("es");

    expect(screen.getByTestId("mock-navigation")).toBeInTheDocument();
    expect(screen.getByTestId("mock-mouse-glow")).toBeInTheDocument();
    expect(screen.getByTestId("mock-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-profile")).toBeInTheDocument();
    expect(screen.getByTestId("mock-skills")).toBeInTheDocument();
    expect(screen.getByTestId("mock-projects")).toBeInTheDocument();
    expect(await screen.findByTestId("mock-console")).toBeInTheDocument();
    expect(await screen.findByTestId("mock-contact")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
  });

  it("uses #main-content as the focusable main landmark", async () => {
    await renderHome("es");

    const main = document.getElementById("main-content");
    expect(main).not.toBeNull();
    expect(main?.tagName).toBe("MAIN");
    expect(main).toHaveAttribute("tabIndex", "-1");
  });

  it("renders identically in english locale", async () => {
    await renderHome("en");

    expect(screen.getByTestId("mock-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
  });
});
