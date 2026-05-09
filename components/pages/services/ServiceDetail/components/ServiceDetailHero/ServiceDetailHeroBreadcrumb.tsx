"use client";

import { Link } from "@/i18n/navigation";
import { FadeInView } from "@components/motion/thin";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function ServiceDetailHeroBreadcrumb() {
  const t = useTranslations("services");

  return (
    <FadeInView
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-brand transition-colors mb-8"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        <span>{t("detail.backToServices")}</span>
      </Link>
    </FadeInView>
  );
}
