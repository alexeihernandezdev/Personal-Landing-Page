"use client";
import { FadeInView } from "@components/motion/thin";
import { useTranslations } from "next-intl";
import type { StaticImageData } from "next/image";

interface ServiceDetailHeroImageProps {
  icon: React.ReactNode;
  titleKey: string;
  image: StaticImageData;
}

export function ServiceDetailHeroImage({
  icon,
  titleKey,
  image,
}: ServiceDetailHeroImageProps) {
  const t = useTranslations("services");

  return (
    <FadeInView
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={image.src}
          alt={t(`${titleKey}` as any)}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090E1B] via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-6 left-6">
          <div className="w-14 h-14 bg-[#06B6D4] rounded-xl flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
    </FadeInView>
  );
}
