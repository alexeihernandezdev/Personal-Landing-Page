import { ExternalLink, Github } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getProjects, projectHasGithubLink } from "@data/projects";
import { sectionIds } from "@data/sectionIds";
import {
  ProjectCardMotion,
  ProjectImageMotion,
  ProjectLinksMotion,
  ProjectExternalLinkMotion,
} from "./ProjectCardMotion";
import { FadeInView } from "@/components/motion/thin";

export async function Projects() {
  const t = await getTranslations("projects");
  const locale = await getLocale();
  const projects = getProjects(locale);

  return (
    <section id={sectionIds.projects} className="py-20 px-6 bg-[#090E1B]">
      <div className="max-w-6xl mx-auto">
        <FadeInView
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("sectionTitle")}
          </h2>
          <p className="text-lg text-gray-400">{t("sectionSubtitle")}</p>
        </FadeInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCardMotion key={project.id} index={index}>
              <Link href={`/project/${project.slug}`} className="block">
                <ProjectImageMotion src={project.image} alt={project.title} />

                <div className="px-6 pt-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#06B6D4]/20 text-[#06B6D4] rounded-full text-sm transition-transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              <ProjectLinksMotion index={index}>
                {projectHasGithubLink(project) ? (
                  <ProjectExternalLinkMotion
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">{t("codeLink")}</span>
                  </ProjectExternalLinkMotion>
                ) : null}
                <ProjectExternalLinkMotion
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#06B6D4] hover:text-[#0EA5E9] transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm">
                    {project.demoIsProduction
                      ? t("demoLinkProduction")
                      : t("demoLink")}
                  </span>
                </ProjectExternalLinkMotion>
              </ProjectLinksMotion>
            </ProjectCardMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
