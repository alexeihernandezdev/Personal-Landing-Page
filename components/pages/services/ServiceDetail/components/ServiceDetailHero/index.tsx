import { ServiceDetailHeroBackground } from "./ServiceDetailHeroBackground";
import { ServiceDetailHeroBreadcrumb } from "./ServiceDetailHeroBreadcrumb";
import { ServiceDetailHeroContent } from "./ServiceDetailHeroContent";
import { ServiceDetailHeroImage } from "./ServiceDetailHeroImage";

interface ServiceDetailHeroProps {
  locale: string;
  icon: React.ReactNode;
  isFeatured: boolean;
  titleKey: string;
  shortDescriptionKey: string;
  image: string;
  timeline: string;
  includesDocumentation: boolean;
  includesTraining: boolean;
}

export async function ServiceDetailHero({
  icon,
  isFeatured,
  titleKey,
  shortDescriptionKey,
  image,
  timeline,
  includesDocumentation,
  includesTraining,
}: ServiceDetailHeroProps) {
  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      <ServiceDetailHeroBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <ServiceDetailHeroBreadcrumb />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ServiceDetailHeroContent
            isFeatured={isFeatured}
            titleKey={titleKey}
            shortDescriptionKey={shortDescriptionKey}
            timeline={timeline}
            includesDocumentation={includesDocumentation}
            includesTraining={includesTraining}
          />
          <ServiceDetailHeroImage
            icon={icon}
            titleKey={titleKey}
            image={image}
          />
        </div>
      </div>
    </section>
  );
}
