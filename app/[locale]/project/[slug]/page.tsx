"use client";

import { ProjectDetail } from "@/components/pages/ProjectDetail";
import { getProjects } from "@/data/projects";
import { sectionIds } from "@/data/sectionIds";
import { Link } from "@/i18n/navigation";
import { FooterClient } from "@components/layout/FooterClient";
import { MouseGlow } from "@components/layout/MouseGlow";
import { Navigation } from "@components/layout/Navigation";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";

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
      <div className="relative flex min-h-screen items-center justify-center bg-canvas">
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
            className="text-brand hover:underline"
          >
            {t("backToProjects")}
          </Link>
        </main>
      </div>
    );
  }

  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="relative min-h-screen bg-canvas">
      <MouseGlow />
      <div className="relative z-10">
        <Navigation />

        <main id="main-content" tabIndex={-1} className="outline-none">
          <ProjectDetail project={project} related={related} />
        </main>

        <FooterClient />
      </div>
    </div>
  );
}
