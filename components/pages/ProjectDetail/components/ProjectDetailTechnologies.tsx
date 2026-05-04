"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import type { Project } from "@/data/projects";

interface ProjectDetailTechnologiesProps {
  project: Project;
}

export function ProjectDetailTechnologies({ project }: ProjectDetailTechnologiesProps) {
  const t = useTranslations("projects");

  return (
    <motion.div
      className="sticky top-24 rounded-xl border border-[#1E293B] bg-[#0F172A] p-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h3 className="mb-4 text-xl font-bold text-white">
        {t("technologiesHeading")}
      </h3>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <motion.span
            key={tech}
            className="rounded-lg bg-[#06B6D4]/20 px-3 py-2 text-sm font-medium text-[#06B6D4]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.4 + index * 0.05,
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(6, 182, 212, 0.3)",
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}