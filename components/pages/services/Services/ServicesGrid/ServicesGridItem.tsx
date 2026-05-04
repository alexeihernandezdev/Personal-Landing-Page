"use client";

import { useTranslations } from "next-intl";
import { ServicesGridItemImage } from "./ServicesGridItemImage";
import { ServicesGridItemFeatures } from "./ServicesGridItemFeatures";
import { ServicesGridItemCta } from "./ServicesGridItemCta";
import { iconMap, Service } from "@data/services";

interface ServicesGridItemProps {
  service: Service;
  index: number;
}

export function ServicesGridItem({ service, index }: ServicesGridItemProps) {
  const t = useTranslations("services");
  const Icon = iconMap[service.iconName];

  return (
    <div className="bg-[#0F172A] rounded-xl overflow-hidden border border-[#1E293B] hover:border-[#06B6D4] transition-all duration-300 group block h-full">
      <ServicesGridItemImage
        image={service.image}
        icon={Icon && <Icon className="w-6 h-6 text-[#090E1B]" />}
        title={t(`${service.titleKey}` as any)}
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#06B6D4] transition-colors">
          {t(`${service.titleKey}` as any)}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">
          {t(`${service.shortDescriptionKey}` as any)}
        </p>

        <ServicesGridItemFeatures features={service.features} />

        <ServicesGridItemCta timeline={service.timeline} />
      </div>
    </div>
  );
}