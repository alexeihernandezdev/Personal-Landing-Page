import { describe, expect, it, beforeEach } from "vitest";
import RootPage from "@/app/page";
import {
  redirect,
  resetNavigationMocks,
  NextRedirectError,
} from "../../test/mocks/next-navigation";
import { routing } from "@/i18n/routing";

describe("app/page.tsx (root redirect)", () => {
  beforeEach(() => {
    resetNavigationMocks();
  });

  it(`redirects to /${routing.defaultLocale}`, () => {
    expect(() => RootPage()).toThrow(NextRedirectError);
    expect(redirect).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledWith(`/${routing.defaultLocale}`);
  });
});
