import { render, type RenderOptions, type RenderResult } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import type { ReactElement, ReactNode } from "react";
import { getMockMessages, type Locale } from "./messages";

type Options = Omit<RenderOptions, "wrapper"> & {
  locale?: Locale;
  timeZone?: string;
};

export function renderWithProviders(
  ui: ReactElement,
  { locale = "es", timeZone = "Europe/Madrid", ...rest }: Options = {},
): RenderResult {
  const messages = getMockMessages(locale);
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        timeZone={timeZone}
      >
        {children}
      </NextIntlClientProvider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...rest });
}
