"use client";

import { FadeInView } from "@components/motion/thin";
import { Code2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface ServiceDetailDeliverablesProps {
  deliverables: string[];
}

export function ServiceDetailDeliverables({
  deliverables,
}: ServiceDetailDeliverablesProps) {
  const t = useTranslations("services");

  return (
    <section className="py-16 px-6 bg-[#0F172A]/50">
      <div className="max-w-6xl mx-auto">
        <FadeInView
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {t("detail.deliverablesHeading")}
          </h2>
        </FadeInView>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((deliverableKey, idx) => (
            <FadeInView
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0F172A] rounded-xl p-6 border border-[#1E293B] flex items-start gap-4">
                <div className="w-10 h-10 bg-[#06B6D4] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-5 h-5 text-[#090E1B]" />
                </div>
                <p className="text-gray-300">{t(`${deliverableKey}` as any)}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
