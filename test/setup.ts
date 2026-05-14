import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, vi } from "vitest";

vi.mock("motion/react", () => import("./mocks/motion-react"));
vi.mock("next/font/google", () => import("./mocks/next-font"));
vi.mock("@vercel/analytics/next", () => import("./mocks/analytics"));
vi.mock("@/api/messages/createMessage", () => import("./mocks/createMessage"));
vi.mock("next-intl/server", () => import("./mocks/next-intl-server"));
vi.mock("next/dynamic", () => import("./mocks/next-dynamic"));

afterEach(() => {
  cleanup();
});

beforeAll(() => {
  if (!window.matchMedia) {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    });
  }

  class IntersectionObserverStub {
    readonly root = null;
    readonly rootMargin = "";
    readonly thresholds: ReadonlyArray<number> = [];
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }

  class ResizeObserverStub {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  vi.stubGlobal("IntersectionObserver", IntersectionObserverStub);
  vi.stubGlobal("ResizeObserver", ResizeObserverStub);

  if (typeof window !== "undefined") {
    if (!window.scrollTo) {
      window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
    }
    if (!HTMLElement.prototype.scrollIntoView) {
      HTMLElement.prototype.scrollIntoView = vi.fn();
    }
  }
});
