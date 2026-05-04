"use client";

import { FadeInView } from "@components/motion/thin";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslations } from "next-intl";

export function ServicesHero() {
  const t = useTranslations("services");

  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06B6D4] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0EA5E9] rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInView
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            title={t("pageTitle")}
            subtitle={t("pageSubtitle")}
            titleSize="xl"
          />
        </FadeInView>
      </div>
    </section>
  );
}
