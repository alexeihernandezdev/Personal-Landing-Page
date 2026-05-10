import { createTranslator } from "next-intl";
import { vi } from "vitest";
import { getMockMessages, type Locale } from "../messages";

const localeState: { current: Locale } = { current: "es" };

export function setMockServerLocale(locale: Locale) {
  localeState.current = locale;
}

export function getMockServerLocale(): Locale {
  return localeState.current;
}

type GetTranslationsArgs =
  | string
  | undefined
  | { locale?: string; namespace?: string };

export const getTranslations = vi.fn(async (arg?: GetTranslationsArgs) => {
  const namespace = typeof arg === "string" ? arg : arg?.namespace;
  const locale = (typeof arg === "object" && arg?.locale) || localeState.current;
  const messages = getMockMessages(locale as Locale);
  const translator = createTranslator({
    locale,
    namespace,
    messages: messages as Record<string, unknown>,
  });
  return translator;
});

export const getMessages = vi.fn(async () => {
  return getMockMessages(localeState.current) as Record<string, unknown>;
});

export const getLocale = vi.fn(async () => localeState.current as string);

export const getFormatter = vi.fn(async () => ({
  dateTime: (date: Date) => date.toISOString(),
  number: (n: number) => String(n),
  relativeTime: () => "",
  list: (items: Iterable<string>) => Array.from(items).join(", "),
}));

export const getNow = vi.fn(async () => new Date());

export const getTimeZone = vi.fn(async () => "Europe/Madrid");

export const setRequestLocale = vi.fn((locale: string) => {
  if (locale === "es" || locale === "en") {
    localeState.current = locale;
  }
});

export const unstable_setRequestLocale = setRequestLocale;
