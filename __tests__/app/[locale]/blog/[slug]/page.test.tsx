import { afterEach, describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../../test/renderWithProviders";
import {
  resetNavigationMocks,
  setMockParams,
  useParams,
} from "../../../../../test/mocks/next-navigation";
import { blogPosts } from "@data/blogPosts";

vi.mock("@components/layout/Navigation", () => ({
  Navigation: () => <nav data-testid="mock-navigation" />,
}));
vi.mock("@components/layout/FooterClient", () => ({
  FooterClient: () => <footer data-testid="mock-footer-client" />,
}));
vi.mock("@components/layout/MouseGlow", () => ({
  MouseGlow: () => <div data-testid="mock-mouse-glow" />,
}));

import BlogPostPage from "@/app/[locale]/blog/[slug]/page";

afterEach(() => {
  resetNavigationMocks();
});

describe("app/[locale]/blog/[slug]/page.tsx", () => {
  it("renders the blog post when slug exists", () => {
    const post = blogPosts[0];
    setMockParams({ slug: post.slug });
    useParams.mockReturnValue({ slug: post.slug });

    renderWithProviders(<BlogPostPage />, { locale: "es" });

    const h1s = screen.getAllByRole("heading", { level: 1, name: post.title });
    expect(h1s.length).toBeGreaterThan(0);
    expect(screen.getAllByText(post.category).length).toBeGreaterThan(0);
    for (const tag of post.tags) {
      expect(screen.getAllByText(tag).length).toBeGreaterThan(0);
    }
    const backLink = screen.getAllByRole("link", { name: /volver al blog/i })[0];
    expect(backLink).toHaveAttribute("href", "/es/blog");
  });

  it("renders related posts when more posts exist", () => {
    const post = blogPosts[0];
    useParams.mockReturnValue({ slug: post.slug });

    renderWithProviders(<BlogPostPage />, { locale: "es" });

    const related = blogPosts.find((p) => p.id !== post.id);
    expect(related).toBeDefined();
    if (related) {
      const relatedHeading = screen.getAllByText(related.title);
      expect(relatedHeading.length).toBeGreaterThan(0);
    }
  });

  it("renders the not-found state when slug is invalid", () => {
    useParams.mockReturnValue({ slug: "no-existe" });

    renderWithProviders(<BlogPostPage />, { locale: "es" });

    expect(
      screen.getByRole("heading", { level: 1, name: /no encontrad/i }),
    ).toBeInTheDocument();
    const back = screen.getByRole("link", { name: /volver al blog/i });
    expect(back).toHaveAttribute("href", "/es/blog");
  });
});
