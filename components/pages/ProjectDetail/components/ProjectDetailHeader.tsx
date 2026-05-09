"use client";

import { Calendar, ExternalLink, Github, User } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { projectHasGithubLink } from "@/data/projects";
import type { Project } from "@/data/projects";

interface ProjectDetailHeaderProps {
  project: Project;
}

export function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
  const t = useTranslations("projects");

  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="mb-6">
        <span className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-canvas">
          {project.category}
        </span>
      </div>

      <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
        {project.title}
      </h1>

      <div className="mb-8 flex flex-wrap items-center gap-6 text-gray-400">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          <span>{project.year}</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="h-5 w-5" />
          <span>{project.role}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {projectHasGithubLink(project) ? (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-surface-elevated bg-surface px-6 py-3 text-white transition-colors hover:bg-surface-elevated"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
            <span>{t("detailCodeCta")}</span>
          </motion.a>
        ) : null}
        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-canvas transition-colors hover:bg-brand-hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink className="h-5 w-5" />
          <span>
            {project.demoIsProduction
              ? t("detailDemoCtaProduction")
              : t("detailDemoCta")}
          </span>
        </motion.a>
      </div>
    </motion.div>
  );
}