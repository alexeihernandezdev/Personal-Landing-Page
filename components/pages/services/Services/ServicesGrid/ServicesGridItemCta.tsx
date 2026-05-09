"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface ServicesGridItemCtaProps {
  timeline: string;
}

export function ServicesGridItemCta({ timeline }: ServicesGridItemCtaProps) {
  const t = useTranslations("services");

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">
        {t("weeks", { range: timeline })}
      </span>
      <div className="flex items-center gap-2 text-brand group-hover:text-brand-hover transition-colors font-medium">
        <span className="text-sm">{t("viewDetails")}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}