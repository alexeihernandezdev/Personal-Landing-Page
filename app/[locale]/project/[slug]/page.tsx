import { notFound } from "next/navigation";
import { getProjects } from "@/data/projects";
import { FooterClient } from "@components/layout/FooterClient";
import { MouseGlow } from "@components/layout/MouseGlow";
import { Navigation } from "@components/layout/Navigation";
import { ProjectDetail } from "@/components/pages/ProjectDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const projects = getProjects(locale);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);

  const siteUrl = getSiteUrl();
  const homeUrl = `${siteUrl}/${locale}`;
  const pageUrl = `${homeUrl}/project/${slug}`;
  const breadcrumbHome = locale === "es" ? "Inicio" : "Home";
  const breadcrumbProjects = locale === "es" ? "Proyectos" : "Projects";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#project`,
        name: project.title,
        description: project.shortDescription,
        url: project.demo,
        applicationCategory: "WebApplication",
        keywords: project.technologies.join(", "),
        author: { "@id": `${homeUrl}#person` },
        ...(project.github ? { codeRepository: project.github } : {}),
        dateCreated: project.year,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: breadcrumbHome, item: homeUrl },
          { "@type": "ListItem", position: 2, name: breadcrumbProjects, item: `${siteUrl}/${locale}#projects` },
          { "@type": "ListItem", position: 3, name: project.title },
        ],
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-[#090E1B]">
      <JsonLd value={jsonLd} />
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
