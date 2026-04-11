"use client";

import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { contactInfo, contactMethodOrder, type ContactMethodKind } from '@data/contact';
import { sectionIds } from '@data/sectionIds';

const iconByKind: Record<ContactMethodKind, typeof Mail> = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};

export function Contact() {
  const t = useTranslations('contact');

  const contactMethods = contactMethodOrder.map((kind) => {
    const Icon = iconByKind[kind];
    const value =
      kind === "email"
        ? contactInfo.email
        : kind === "phone"
          ? contactInfo.phoneDisplay
          : t('locationValue');
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

  return (
    <section id={sectionIds.contact} className="py-20 px-6 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('pageTitle')}
          </h2>
          <p className="text-lg text-gray-400">
            {t('pageSubtitle')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {t('infoHeading')}
              </h3>
              <p className="text-gray-400 mb-8">
                {t('availability')}
              </p>
            </div>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div 
                    key={method.kind}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-[#06B6D4]/20 rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-[#06B6D4]" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                      {method.href ? (
                        <a href={method.href} className="text-gray-400 hover:text-[#06B6D4] transition-colors">
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{method.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-[#1E293B] p-8 rounded-xl border border-[#334155]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.nameLabel')}
                </label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#334155] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                  placeholder={t('form.namePlaceholder')}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.emailLabel')}
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#334155] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent"
                  placeholder={t('form.emailPlaceholder')}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.messageLabel')}
                </label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#334155] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent resize-none"
                  placeholder={t('form.messagePlaceholder')}
                />
              </motion.div>
              
              <motion.button 
                type="submit"
                className="w-full px-8 py-3 bg-[#06B6D4] text-[#090E1B] rounded-lg hover:bg-[#0EA5E9] transition-colors font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('form.submit')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
