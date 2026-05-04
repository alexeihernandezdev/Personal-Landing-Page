"use client";

import { FadeInView } from "@components/motion/thin";
import { useTranslations } from "next-intl";

interface ServiceDetailTechnologiesProps {
  technologies: string[];
}

export function ServiceDetailTechnologies({
  technologies,
}: ServiceDetailTechnologiesProps) {
  const t = useTranslations("services");

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <FadeInView
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            {t("detail.technologiesHeading")}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-[#0F172A] border border-[#1E293B] rounded-full text-gray-300 hover:border-[#06B6D4] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
