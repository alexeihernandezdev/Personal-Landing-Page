"use client";

import { ImageWithFallback } from "@/components/atoms/ImageWithFallback";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import type { Project } from "@/data/projects";

interface ProjectDetailScreenshotsProps {
  project: Project;
}

export function ProjectDetailScreenshots({ project }: ProjectDetailScreenshotsProps) {
  const t = useTranslations("projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        {t("screenshotsHeading")}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {project.screenshots.map((screenshot, index) => (
          <motion.div
            key={`${project.slug}-screenshot-${index}`}
            className="relative h-64 overflow-hidden rounded-xl border border-[#1E293B]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.9 + index * 0.1,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <ImageWithFallback
              src={screenshot}
              alt={`${project.title} — ${index + 1}`}
              className="h-full w-full object-cover"
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}