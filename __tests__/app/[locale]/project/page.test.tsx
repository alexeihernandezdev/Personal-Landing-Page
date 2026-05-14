import { describe, expect, it, beforeEach } from "vitest";
import ProjectIndexPage from "@/app/[locale]/project/page";
import {
  redirect,
  resetNavigationMocks,
  NextRedirectError,
} from "../../../../test/mocks/next-navigation";

describe("app/[locale]/project/page.tsx (redirect)", () => {
  beforeEach(() => {
    resetNavigationMocks();
  });

  it("redirects /es/project to /es", async () => {
    await expect(
      ProjectIndexPage({ params: Promise.resolve({ locale: "es" }) }),
    ).rejects.toThrow(NextRedirectError);
    expect(redirect).toHaveBeenCalledWith("/es");
  });

  it("redirects /en/project to /en", async () => {
    await expect(
      ProjectIndexPage({ params: Promise.resolve({ locale: "en" }) }),
    ).rejects.toThrow(NextRedirectError);
    expect(redirect).toHaveBeenCalledWith("/en");
  });
});
