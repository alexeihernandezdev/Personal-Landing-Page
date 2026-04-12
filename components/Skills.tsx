"use client";

import { Code2, Database, Layout, Server } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { skillGroups } from "@data/skills";
import type { SkillIconKey } from "@data/skillIcons";
import { sectionIds } from "@data/sectionIds";

const iconByKey: Record<SkillIconKey, typeof Layout> = {
  layout: Layout,
  server: Server,
  database: Database,
  code2: Code2,
};

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section
      id={sectionIds.skills}
      className="py-20 px-6 bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#090E1B]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-lg text-gray-400">{t("subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((skill, index) => {
            const Icon = iconByKey[skill.icon];
            return (
              <motion.div
                key={skill.icon}
                className="p-6 rounded-xl bg-[#1E293B]/80 backdrop-blur-sm border-2 border-[#334155] hover:border-[#06B6D4] hover:shadow-lg hover:shadow-[#06B6D4]/20 hover:bg-[#1E293B]"
                initial={{ opacity: 0, y: 90 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.4,
                  },
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-[#06B6D4]/20 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-[#06B6D4]" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t(`groups.${skill.icon}.title`)}
                </h3>
                <ul className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.li
                      key={tech}
                      className="text-gray-400 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + techIndex * 0.05,
                      }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: techIndex * 0.3,
                        }}
                      ></motion.span>
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
