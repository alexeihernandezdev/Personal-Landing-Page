"use client";

import { IconTextCard } from "@/components/atoms/IconTextCard";
import { FadeInView } from "@components/motion/thin";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface ServiceDetailFeaturesProps {
  features: string[];
}

export function ServiceDetailFeatures({
  features,
}: ServiceDetailFeaturesProps) {
  const t = useTranslations("services");

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInView
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {t("detail.keyFeaturesHeading")}
          </h2>
        </FadeInView>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((featureKey, idx) => (
            <FadeInView
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <IconTextCard
                icon={<CheckCircle2 className="w-6 h-6 text-[#06B6D4]" />}
                hoverable
              >
                {t(`${featureKey}` as any)}
              </IconTextCard>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
