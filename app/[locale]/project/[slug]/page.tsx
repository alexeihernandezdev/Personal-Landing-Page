"use client";

import { Navigation } from "@components/layout/Navigation";
import { FooterClient } from "@components/layout/FooterClient";
import { MouseGlow } from "@components/layout/MouseGlow";
import { ImageWithFallback } from "@/components/atoms/ImageWithFallback";
import { getProjects, projectHasGithubLink } from "@/data/projects";
import { sectionIds } from "@/data/sectionIds";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Code,
  ExternalLink,
  Github,
  Lightbulb,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ProjectDetailPage() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const projects = getProjects(locale);
  const params = useParams();
  const slugParam = params.slug;
  const slug =
    typeof slugParam === "string" ? slugParam : (slugParam?.[0] ?? "");
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-[#090E1B]">
        <MouseGlow />
        <main
          id="main-content"
          tabIndex={-1}
          className="relative z-10 text-center outline-none"
        >
          <h1 className="mb-4 text-4xl font-bold text-white">
            {t("notFoundTitle")}
          </h1>
          <Link
            href={`/#${sectionIds.projects}`}
            className="text-[#06B6D4] hover:underline"
          >
            {t("backToProjects")}
          </Link>
        </main>
      </div>
    );
  }

  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);
  const title = project.title;

  return (
    <div className="relative min-h-screen bg-[#090E1B]">
      <MouseGlow />
      <div className="relative z-10">
        <Navigation />

        <main
          id="main-content"
          tabIndex={-1}
          className="outline-none"
        >
        <article className="px-6 pb-16 pt-32">
          <div className="mx-auto max-w-6xl">
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

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-6">
                <span className="rounded-full bg-[#06B6D4] px-4 py-2 text-sm font-semibold text-[#090E1B]">
                  {project.category}
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                {title}
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
                    className="flex items-center gap-2 rounded-lg border border-[#1E293B] bg-[#0F172A] px-6 py-3 text-white transition-colors hover:bg-[#1E293B]"
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
                  className="flex items-center gap-2 rounded-lg bg-[#06B6D4] px-6 py-3 font-semibold text-[#090E1B] transition-colors hover:bg-[#0EA5E9]"
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

            <motion.div
              className="relative mb-12 h-96 overflow-hidden rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ImageWithFallback
                src={project.image}
                alt={title}
                className="h-full w-full object-cover"
                width={1200}
                height={600}
                sizes="(max-width: 1280px) calc(100vw - 3rem), 1152px"
                priority
              />
            </motion.div>

            <div className="mb-12 grid gap-12 lg:grid-cols-3">
              <div className="space-y-12 lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
                    <Code className="h-6 w-6 text-[#06B6D4]" />
                    {t("descriptionHeading")}
                  </h2>
                  <p className="leading-relaxed text-gray-300">
                    {project.fullDescription}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                    <CheckCircle2 className="h-6 w-6 text-[#06B6D4]" />
                    {t("featuresHeading")}
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-start gap-3 rounded-lg border border-[#1E293B] bg-[#0F172A] p-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + index * 0.05,
                        }}
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#06B6D4]" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                    <Lightbulb className="h-6 w-6 text-[#06B6D4]" />
                    {t("challengesHeading")}
                  </h2>
                  <div className="space-y-6">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={challenge.title}
                        className="rounded-xl border border-[#1E293B] bg-[#0F172A] p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.7 + index * 0.1,
                        }}
                      >
                        <h3 className="mb-3 text-lg font-semibold text-white">
                          {challenge.title}
                        </h3>
                        <p className="leading-relaxed text-gray-400">
                          {challenge.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

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
                        key={screenshot}
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
                          alt={`${title} — ${index + 1}`}
                          className="h-full w-full object-cover"
                          width={800}
                          height={450}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="space-y-8">
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
              </div>
            </div>

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
          </div>
        </article>
        </main>

        <FooterClient />
      </div>
    </div>
  );
}
