"use client";

import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { personal } from '@data/personal';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-8 px-6 bg-[#090E1B] border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p 
          className="flex items-center justify-center gap-2 text-gray-400 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('developedWith')}{' '}
          <motion.span
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-4 h-4 text-[#06B6D4] fill-[#06B6D4]" />
          </motion.span>
          {' '}{t('byAuthor', { name: personal.fullName })}
        </motion.p>
        <motion.p 
          className="text-gray-500 text-sm mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © {new Date().getFullYear()} {t('rightsReserved')}
        </motion.p>
      </div>
    </footer>
  );
}
