import { ServiceCta } from "@/components/pages/home/contact/ServiceCta";
import { FooterClient } from "@/components/layout/FooterClient";
import { MouseGlow } from "@/components/layout/MouseGlow";
import { Navigation } from "@/components/layout/Navigation";
import { ServicesGrid } from "./ServicesGrid";
import { ServicesHero } from "./ServicesHero";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#090E1B] relative">
      <MouseGlow />
      <div className="relative z-10">
        <Navigation />
        <main id="main-content" tabIndex={-1} className="outline-none">
          <ServicesHero />
          <ServicesGrid />
          <ServiceCta delay={0.6} />
        </main>
        <FooterClient />
      </div>
    </div>
  );
};

export default Services;
