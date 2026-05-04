"use client";

import { ProjectDetailBackLink } from "./components/ProjectDetailBackLink";
import { ProjectDetailHeader } from "./components/ProjectDetailHeader";
import { ProjectDetailHeroImage } from "./components/ProjectDetailHeroImage";
import { ProjectDetailDescription } from "./components/ProjectDetailDescription";
import { ProjectDetailFeatures } from "./components/ProjectDetailFeatures";
import { ProjectDetailChallenges } from "./components/ProjectDetailChallenges";
import { ProjectDetailScreenshots } from "./components/ProjectDetailScreenshots";
import { ProjectDetailTechnologies } from "./components/ProjectDetailTechnologies";
import { ProjectDetailRelated } from "./components/ProjectDetailRelated";
import type { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
  related: Project[];
}

export function ProjectDetail({ project, related }: ProjectDetailProps) {
  return (
    <article className="px-6 pb-16 pt-32">
      <div className="mx-auto max-w-6xl">
        <ProjectDetailBackLink />
        <ProjectDetailHeader project={project} />
        <ProjectDetailHeroImage project={project} />

        <div className="mb-12 grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <ProjectDetailDescription project={project} />
            <ProjectDetailFeatures project={project} />
            <ProjectDetailChallenges project={project} />
            <ProjectDetailScreenshots project={project} />
          </div>

          <div className="space-y-8">
            <ProjectDetailTechnologies project={project} />
          </div>
        </div>

        <ProjectDetailRelated related={related} />
      </div>
    </article>
  );
}