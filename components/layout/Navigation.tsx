"use client";

import { useState, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { navItems } from "@data/navigation";
import { personal } from "@data/personal";
import { sectionIds } from "@data/sectionIds";

const MOBILE_NAV_PANEL_ID = "mobile-navigation-menu";

/** Hover lift: quick return to rest; slightly slower on hover-in. */
const navHoverLift = {
  rest: {
    y: 0,
    transition: { duration: 0.1, ease: [0.4, 0, 0.2, 1] as const },
  },
  hover: {
    y: -2,
    transition: { duration: 0.18, ease: [0, 0, 0.2, 1] as const },
  },
};

const navMobileSlide = {
  rest: {
    x: 0,
    transition: { duration: 0.12, ease: [0.4, 0, 0.2, 1] as const },
  },
  hover: {
    x: 10,
    transition: { duration: 0.2, ease: [0, 0, 0.2, 1] as const },
  },
};

export function Navigation() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    const raf = requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#0F172A]/95 backdrop-blur-2xl shadow-lg border-b border-[#1E293B]"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="w-fit"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href={`/#${sectionIds.hero}`} className="flex items-center gap-2">
              <motion.div
                className="w-10 h-10 bg-[#06B6D4] rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#090E1B] font-bold text-xl">
                  {personal.initials}
                </span>
              </motion.div>
              <span className="text-white font-semibold text-lg hidden sm:block">
                {personal.fullName}
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) =>
              item.type === "path" ? (
                <motion.div
                  key={item.navKey}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <motion.span
                    className="inline-block"
                    variants={navHoverLift}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                  >
                    <Link
                      href={item.path}
                      className="text-gray-300 hover:text-[#06B6D4] transition-colors font-medium"
                    >
                      {t(`nav.${item.navKey}`)}
                    </Link>
                  </motion.span>
                </motion.div>
              ) : (
                <motion.div
                  key={item.navKey}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <motion.span
                    className="inline-block"
                    variants={navHoverLift}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                  >
                    <Link
                      href={`/#${sectionIds[item.section]}`}
                      className="text-gray-300 hover:text-[#06B6D4] transition-colors font-medium"
                    >
                      {t(`nav.${item.navKey}`)}
                    </Link>
                  </motion.span>
                </motion.div>
              ),
            )}
            <LocaleSwitcher className="ml-2" />
          </div>

          <motion.button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#06B6D4] transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileTap={{ scale: 0.9 }}
            aria-expanded={isMobileMenuOpen}
            aria-controls={MOBILE_NAV_PANEL_ID}
            aria-label={t("nav.mobileMenuButton")}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <div
          id={MOBILE_NAV_PANEL_ID}
          className="md:hidden"
          aria-hidden={!isMobileMenuOpen}
        >
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="mt-4 py-4 border-t border-[#1E293B]"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-4">
                  {navItems.map((item, index) =>
                    item.type === "path" ? (
                      <motion.div
                        key={item.navKey}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.path}
                          onClick={handleLinkClick}
                          className="text-gray-300 hover:text-[#06B6D4] transition-colors font-medium block"
                        >
                          {t(`nav.${item.navKey}`)}
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={item.navKey}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <motion.span
                          className="inline-block"
                          variants={navMobileSlide}
                          initial="rest"
                          animate="rest"
                          whileHover="hover"
                        >
                          <Link
                            href={`/#${sectionIds[item.section]}`}
                            onClick={handleLinkClick}
                            className="text-gray-300 hover:text-[#06B6D4] transition-colors font-medium"
                          >
                            {t(`nav.${item.navKey}`)}
                          </Link>
                        </motion.span>
                      </motion.div>
                    ),
                  )}
                  <div className="pt-2 border-t border-[#1E293B] flex justify-center">
                    <LocaleSwitcher onNavigate={handleLinkClick} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
