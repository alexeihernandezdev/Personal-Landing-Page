'use client';

import { Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function BlogComingSoon() {
  const t = useTranslations('blog');

  return (
    <section className="py-24 px-6" aria-labelledby="blog-coming-soon-heading">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 mb-8">
          <Sparkles className="w-8 h-8 text-[#06B6D4]" aria-hidden />
        </div>
        <h2
          id="blog-coming-soon-heading"
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {t('comingSoonTitle')}
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          {t('comingSoonSubtitle')}
        </p>
      </div>
    </section>
  );
}
