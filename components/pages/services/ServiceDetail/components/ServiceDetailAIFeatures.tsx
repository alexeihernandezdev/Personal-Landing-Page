"use client";

import { FadeInView } from "@components/motion/thin";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

interface ServiceDetailAIFeaturesProps {
  aiFeatures: string[];
}

export function ServiceDetailAIFeatures({
  aiFeatures,
}: ServiceDetailAIFeaturesProps) {
  const t = useTranslations("services");

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#06B6D4]/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <FadeInView
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 justify-center mb-8">
            <Sparkles className="w-8 h-8 text-[#06B6D4]" />
            <h2 className="text-3xl font-bold text-white">
              {t("detail.aiSectionHeading")}
            </h2>
          </div>
        </FadeInView>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((featureKey, idx) => (
            <FadeInView
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0F172A] rounded-xl p-6 border border-[#06B6D4]/30 hover:border-[#06B6D4]/60 transition-colors">
                <Sparkles className="w-6 h-6 text-[#06B6D4] mb-4" />
                <p className="text-gray-300">{t(`${featureKey}` as any)}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
