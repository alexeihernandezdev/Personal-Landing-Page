import ServiceDetail from "@/components/pages/services/ServiceDetail";
import { services } from "@data/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service not found",
    };
  }

  return {
    title: `Services - ${slug}`,
    description: "Professional technology services",
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

  return <ServiceDetail service={service} locale={locale} />;
}
