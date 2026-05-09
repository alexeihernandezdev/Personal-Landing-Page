"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import type { Project } from "@/data/projects";
import { FadeInView } from "@/components/motion/thin";
import { IconTextCard } from "@/components/atoms/IconTextCard";

interface ProjectDetailFeaturesProps {
  project: Project;
}

export function ProjectDetailFeatures({ project }: ProjectDetailFeaturesProps) {
  const t = useTranslations("projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
        <CheckCircle2 className="h-6 w-6 text-brand" />
        {t("featuresHeading")}
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {project.features.map((feature, idx) => (
          <FadeInView
            key={feature}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            <IconTextCard
              className="text-sm"
              icon={
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
              }
              hoverable
            >
              {feature}
            </IconTextCard>
          </FadeInView>
        ))}
      </div>
    </motion.div>
  );
}
