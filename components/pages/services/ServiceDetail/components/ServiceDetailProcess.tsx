"use client";

import { FadeInView } from "@components/motion/thin";
import { useTranslations } from "next-intl";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ServiceDetailProcessProps {
  process: ProcessStep[];
}

export function ServiceDetailProcess({ process }: ServiceDetailProcessProps) {
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
            {t("detail.processHeading")}
          </h2>
        </FadeInView>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, idx) => (
            <FadeInView
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="text-6xl font-bold text-[#06B6D4]/20 absolute -top-4 -left-2">
                  {step.step.toString().padStart(2, "0")}
                </div>
                <div className="relative pt-8">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t(`${step.title}` as any)}
                  </h3>
                  <p className="text-gray-400">
                    {t(`${step.description}` as any)}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
