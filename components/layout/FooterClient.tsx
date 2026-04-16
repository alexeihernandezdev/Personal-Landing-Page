"use client";

import { Heart } from "lucide-react";
import { useTranslations } from "next-intl";
import { personal } from "@data/personal";
import { FadeInView } from "../motion/thin";

/** Use this footer from Client Component pages. Prefer async `Footer` from `@components/layout/Footer` in Server Components. */
export function FooterClient() {
  const t = useTranslations("footer");

  return (
    <footer className="py-8 px-6 bg-[#090E1B] border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto text-center">
        <FadeInView
          className="flex items-center justify-center gap-2 text-gray-400 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("developedWith")}{" "}
          <span className="footer-heart-pulse inline-flex">
            <Heart className="w-4 h-4 text-[#06B6D4] fill-[#06B6D4]" />
          </span>{" "}
          {t("byAuthor", { name: personal.fullName })}
        </FadeInView>
        <FadeInView
          className="text-gray-500 text-sm mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © {new Date().getFullYear()} {t("rightsReserved")}
        </FadeInView>
      </div>
    </footer>
  );
}
