import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

/** Base URL for absolute metadata (OG, Twitter). In production, set NEXT_PUBLIC_SITE_URL to your canonical HTTPS origin. */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const title = t("title");
  const description = t("description");
  const siteName = t("siteName");
  const ogTitle = t("openGraphTitle");
  const ogImageAlt = t("ogImageAlt");
  const ogLocale = locale === "es" ? "es_ES" : "en_US";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: {
      title: ogTitle,
      description,
      url: `/${locale}`,
      siteName,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/og.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const tA11y = await getTranslations({ locale, namespace: "a11y" });

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#06B6D4] focus:px-4 focus:py-3 focus:text-[#090E1B] focus:font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#090E1B]"
          >
            {tA11y("skipToContent")}
          </a>
          <div className="flex min-h-full flex-col">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
