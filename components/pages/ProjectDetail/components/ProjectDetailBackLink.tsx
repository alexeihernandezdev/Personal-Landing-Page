"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { sectionIds } from "@/data/sectionIds";
import { useTranslations } from "next-intl";

export function ProjectDetailBackLink() {
  const t = useTranslations("projects");

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`/#${sectionIds.projects}`}
        className="group mb-8 inline-flex items-center gap-2 text-[#06B6D4] transition-colors hover:text-[#0EA5E9]"
      >
        <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
        <span>{t("backToProjects")}</span>
      </Link>
    </motion.div>
  );
}