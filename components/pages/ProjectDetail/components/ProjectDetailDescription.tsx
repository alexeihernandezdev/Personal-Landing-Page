"use client";

import { Code } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import type { Project } from "@/data/projects";

interface ProjectDetailDescriptionProps {
  project: Project;
}

export function ProjectDetailDescription({ project }: ProjectDetailDescriptionProps) {
  const t = useTranslations("projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
        <Code className="h-6 w-6 text-brand" />
        {t("descriptionHeading")}
      </h2>
      <p className="leading-relaxed text-gray-300">
        {project.fullDescription}
      </p>
    </motion.div>
  );
}