import ServiceDetail from "@/components/pages/services/ServiceDetail";
import { services } from "@data/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service not found" };
  }

  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: t(service.titleKey),
    description: t(service.shortDescriptionKey),
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "services" });
  const serviceTitle = t(service.titleKey);
  const serviceDescription = t(service.shortDescriptionKey);

  const siteUrl = getSiteUrl();
  const homeUrl = `${siteUrl}/${locale}`;
  const pageUrl = `${homeUrl}/services/${slug}`;
  const servicesUrl = `${siteUrl}/${locale}/services`;
  const breadcrumbHome = locale === "es" ? "Inicio" : "Home";
  const breadcrumbServices = locale === "es" ? "Servicios" : "Services";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: serviceTitle,
        description: serviceDescription,
        url: pageUrl,
        provider: { "@id": `${homeUrl}#person` },
        serviceType: t(service.categoryKey),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: breadcrumbHome, item: homeUrl },
          { "@type": "ListItem", position: 2, name: breadcrumbServices, item: servicesUrl },
          { "@type": "ListItem", position: 3, name: serviceTitle },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd value={jsonLd} />
      <ServiceDetail service={service} locale={locale} />
    </>
  );
}
