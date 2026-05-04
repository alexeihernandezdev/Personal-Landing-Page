"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "@/components/atoms/ImageWithFallback";

type CardProps = {
  index: number;
  children: React.ReactNode;
};

export function ProjectCardMotion({ index, children }: CardProps) {
  return (
    <motion.div
      className="bg-[#0F172A] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#06B6D4]/20 border border-[#1E293B]"
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        y: -15,
        rotateY: 3,
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
}

type ImageProps = {
  src: string;
  alt: string;
};

export function ProjectImageMotion({ src, alt }: ImageProps) {
  return (
    <div className="relative h-48 overflow-hidden">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <ImageWithFallback
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
}

type FooterProps = {
  index: number;
  children: React.ReactNode;
};

export function ProjectLinksMotion({ index, children }: FooterProps) {
  return (
    <motion.div
      className="flex flex-wrap gap-4 px-6 pb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
    >
      {children}
    </motion.div>
  );
}

type ExternalLinkProps = React.ComponentProps<typeof motion.a>;

export function ProjectExternalLinkMotion(props: ExternalLinkProps) {
  return (
    <motion.a
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    />
  );
}
