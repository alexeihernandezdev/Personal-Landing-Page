import { ServiceCta } from "@/components/contact/ServiceCta";
import { ServiceDetailAIFeatures } from "./components/ServiceDetailAIFeatures";
import { ServiceDetailBenefits } from "./components/ServiceDetailBenefits";
import { ServiceDetailDeliverables } from "./components/ServiceDetailDeliverables";
import { ServiceDetailDescription } from "./components/ServiceDetailDescription";
import { ServiceDetailFeatures } from "./components/ServiceDetailFeatures";
import { ServiceDetailInfo } from "./components/ServiceDetailInfo";
import { ServiceDetailProcess } from "./components/ServiceDetailProcess";
import { ServiceDetailTechnologies } from "./components/ServiceDetailTechnologies";
import { FooterClient } from "@components/layout/FooterClient";
import { MouseGlow } from "@components/layout/MouseGlow";
import { Navigation } from "@components/layout/Navigation";
import { iconMap, Service } from "@data/services";
import { ServiceDetailHero } from "./components/ServiceDetailHero";

interface ServiceDetailProps {
  service: Service;
  locale: string;
}

export default function ServiceDetail({ service, locale }: ServiceDetailProps) {
  const Icon = iconMap[service.iconName];
  const hasAIFeatures = service.aiFeatures && service.aiFeatures.length > 0;

  return (
    <div className="min-h-screen bg-[#090E1B] relative">
      <MouseGlow />
      <div className="relative z-10">
        <Navigation />
        <main id="main-content" tabIndex={-1} className="outline-none">
          <ServiceDetailHero
            locale={locale}
            icon={Icon && <Icon className="w-7 h-7 text-[#090E1B]" />}
            isFeatured={service.featured ?? false}
            titleKey={service.titleKey}
            shortDescriptionKey={service.shortDescriptionKey}
            image={service.image}
            timeline={service.timeline}
            includesDocumentation={service.includesDocumentation}
            includesTraining={service.includesTraining}
          />
          <ServiceDetailInfo
            whoIsForKey={service.whoIsForKey}
            howItHelpsKey={service.howItHelpsKey}
          />
          <ServiceDetailDescription
            fullDescriptionKey={service.fullDescriptionKey}
          />
          <ServiceDetailFeatures features={service.features} />
          {hasAIFeatures && (
            <ServiceDetailAIFeatures aiFeatures={service.aiFeatures!} />
          )}
          <ServiceDetailBenefits benefits={service.benefits} />
          <ServiceDetailProcess process={service.process} />
          <ServiceDetailTechnologies technologies={service.technologies} />
          <ServiceDetailDeliverables deliverables={service.deliverables} />
          <ServiceCta />
        </main>
        <FooterClient />
      </div>
    </div>
  );
}
