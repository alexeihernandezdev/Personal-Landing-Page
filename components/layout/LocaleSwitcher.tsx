"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeAriaKey = { es: "switchToEs" as const, en: "switchToEn" as const };

type LocaleSwitcherProps = {
  className?: string;
  onNavigate?: () => void;
};

export function LocaleSwitcher({ className = "", onNavigate }: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("locale");

  return (
    <div
      role="group"
      aria-label={t("switchLabel")}
      className={`inline-flex items-center rounded-lg border border-[#06B6D4]/25 bg-[#0F172A]/60 p-0.5 ${className}`}
    >
      {routing.locales.map((loc) => {
        const isActive = loc === locale;
        return (
          <Link
            key={loc}
            href={pathname}
            locale={loc}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            aria-label={isActive ? undefined : t(localeAriaKey[loc])}
            className={`min-w-[2.25rem] rounded-md px-2 py-1 text-center text-xs font-semibold uppercase tracking-wide transition-colors ${
              isActive
                ? "bg-[#06B6D4]/15 text-[#06B6D4]"
                : "text-gray-400 hover:text-[#06B6D4]"
            }`}
          >
            {loc === "es" ? t("es") : t("en")}
          </Link>
        );
      })}
    </div>
  );
}
