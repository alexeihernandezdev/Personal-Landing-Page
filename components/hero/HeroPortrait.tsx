"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "../atoms/ImageWithFallback";

type Props = {
  src: string;
  alt: string;
};

export function HeroPortrait({ src, alt }: Props) {
  return (
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
          src={src}
          alt={alt}
          className="h-auto w-full rounded-2xl shadow-2xl"
          width={800}
          height={533}
          sizes="(max-width: 1200px) 50vw, 600px"
        />
      </motion.div>
    </motion.div>
  );
}
