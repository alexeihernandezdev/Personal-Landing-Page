"use client";

import { ImageWithFallback } from "@/components/atoms/ImageWithFallback";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { Project } from "@/data/projects";

interface ProjectDetailRelatedProps {
  related: Project[];
}

export function ProjectDetailRelated({ related }: ProjectDetailRelatedProps) {
  const t = useTranslations("projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        {t("relatedTitle")}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {related.map((p) => (
          <Link
            key={p.id}
            href={`/project/${p.slug}`}
            className="group overflow-hidden rounded-xl border border-[#1E293B] bg-[#0F172A] transition-all duration-300 hover:border-[#06B6D4]"
          >
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                width={600}
                height={384}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <span className="mb-2 block text-xs font-semibold text-[#06B6D4]">
                {p.category}
              </span>
              <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-[#06B6D4]">
                {p.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm text-gray-400">
                {p.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-[#1E293B] px-2 py-1 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}