import { getTranslations } from "next-intl/server";
import { personal } from "@data/personal";
import { ProfileAmbientOrbs } from "./ProfileAmbientOrbs";
import { FadeInView } from "@/components/motion/thin";

export async function ProfileSection() {
  const t = await getTranslations("about");

  return (
    <section className="py-[7.5rem] px-9 bg-[#090E1B] relative overflow-hidden">
      <ProfileAmbientOrbs />

      <div className="max-w-3xl mx-auto relative z-10">
        <FadeInView
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            aria-hidden
            className="block h-1 w-16 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]"
          />
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {t("title")}
          </h2>
          <FadeInView
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("bio1", { years: personal.yearsExperience })}
          </FadeInView>
          <FadeInView
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {t("bio2")}
          </FadeInView>
        </FadeInView>
      </div>
    </section>
  );
}
