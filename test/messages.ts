import esMessages from "../messages/es.json";
import enMessages from "../messages/en.json";

export type Locale = "es" | "en";

export const messagesByLocale = {
  es: esMessages as Record<string, unknown>,
  en: enMessages as Record<string, unknown>,
} as const;

export function getMockMessages(locale: Locale = "es") {
  return messagesByLocale[locale];
}
