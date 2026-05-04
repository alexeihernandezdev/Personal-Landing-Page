"use client";

import { Link } from "@/i18n/navigation";
import { FadeInView } from "@components/motion/thin";
import { services } from "@data/services";
import { ServicesGridItem } from "./ServicesGridItem";

export function ServicesGrid() {
  return (
    <section className="pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <FadeInView
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group"
                >
                  <ServicesGridItem service={service} index={index} />
                </Link>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}