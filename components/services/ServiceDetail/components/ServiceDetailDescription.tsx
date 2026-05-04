"use client";

import { FadeInView } from "@components/motion/thin";
import { useTranslations } from "next-intl";

interface ServiceDetailDescriptionProps {
  fullDescriptionKey: string;
}

export function ServiceDetailDescription({
  fullDescriptionKey,
}: ServiceDetailDescriptionProps) {
  const t = useTranslations("services");

  return (
    <section className="py-16 px-6 bg-[#0F172A]/50">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInView
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            {t(`${fullDescriptionKey}` as any)}
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
