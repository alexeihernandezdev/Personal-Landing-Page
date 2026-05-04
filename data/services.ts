import {
  Code2,
  Globe,
  Globe2,
  Monitor,
  RefreshCw,
  Rocket,
  Search,
  Workflow,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  iconName: string;
  titleKey: string;
  shortDescriptionKey: string;
  fullDescriptionKey: string;
  image: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  process: ServiceProcess[];
  deliverables: string[];
  timeline: string;
  categoryKey: string;
  featured?: boolean;
  whoIsForKey: string;
  howItHelpsKey: string;
  freeConsultationCtaKey: string;
  aiFeatures?: string[];
  includesDocumentation: boolean;
  includesTraining: boolean;
}

export const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Globe2,
  Monitor,
  RefreshCw,
  Rocket,
  Search,
  Workflow,
  Wrench,
};

export const services: Service[] = [
  {
    id: "1",
    slug: "web-applications",
    iconName: "Monitor",
    titleKey: "webapps.title",
    shortDescriptionKey: "webapps.shortDescription",
    fullDescriptionKey: "webapps.fullDescription",
    image: "/images/services/webapps.jpg",
    features: [
      "webapps.features.0",
      "webapps.features.1",
      "webapps.features.2",
      "webapps.features.3",
      "webapps.features.4",
      "webapps.features.5",
      "webapps.features.6",
      "webapps.features.7",
      "webapps.features.8",
    ],
    benefits: [
      "webapps.benefits.0",
      "webapps.benefits.1",
      "webapps.benefits.2",
      "webapps.benefits.3",
      "webapps.benefits.4",
      "webapps.benefits.5",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "OpenAI API",
      "LangChain",
      "PayPal",
      "Stripe",
      "WhatsApp Business API",
      "Firebase",
      "Supabase",
      "Docker",
      "Vercel",
    ],
    process: [
      {
        step: 1,
        title: "webapps.process.0.title",
        description: "webapps.process.0.description",
      },
      {
        step: 2,
        title: "webapps.process.1.title",
        description: "webapps.process.1.description",
      },
      {
        step: 3,
        title: "webapps.process.2.title",
        description: "webapps.process.2.description",
      },
      {
        step: 4,
        title: "webapps.process.3.title",
        description: "webapps.process.3.description",
      },
      {
        step: 5,
        title: "webapps.process.4.title",
        description: "webapps.process.4.description",
      },
      {
        step: 6,
        title: "webapps.process.5.title",
        description: "webapps.process.5.description",
      },
    ],
    deliverables: [
      "webapps.deliverables.0",
      "webapps.deliverables.1",
      "webapps.deliverables.2",
      "webapps.deliverables.3",
      "webapps.deliverables.4",
    ],
    timeline: "4-12",
    categoryKey: "categories.webapps",
    featured: true,
    whoIsForKey: "webapps.whoIsFor",
    howItHelpsKey: "webapps.howItHelps",
    freeConsultationCtaKey: "webapps.freeConsultationCta",
    aiFeatures: [
      "webapps.aiFeatures.0",
      "webapps.aiFeatures.1",
      "webapps.aiFeatures.2",
      "webapps.aiFeatures.3",
      "webapps.aiFeatures.4",
    ],
    includesDocumentation: true,
    includesTraining: true,
  },
  {
    id: "2",
    slug: "digital-presence",
    iconName: "Globe",
    titleKey: "presencia.title",
    shortDescriptionKey: "presencia.shortDescription",
    fullDescriptionKey: "presencia.fullDescription",
    image: "/images/services/presencia.jpg",
    features: [
      "presencia.features.0",
      "presencia.features.1",
      "presencia.features.2",
      "presencia.features.3",
      "presencia.features.4",
      "presencia.features.5",
      "presencia.features.6",
      "presencia.features.7",
    ],
    benefits: [
      "presencia.benefits.0",
      "presencia.benefits.1",
      "presencia.benefits.2",
      "presencia.benefits.3",
      "presencia.benefits.4",
      "presencia.benefits.5",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Vercel",
    ],
    process: [
      {
        step: 1,
        title: "presencia.process.0.title",
        description: "presencia.process.0.description",
      },
      {
        step: 2,
        title: "presencia.process.1.title",
        description: "presencia.process.1.description",
      },
      {
        step: 3,
        title: "presencia.process.2.title",
        description: "presencia.process.2.description",
      },
      {
        step: 4,
        title: "presencia.process.3.title",
        description: "presencia.process.3.description",
      },
      {
        step: 5,
        title: "presencia.process.4.title",
        description: "presencia.process.4.description",
      },
      {
        step: 6,
        title: "presencia.process.5.title",
        description: "presencia.process.5.description",
      },
    ],
    deliverables: [
      "presencia.deliverables.0",
      "presencia.deliverables.1",
      "presencia.deliverables.2",
      "presencia.deliverables.3",
      "presencia.deliverables.4",
    ],
    timeline: "1-2",
    categoryKey: "categories.webapps",
    whoIsForKey: "presencia.whoIsFor",
    howItHelpsKey: "presencia.howItHelps",
    freeConsultationCtaKey: "presencia.freeConsultationCta",
    includesDocumentation: true,
    includesTraining: true,
  },
  {
    id: "3",
    slug: "modernization-redesign",
    iconName: "RefreshCw",
    titleKey: "modernizacion.title",
    shortDescriptionKey: "modernizacion.shortDescription",
    fullDescriptionKey: "modernizacion.fullDescription",
    image: "/images/services/modernizacion.jpg",
    features: [
      "modernizacion.features.0",
      "modernizacion.features.1",
      "modernizacion.features.2",
      "modernizacion.features.3",
      "modernizacion.features.4",
      "modernizacion.features.5",
      "modernizacion.features.6",
      "modernizacion.features.7",
    ],
    benefits: [
      "modernizacion.benefits.0",
      "modernizacion.benefits.1",
      "modernizacion.benefits.2",
      "modernizacion.benefits.3",
      "modernizacion.benefits.4",
      "modernizacion.benefits.5",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lighthouse",
      "WebPageTest",
    ],
    process: [
      {
        step: 1,
        title: "modernizacion.process.0.title",
        description: "modernizacion.process.0.description",
      },
      {
        step: 2,
        title: "modernizacion.process.1.title",
        description: "modernizacion.process.1.description",
      },
      {
        step: 3,
        title: "modernizacion.process.2.title",
        description: "modernizacion.process.2.description",
      },
      {
        step: 4,
        title: "modernizacion.process.3.title",
        description: "modernizacion.process.3.description",
      },
      {
        step: 5,
        title: "modernizacion.process.4.title",
        description: "modernizacion.process.4.description",
      },
      {
        step: 6,
        title: "modernizacion.process.5.title",
        description: "modernizacion.process.5.description",
      },
    ],
    deliverables: [
      "modernizacion.deliverables.0",
      "modernizacion.deliverables.1",
      "modernizacion.deliverables.2",
      "modernizacion.deliverables.3",
      "modernizacion.deliverables.4",
    ],
    timeline: "2-6",
    categoryKey: "categories.modernization",
    whoIsForKey: "modernizacion.whoIsFor",
    howItHelpsKey: "modernizacion.howItHelps",
    freeConsultationCtaKey: "modernizacion.freeConsultationCta",
    includesDocumentation: true,
    includesTraining: true,
  },
  {
    id: "4",
    slug: "seo-optimization",
    iconName: "Search",
    titleKey: "seo.title",
    shortDescriptionKey: "seo.shortDescription",
    fullDescriptionKey: "seo.fullDescription",
    image: "/images/services/seo.jpg",
    features: [
      "seo.features.0",
      "seo.features.1",
      "seo.features.2",
      "seo.features.3",
      "seo.features.4",
      "seo.features.5",
      "seo.features.6",
      "seo.features.7",
    ],
    benefits: [
      "seo.benefits.0",
      "seo.benefits.1",
      "seo.benefits.2",
      "seo.benefits.3",
      "seo.benefits.4",
      "seo.benefits.5",
    ],
    technologies: [
      "Google Search Console",
      "Lighthouse",
      "Screaming Frog",
      "SEMrush",
      "Ahrefs",
      "Next.js SEO",
    ],
    process: [
      {
        step: 1,
        title: "seo.process.0.title",
        description: "seo.process.0.description",
      },
      {
        step: 2,
        title: "seo.process.1.title",
        description: "seo.process.1.description",
      },
      {
        step: 3,
        title: "seo.process.2.title",
        description: "seo.process.2.description",
      },
      {
        step: 4,
        title: "seo.process.3.title",
        description: "seo.process.3.description",
      },
      {
        step: 5,
        title: "seo.process.4.title",
        description: "seo.process.4.description",
      },
      {
        step: 6,
        title: "seo.process.5.title",
        description: "seo.process.5.description",
      },
    ],
    deliverables: [
      "seo.deliverables.0",
      "seo.deliverables.1",
      "seo.deliverables.2",
      "seo.deliverables.3",
      "seo.deliverables.4",
    ],
    timeline: "1-3",
    categoryKey: "categories.seo",
    whoIsForKey: "seo.whoIsFor",
    howItHelpsKey: "seo.howItHelps",
    freeConsultationCtaKey: "seo.freeConsultationCta",
    includesDocumentation: true,
    includesTraining: true,
  },
  {
    id: "5",
    slug: "business-automation",
    iconName: "Workflow",
    titleKey: "automation.title",
    shortDescriptionKey: "automation.shortDescription",
    fullDescriptionKey: "automation.fullDescription",
    image: "/images/services/automation.jpg",
    features: [
      "automation.features.0",
      "automation.features.1",
      "automation.features.2",
      "automation.features.3",
      "automation.features.4",
      "automation.features.5",
      "automation.features.6",
      "automation.features.7",
    ],
    benefits: [
      "automation.benefits.0",
      "automation.benefits.1",
      "automation.benefits.2",
      "automation.benefits.3",
      "automation.benefits.4",
      "automation.benefits.5",
    ],
    technologies: [
      "Zapier",
      "Make",
      "n8n",
      "WhatsApp Business API",
      "Twilio",
      "Google Sheets API",
      "Slack API",
    ],
    process: [
      {
        step: 1,
        title: "automation.process.0.title",
        description: "automation.process.0.description",
      },
      {
        step: 2,
        title: "automation.process.1.title",
        description: "automation.process.1.description",
      },
      {
        step: 3,
        title: "automation.process.2.title",
        description: "automation.process.2.description",
      },
      {
        step: 4,
        title: "automation.process.3.title",
        description: "automation.process.3.description",
      },
      {
        step: 5,
        title: "automation.process.4.title",
        description: "automation.process.4.description",
      },
      {
        step: 6,
        title: "automation.process.5.title",
        description: "automation.process.5.description",
      },
    ],
    deliverables: [
      "automation.deliverables.0",
      "automation.deliverables.1",
      "automation.deliverables.2",
      "automation.deliverables.3",
      "automation.deliverables.4",
    ],
    timeline: "3-6",
    categoryKey: "categories.automation",
    whoIsForKey: "automation.whoIsFor",
    howItHelpsKey: "automation.howItHelps",
    freeConsultationCtaKey: "automation.freeConsultationCta",
    includesDocumentation: true,
    includesTraining: true,
  },
  {
    id: "6",
    slug: "web-maintenance",
    iconName: "Wrench",
    titleKey: "maintenance.title",
    shortDescriptionKey: "maintenance.shortDescription",
    fullDescriptionKey: "maintenance.fullDescription",
    image: "/images/services/maintenance.jpg",
    features: [
      "maintenance.features.0",
      "maintenance.features.1",
      "maintenance.features.2",
      "maintenance.features.3",
      "maintenance.features.4",
      "maintenance.features.5",
      "maintenance.features.6",
      "maintenance.features.7",
    ],
    benefits: [
      "maintenance.benefits.0",
      "maintenance.benefits.1",
      "maintenance.benefits.2",
      "maintenance.benefits.3",
      "maintenance.benefits.4",
      "maintenance.benefits.5",
    ],
    technologies: ["Next.js", "Vercel", "GitHub", "Cloudflare", "Node.js"],
    process: [
      {
        step: 1,
        title: "maintenance.process.0.title",
        description: "maintenance.process.0.description",
      },
      {
        step: 2,
        title: "maintenance.process.1.title",
        description: "maintenance.process.1.description",
      },
      {
        step: 3,
        title: "maintenance.process.2.title",
        description: "maintenance.process.2.description",
      },
      {
        step: 4,
        title: "maintenance.process.3.title",
        description: "maintenance.process.3.description",
      },
      {
        step: 5,
        title: "maintenance.process.4.title",
        description: "maintenance.process.4.description",
      },
      {
        step: 6,
        title: "maintenance.process.5.title",
        description: "maintenance.process.5.description",
      },
    ],
    deliverables: [
      "maintenance.deliverables.0",
      "maintenance.deliverables.1",
      "maintenance.deliverables.2",
      "maintenance.deliverables.3",
      "maintenance.deliverables.4",
    ],
    timeline: "1-4",
    categoryKey: "categories.support",
    whoIsForKey: "maintenance.whoIsFor",
    howItHelpsKey: "maintenance.howItHelps",
    freeConsultationCtaKey: "maintenance.freeConsultationCta",
    includesDocumentation: true,
    includesTraining: true,
  },
];
