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
      className="relative isolate flex min-h-screen w-full min-w-0 items-center justify-center overflow-hidden bg-[#090E1B] px-6 py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#06B6D4]/15 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-[#0EA5E9]/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="grid w-full min-w-0 max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[3fr_2fr]">
        <FadeOnMount
          className="min-w-0 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <FadeOnMount
            className="space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#06B6D4] sm:text-sm">
              <span aria-hidden className="h-px w-8 bg-[#06B6D4]" />
              {personal.fullName}
            </p>
            <h1 className="break-words text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t("headlineLead")}{" "}
              <span className="bg-gradient-to-r from-[#06B6D4] via-[#22D3EE] to-[#0EA5E9] bg-clip-text text-transparent">
                {t("headlineHighlight")}
              </span>
            </h1>
          </FadeOnMount>

          <FadeOnMount
            className="max-w-2xl text-lg leading-relaxed text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("descriptionLead", { years: personal.yearsExperience })}{" "}
            <span className="font-semibold text-white">
              {t("descriptionTech")}
            </span>
            . {t("descriptionTail")}
          </FadeOnMount>

          <FadeOnMount
            className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <PressableAnchor
              href={`#${sectionIds.contact}`}
              className="rounded-lg bg-[#06B6D4] px-8 py-3 font-medium text-[#090E1B] shadow-lg shadow-[#06B6D4]/20 transition-colors hover:bg-[#0EA5E9]"
            >
              {t("primaryCta")}
            </PressableAnchor>
            <PressableAnchor
              href={`#${sectionIds.projects}`}
              className="rounded-lg border-2 border-[#06B6D4] px-8 py-3 font-medium text-[#06B6D4] transition-colors hover:bg-[#06B6D4]/10"
            >
              {t("secondaryCta")}
            </PressableAnchor>
            <div className="flex flex-wrap items-center gap-2">
              <PressableAnchor
                href={cvUrls.en}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-[#06B6D4]/60 px-5 py-3 text-sm font-medium text-[#06B6D4] transition-colors hover:bg-[#06B6D4]/10 sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden />
                {t("cv")}
              </PressableAnchor>
            </div>
          </FadeOnMount>

          <FadeOnMount
            className="flex gap-4 pt-2"
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
                className="rounded-full bg-[#0F172A] p-3 shadow-md transition-colors hover:bg-[#1E293B]"
              >
                <item.icon className="h-6 w-6 text-[#06B6D4]" aria-hidden />
              </SocialIconAnchor>
            ))}
          </FadeOnMount>
        </FadeOnMount>

        <HeroPortrait
          src={personal.profileImage}
          alt={t("profileImageAlt", { name: personal.fullName })}
          availabilityLabel={t("availabilityBadge")}
        />
      </div>
    </section>
  );
}
