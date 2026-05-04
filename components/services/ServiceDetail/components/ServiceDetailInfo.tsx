"use client";

import { HeadingBodyCard } from "@/components/atoms/HeadingBodyCard";
import { FadeInView } from "@components/motion/thin";
import { useTranslations } from "next-intl";

interface ServiceDetailInfoProps {
  whoIsForKey: string;
  howItHelpsKey: string;
}

export function ServiceDetailInfo({
  whoIsForKey,
  howItHelpsKey,
}: ServiceDetailInfoProps) {
  const t = useTranslations("services");

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <FadeInView
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <HeadingBodyCard
              heading={t("detail.whoIsForHeading")}
              description={t(`${whoIsForKey}` as any)}
            />
          </FadeInView>
          <FadeInView
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <HeadingBodyCard
              heading={t("detail.howItHelpsHeading")}
              description={t(`${howItHelpsKey}` as any)}
            />
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
