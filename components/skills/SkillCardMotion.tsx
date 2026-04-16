"use client";

import { motion } from "motion/react";

type Props = {
  index: number;
  children: React.ReactNode;
};

export function SkillCardMotion({ index, children }: Props) {
  return (
    <motion.div
      className="p-6 rounded-xl bg-[#1E293B]/80 backdrop-blur-sm border-2 border-[#334155] hover:border-[#06B6D4] hover:shadow-lg hover:shadow-[#06B6D4]/20 hover:bg-[#1E293B]"
      initial={{ opacity: 0, y: 90 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.1,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: {
          duration: 0.4,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function SkillIconMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="w-12 h-12 bg-[#06B6D4]/20 rounded-lg flex items-center justify-center mb-4"
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export function SkillListItemMotion({
  groupIndex,
  techIndex,
  children,
}: {
  groupIndex: number;
  techIndex: number;
  children: React.ReactNode;
}) {
  return (
    <motion.li
      className="text-gray-400 flex items-center gap-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: groupIndex * 0.1 + techIndex * 0.05,
      }}
    >
      {children}
    </motion.li>
  );
}
