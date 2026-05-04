"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface ServicesGridItemFeaturesProps {
  features: string[];
}

export function ServicesGridItemFeatures({ features }: ServicesGridItemFeaturesProps) {
  const t = useTranslations("services");

  return (
    <ul className="space-y-2 mb-6">
      {features.slice(0, 3).map((featureKey, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
          <CheckCircle2 className="w-4 h-4 text-[#06B6D4] flex-shrink-0 mt-0.5" />
          <span className="line-clamp-1">
            {t(`${featureKey}` as any)}
          </span>
        </li>
      ))}
    </ul>
  );
}