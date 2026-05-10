import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../test/renderWithProviders";

vi.mock("@/components/pages/services/Services", () => ({
  default: () => <div data-testid="mock-services">services</div>,
}));

import ServicesPage, { metadata } from "@/app/[locale]/services/page";

describe("app/[locale]/services/page.tsx", () => {
  it("renders the Services component", () => {
    renderWithProviders(<ServicesPage />, { locale: "es" });
    expect(screen.getByTestId("mock-services")).toBeInTheDocument();
  });

  it("exports static metadata", () => {
    expect(metadata.title).toBe("Services");
    expect(metadata.description).toBe("Professional technology services");
  });
});
