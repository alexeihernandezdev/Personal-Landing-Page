"use client";

import { sectionIds } from "@/data/sectionIds";
import { Link } from "@/i18n/navigation";
import { FadeInView, PressableButton } from "@components/motion/thin";
import { PressableAnchor } from "@components/motion/thin";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface ServiceCtaProps {
  delay?: number;
}

export function ServiceCta({ delay = 0 }: ServiceCtaProps) {
  const t = useTranslations("services");

  return (
    <section className="py-20 px-6">
      <FadeInView
        className="max-w-4xl mx-auto bg-gradient-to-br from-[#06B6D4]/10 to-[#06B6D4]/5 rounded-2xl p-12 text-center border border-[#06B6D4]/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
        <p className="text-gray-400 mb-8 text-lg">{t("ctaSubtitle")}</p>
        <Link href={`/#${sectionIds.contact}`}>
          <PressableButton className="inline-flex items-center gap-2 bg-[#06B6D4] hover:bg-[#0EA5E9] text-[#090E1B] px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
            <span>{t("ctaButton")}</span>
            <ArrowRight className="w-5 h-5" />
          </PressableButton>
        </Link>
      </FadeInView>
    </section>
  );
}
