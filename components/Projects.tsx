"use client";

import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./atoms/ImageWithFallback";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { getProjects, projectHasGithubLink } from "@data/projects";
import { sectionIds } from "@data/sectionIds";
import { Link } from "@/i18n/navigation";

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const projects = getProjects(locale);

  return (
    <section id={sectionIds.projects} className="py-20 px-6 bg-[#090E1B]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("sectionTitle")}
          </h2>
          <p className="text-lg text-gray-400">{t("sectionSubtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#0F172A] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/20 border border-[#1E293B]"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -15,
                rotateY: 3,
                transition: { duration: 0.3 },
              }}
            >
              <Link href={`/project/${project.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      width={600}
                      height={400}
                    />
                  </motion.div>
                </div>

                <div className="px-6 pt-6">
                  <motion.h3
                    className="text-xl font-semibold text-white mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 mb-4 line-clamp-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  >
                    {project.shortDescription}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-[#06B6D4]/20 text-[#06B6D4] rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.15 + 0.5 + techIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </Link>

              <motion.div
                className="flex flex-wrap gap-4 px-6 pb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
              >
                {projectHasGithubLink(project) ? (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">{t("codeLink")}</span>
                  </motion.a>
                ) : null}
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#06B6D4] hover:text-[#0EA5E9] transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm">
                    {project.demoIsProduction
                      ? t("demoLinkProduction")
                      : t("demoLink")}
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
