"use client";
import { FadeInView } from "@components/motion/thin";
import { useTranslations } from "next-intl";
import { ServiceDetailHeroMetaItem } from "./ServiceDetailHeroMetaItem";

interface ServiceDetailHeroContentProps {
  isFeatured: boolean;
  titleKey: string;
  shortDescriptionKey: string;
  timeline: string;
  includesDocumentation: boolean;
  includesTraining: boolean;
}

export function ServiceDetailHeroContent({
  isFeatured,
  titleKey,
  shortDescriptionKey,
  timeline,
  includesDocumentation,
  includesTraining,
}: ServiceDetailHeroContentProps) {
  const t = useTranslations("services");

  return (
    <FadeInView
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {isFeatured && (
        <span className="inline-block bg-[#06B6D4]/20 text-[#06B6D4] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          {t("detail.featuredBadge")}
        </span>
      )}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        {t(`${titleKey}` as any)}
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        {t(`${shortDescriptionKey}` as any)}
      </p>

      {/* Meta info */}
      <div className="flex flex-wrap gap-4 mb-8">
        <ServiceDetailHeroMetaItem
          icon="Clock"
          label={t("weeks", { range: timeline })}
        />
        {includesDocumentation && (
          <ServiceDetailHeroMetaItem
            icon="BookOpen"
            label={t("includesDocumentation")}
          />
        )}
        {includesTraining && (
          <ServiceDetailHeroMetaItem
            icon="GraduationCap"
            label={t("includesTraining")}
          />
        )}
      </div>
    </FadeInView>
  );
}
