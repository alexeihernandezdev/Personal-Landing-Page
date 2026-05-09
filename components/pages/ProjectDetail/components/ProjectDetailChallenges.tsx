"use client";

import { Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import type { Project } from "@/data/projects";
import { FadeInView } from "@/components/motion/thin";
import { HeadingBodyCard } from "@/components/atoms/HeadingBodyCard";

interface ProjectDetailChallengesProps {
  project: Project;
}

export function ProjectDetailChallenges({
  project,
}: ProjectDetailChallengesProps) {
  const t = useTranslations("projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
        <Lightbulb className="h-6 w-6 text-brand" />
        {t("challengesHeading")}
      </h2>
      <div className="space-y-6">
        {project.challenges.map((challenge, index) => (
          <FadeInView
            key={challenge.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <HeadingBodyCard
              heading={challenge.title}
              description={challenge.description}
              headingClassName="text-lg font-semibold text-white"
              descriptionClassName="text-gray-400 text-base!"
            />
          </FadeInView>
        ))}
      </div>
    </motion.div>
  );
}
