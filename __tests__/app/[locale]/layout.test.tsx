import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { resetNavigationMocks } from "../../../test/mocks/next-navigation";

vi.mock("@/components/seo/StructuredData", () => ({
  StructuredData: () => null,
}));
vi.mock("@/components/motion/MotionProvider", () => ({
  MotionProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

import { routing } from "@/i18n/routing";

type LayoutModule = typeof import("@/app/[locale]/layout");
type GenerateMetadataArgs = Parameters<LayoutModule["generateMetadata"]>[0];

async function importLayout(env: Record<string, string | undefined>): Promise<LayoutModule> {
  vi.resetModules();
  const prev = {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    VERCEL_URL: process.env.VERCEL_URL,
  };
  for (const [key, value] of Object.entries(env)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
  try {
    return (await import("@/app/[locale]/layout")) as LayoutModule;
  } finally {
    for (const [key, value] of Object.entries(prev)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

beforeEach(() => {
  resetNavigationMocks();
});

afterEach(() => {
  vi.resetModules();
});

describe("app/[locale]/layout.tsx", () => {
  describe("generateStaticParams", () => {
    it("returns one entry per supported locale", async () => {
      const { generateStaticParams } = await importLayout({});
      const params = generateStaticParams();
      expect(params).toEqual(routing.locales.map((locale) => ({ locale })));
      expect(params).toHaveLength(2);
    });
  });

  describe("generateMetadata", () => {
    it("builds spanish metadata with es_ES og locale", async () => {
      const { generateMetadata } = await importLayout({
        NEXT_PUBLIC_SITE_URL: "https://www.example.com",
        VERCEL_URL: undefined,
      });
      const meta = await generateMetadata({
        params: Promise.resolve({ locale: "es" }),
      } as GenerateMetadataArgs);
      const og = meta.openGraph as Record<string, unknown> | undefined;
      expect(meta.title).toBe("Alexei Hernández — Portfolio");
      expect(meta.description).toMatch(/desarrollador web/i);
      expect(og?.locale).toBe("es_ES");
      expect(og?.type).toBe("website");
      expect(og?.url).toBe("/es");
      expect(String(meta.metadataBase)).toBe("https://www.example.com/");
      const images = og?.images as Array<{ url: string; alt?: string }>;
      expect(images?.[0]?.url).toBe("/cap.png");
      expect(meta.twitter).toMatchObject({
        card: "summary_large_image",
      });
    });

    it("builds english metadata with en_US og locale", async () => {
      const { generateMetadata } = await importLayout({
        NEXT_PUBLIC_SITE_URL: "https://www.example.com",
        VERCEL_URL: undefined,
      });
      const meta = await generateMetadata({
        params: Promise.resolve({ locale: "en" }),
      } as GenerateMetadataArgs);
      const og = meta.openGraph as Record<string, unknown> | undefined;
      expect(og?.locale).toBe("en_US");
      expect(og?.url).toBe("/en");
      expect(meta.description).toMatch(/full stack/i);
    });

    it("trims trailing slash from NEXT_PUBLIC_SITE_URL", async () => {
      const { generateMetadata } = await importLayout({
        NEXT_PUBLIC_SITE_URL: "https://www.example.com/",
        VERCEL_URL: undefined,
      });
      const meta = await generateMetadata({
        params: Promise.resolve({ locale: "es" }),
      } as GenerateMetadataArgs);
      expect(String(meta.metadataBase)).toBe("https://www.example.com/");
    });

    it("uses VERCEL_URL when NEXT_PUBLIC_SITE_URL is missing", async () => {
      const { generateMetadata } = await importLayout({
        NEXT_PUBLIC_SITE_URL: undefined,
        VERCEL_URL: "preview-abc.vercel.app",
      });
      const meta = await generateMetadata({
        params: Promise.resolve({ locale: "es" }),
      } as GenerateMetadataArgs);
      expect(String(meta.metadataBase)).toBe("https://preview-abc.vercel.app/");
    });

    it("falls back to localhost when no env vars are set", async () => {
      const { generateMetadata } = await importLayout({
        NEXT_PUBLIC_SITE_URL: undefined,
        VERCEL_URL: undefined,
      });
      const meta = await generateMetadata({
        params: Promise.resolve({ locale: "es" }),
      } as GenerateMetadataArgs);
      expect(String(meta.metadataBase)).toBe("http://localhost:3000/");
    });
  });

  describe("LocaleLayout", () => {
    it("calls notFound when locale is not supported", async () => {
      const layoutModule = await importLayout({});
      await expect(
        layoutModule.default({
          children: <span>child</span>,
          params: Promise.resolve({ locale: "fr" }),
        }),
      ).rejects.toThrow(/NEXT_NOT_FOUND/);
    });

    it("does not call notFound for supported locales", async () => {
      const layoutModule = await importLayout({});
      const result = await layoutModule.default({
        children: <span data-testid="child">child</span>,
        params: Promise.resolve({ locale: "es" }),
      });
      expect(result).toBeDefined();
    });
  });
});
