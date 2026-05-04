import { Download, Github, Linkedin, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { personal } from "@data/personal";
import { sectionIds } from "@data/sectionIds";
import { social } from "@data/social";
import { contactInfo } from "@data/contact";
import { cvUrls } from "@data/cv";
import { HeroPortrait } from "./HeroPortrait";
import { FadeOnMount, PressableAnchor, SocialIconAnchor } from "@/components/motion/thin";

const mailHref = `mailto:${contactInfo.email}`;

export async function Hero() {
  const t = await getTranslations("hero");
  const socialLinks = [
    { href: social.github, icon: Github, labelKey: "socialGithub" as const },
    {
      href: social.linkedin,
      icon: Linkedin,
      labelKey: "socialLinkedin" as const,
    },
    { href: mailHref, icon: Mail, labelKey: "socialEmail" as const },
  ] as const;

  return (
    <section
      id={sectionIds.hero}
      className="min-h-screen flex w-full min-w-0 items-center justify-center px-6 py-20 bg-[#090E1B]"
    >
      <div className="grid w-full min-w-0 max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <FadeOnMount
          className="min-w-0 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <FadeOnMount
            className="space-y-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#06B6D4] font-medium">{t("greeting")}</p>
            <h1 className="break-words text-5xl font-bold text-white md:text-6xl">
              {personal.fullName}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300">{t("role")}</h2>
          </FadeOnMount>

          <FadeOnMount
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("description")}
          </FadeOnMount>

          <FadeOnMount
            className="flex flex-wrap gap-3 sm:gap-4 pt-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <PressableAnchor
              href={`#${sectionIds.contact}`}
              className="px-8 py-3 bg-[#06B6D4] text-[#090E1B] rounded-lg hover:bg-[#0EA5E9] transition-colors font-medium"
            >
              {t("primaryCta")}
            </PressableAnchor>
            <PressableAnchor
              href={`#${sectionIds.projects}`}
              className="px-8 py-3 border-2 border-[#06B6D4] text-[#06B6D4] rounded-lg hover:bg-[#06B6D4]/10 transition-colors font-medium"
            >
              {t("secondaryCta")}
            </PressableAnchor>
            <div className="flex flex-wrap gap-2 items-center">
              <PressableAnchor
                href={cvUrls.en}
                download
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#06B6D4]/60 text-[#06B6D4] rounded-lg hover:bg-[#06B6D4]/10 transition-colors font-medium text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 shrink-0" aria-hidden />
                {t("cv")}
              </PressableAnchor>
            </div>
          </FadeOnMount>

          <FadeOnMount
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {socialLinks.map((item, index) => (
              <SocialIconAnchor
                key={item.href}
                href={item.href}
                aria-label={t(item.labelKey)}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                index={index}
                className="p-3 bg-[#0F172A] rounded-full hover:bg-[#1E293B] transition-colors shadow-md"
              >
                <item.icon className="w-6 h-6 text-[#06B6D4]" aria-hidden />
              </SocialIconAnchor>
            ))}
          </FadeOnMount>
        </FadeOnMount>

        <HeroPortrait src={personal.heroImageUrl} alt={t("heroImageAlt")} />
      </div>
    </section>
  );
}
