"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, X } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  contactInfo,
  contactMethodOrder,
  type ContactMethodKind,
} from "@data/contact";
import { sectionIds } from "@data/sectionIds";
import createMessage from "@/api/messages/createMessage";
import { FadeInView, FadeOnMount, HoverSpinIcon, PressableButton, SlideHoverRow } from "@/components/motion/thin";

const iconByKind: Record<ContactMethodKind, typeof Mail> = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrerlela";

export function Contact() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorToast, setErrorToast] = useState<string | null>(null);

  useEffect(() => {
    if (!errorToast) return;
    const id = window.setTimeout(() => setErrorToast(null), 6000);
    return () => window.clearTimeout(id);
  }, [errorToast]);

  const contactMethods = contactMethodOrder.map((kind) => {
    const Icon = iconByKind[kind];
    const value =
      kind === "email"
        ? contactInfo.email
        : kind === "phone"
          ? contactInfo.phoneDisplay
          : t("locationValue");
    const href =
      kind === "email"
        ? (`mailto:${contactInfo.email}` as const)
        : kind === "phone"
          ? (`tel:${contactInfo.phoneTel}` as const)
          : null;
    return {
      kind,
      icon: Icon,
      title: t(`methods.${kind}`),
      value,
      href,
    };
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    setSubmitting(true);
    void createMessage({ name, email, message }).catch(() => {});
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        setErrorToast(t("form.errorToast"));
        return;
      }
      form.reset();
      setSent(true);
    } catch {
      setErrorToast(t("form.errorToast"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id={sectionIds.contact} className="py-20 px-6 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <FadeInView
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("pageTitle")}
          </h2>
          <p className="text-lg text-gray-400">{t("pageSubtitle")}</p>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeInView
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {t("infoHeading")}
              </h3>
              <p className="text-gray-400 mb-8">{t("availability")}</p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <SlideHoverRow
                    key={method.kind}
                    className="flex items-start gap-4"
                    delayIndex={index}
                  >
                    <HoverSpinIcon className="w-12 h-12 bg-[#06B6D4]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#06B6D4]" />
                    </HoverSpinIcon>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {method.title}
                      </h4>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-gray-400 hover:text-[#06B6D4] transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{method.value}</p>
                      )}
                    </div>
                  </SlideHoverRow>
                );
              })}
            </div>
          </FadeInView>

          <FadeInView
            className="bg-[#1E293B] p-8 rounded-xl border border-[#334155] relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <FadeOnMount
                className="flex flex-col items-center justify-center text-center py-6 gap-4"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                role="status"
                aria-live="polite"
              >
                <div className="w-16 h-16 rounded-full bg-[#06B6D4]/15 flex items-center justify-center">
                  <CheckCircle2
                    className="w-9 h-9 text-[#06B6D4]"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t("form.successTitle")}
                  </h3>
                  <p className="text-gray-400 text-sm max-w-sm">
                    {t("form.successBody")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 px-6 py-2.5 rounded-lg border border-[#334155] text-gray-200 hover:bg-[#0F172A] hover:border-[#06B6D4]/50 transition-colors text-sm font-medium"
                >
                  {t("form.sendAnother")}
                </button>
              </FadeOnMount>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <FadeInView
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t("form.nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={submitting}
                    className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#334155] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent disabled:opacity-60"
                    placeholder={t("form.namePlaceholder")}
                  />
                </FadeInView>

                <FadeInView
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t("form.emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={submitting}
                    className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#334155] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent disabled:opacity-60"
                    placeholder={t("form.emailPlaceholder")}
                  />
                </FadeInView>

                <FadeInView
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t("form.messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    disabled={submitting}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#334155] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent resize-none disabled:opacity-60"
                    placeholder={t("form.messagePlaceholder")}
                  />
                </FadeInView>

                <FadeInView
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <PressableButton
                    type="submit"
                    disabled={submitting}
                    className="w-full px-8 py-3 bg-[#06B6D4] text-[#090E1B] rounded-lg hover:bg-[#0EA5E9] transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? t("form.submitting") : t("form.submit")}
                  </PressableButton>
                </FadeInView>
              </form>
            )}

            {errorToast ? (
              <div
                className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 flex items-start gap-3 rounded-lg border border-red-500/40 bg-[#1E1B26] px-4 py-3 shadow-lg shadow-black/40"
                role="alert"
                aria-live="assertive"
              >
                <p className="flex-1 text-sm text-red-100 pt-0.5">
                  {errorToast}
                </p>
                <button
                  type="button"
                  onClick={() => setErrorToast(null)}
                  className="rounded p-1 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={t("form.dismissToast")}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : null}
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
