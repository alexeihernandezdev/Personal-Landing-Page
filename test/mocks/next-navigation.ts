import { vi } from "vitest";

export class NextRedirectError extends Error {
  digest = "NEXT_REDIRECT";
  constructor(public readonly url: string) {
    super(`NEXT_REDIRECT;${url}`);
    this.name = "NextRedirectError";
  }
}

export class NextNotFoundError extends Error {
  digest = "NEXT_NOT_FOUND";
  constructor() {
    super("NEXT_NOT_FOUND");
    this.name = "NextNotFoundError";
  }
}

export const redirect = vi.fn((url: string): never => {
  throw new NextRedirectError(url);
});

export const permanentRedirect = vi.fn((url: string): never => {
  throw new NextRedirectError(url);
});

export const notFound = vi.fn((): never => {
  throw new NextNotFoundError();
});

const paramsState: { current: Record<string, string | string[]> } = {
  current: {},
};

export function setMockParams(params: Record<string, string | string[]>) {
  paramsState.current = params;
}

export const useParams = vi.fn(() => paramsState.current);
export const usePathname = vi.fn(() => "/");
export const useRouter = vi.fn(() => ({
  push: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  refresh: vi.fn(),
  prefetch: vi.fn(),
}));
export const useSearchParams = vi.fn(() => new URLSearchParams());

export function resetNavigationMocks() {
  redirect.mockClear();
  permanentRedirect.mockClear();
  notFound.mockClear();
  useParams.mockClear();
  usePathname.mockClear();
  useRouter.mockClear();
  useSearchParams.mockClear();
  paramsState.current = {};
}
