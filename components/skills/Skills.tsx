import { Code2, Database, Layout, Server } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { skillGroups } from "@data/skills";
import type { SkillIconKey } from "@data/skillIcons";
import { sectionIds } from "@data/sectionIds";
import {
  SkillCardMotion,
  SkillIconMotion,
  SkillListItemMotion,
} from "./SkillCardMotion";
import { FadeInView } from "../motion/thin";

const iconByKey: Record<SkillIconKey, typeof Layout> = {
  layout: Layout,
  server: Server,
  database: Database,
  code2: Code2,
};

export async function Skills() {
  const t = await getTranslations("skills");

  return (
    <section
      id={sectionIds.skills}
      className="py-20 px-6 bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#090E1B]"
    >
      <div className="max-w-6xl mx-auto">
        <FadeInView
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-lg text-gray-400">{t("subtitle")}</p>
        </FadeInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((skill, index) => {
            const Icon = iconByKey[skill.icon];
            return (
              <SkillCardMotion key={skill.icon} index={index}>
                <SkillIconMotion>
                  <Icon className="w-6 h-6 text-[#06B6D4]" />
                </SkillIconMotion>
                <h3 className="text-lg font-semibold text-white mb-2.5">
                  {t(`groups.${skill.icon}.title`)}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skill.technologies.map((tech, techIndex) => (
                    <SkillListItemMotion
                      key={tech}
                      groupIndex={index}
                      techIndex={techIndex}
                    >
                      <span
                        className="h-1 w-1 shrink-0 rounded-full bg-[#06B6D4] skill-dot-pulse"
                        style={{
                          animationDelay: `${techIndex * 0.25}s`,
                        }}
                      />
                      {tech}
                    </SkillListItemMotion>
                  ))}
                </div>
              </SkillCardMotion>
            );
          })}
        </div>
      </div>
    </section>
  );
}
