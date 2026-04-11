"use client";

import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './atoms/ImageWithFallback';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { personal } from '@data/personal';
import { sectionIds } from '@data/sectionIds';
import { social } from '@data/social';
import { contactInfo } from '@data/contact';
import { cvUrls } from '@data/cv';

const mailHref = `mailto:${contactInfo.email}`;

export function Hero() {
  const t = useTranslations('hero');
  const socialLinks = [
    { href: social.github, icon: Github },
    { href: social.linkedin, icon: Linkedin },
    { href: mailHref, icon: Mail },
  ] as const;

  return (
    <section id={sectionIds.hero} className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#090E1B]">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#06B6D4] font-medium">{t('greeting')}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {personal.fullName}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300">
              {t('role')}
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('description')}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 pt-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a 
              href={`#${sectionIds.contact}`}
              className="px-8 py-3 bg-[#06B6D4] text-[#090E1B] rounded-lg hover:bg-[#0EA5E9] transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('primaryCta')}
            </motion.a>
            <motion.a 
              href={`#${sectionIds.projects}`}
              className="px-8 py-3 border-2 border-[#06B6D4] text-[#06B6D4] rounded-lg hover:bg-[#06B6D4]/10 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('secondaryCta')}
            </motion.a>
            <div className="flex flex-wrap gap-2 items-center">
              <motion.a
                href={cvUrls.en}
                download
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#06B6D4]/60 text-[#06B6D4] rounded-lg hover:bg-[#06B6D4]/10 transition-colors font-medium text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 shrink-0" aria-hidden />
                {t('cvEn')}
              </motion.a>
              <motion.a
                href={cvUrls.es}
                download
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#06B6D4]/60 text-[#06B6D4] rounded-lg hover:bg-[#06B6D4]/10 transition-colors font-medium text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 shrink-0" aria-hidden />
                {t('cvEs')}
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {socialLinks.map((item, index) => (
              <motion.a 
                key={item.href}
                href={item.href} 
                target={item.href.startsWith('mailto') ? undefined : "_blank"} 
                rel={item.href.startsWith('mailto') ? undefined : "noopener noreferrer"} 
                className="p-3 bg-[#0F172A] rounded-full hover:bg-[#1E293B] transition-colors shadow-md"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon className="w-6 h-6 text-[#06B6D4]" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback 
              src={personal.heroImageUrl}
              alt={t('heroImageAlt')}
              className="rounded-2xl shadow-2xl w-full h-auto"
              width={800}
              height={600}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
