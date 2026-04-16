"use client";

import { motion } from "motion/react";

export function ProfileAmbientOrbs() {
  return (
    <motion.div
      className="absolute inset-0 opacity-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.2 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0891B2] rounded-full blur-[150px]"
        animate={{
          x: [0, 45, -30, 0],
          y: [0, -30, 45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0369A1] rounded-full blur-[150px]"
        animate={{
          x: [0, -45, 30, 0],
          y: [0, 30, -45, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
