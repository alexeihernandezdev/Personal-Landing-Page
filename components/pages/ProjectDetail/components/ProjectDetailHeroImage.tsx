"use client";

import { ImageWithFallback } from "@/components/atoms/ImageWithFallback";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

interface ProjectDetailHeroImageProps {
  project: Project;
}

export function ProjectDetailHeroImage({ project }: ProjectDetailHeroImageProps) {
  return (
    <motion.div
      className="relative mb-12 h-96 overflow-hidden rounded-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <ImageWithFallback
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover"
        width={1200}
        height={600}
        sizes="(max-width: 1280px) calc(100vw - 3rem), 1152px"
        priority
      />
    </motion.div>
  );
}