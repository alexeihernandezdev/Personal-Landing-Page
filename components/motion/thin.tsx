"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type ButtonMotion = Omit<HTMLMotionProps<"button">, "children">;

type DivMotion = Omit<HTMLMotionProps<"div">, "children">;

export function FadeOnMount({
  className,
  children,
  initial,
  animate,
  transition,
  ...rest
}: DivMotion & { children: React.ReactNode }) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const defaultView = { once: true };

export function FadeInView({
  className,
  children,
  initial,
  whileInView,
  viewport,
  transition,
}: DivMotion & { children: React.ReactNode }) {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport ?? defaultView}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

type AnchorMotion = Omit<HTMLMotionProps<"a">, "children">;

export function PressableAnchor({
  className,
  children,
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  ...rest
}: AnchorMotion & { children: React.ReactNode }) {
  return (
    <motion.a
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

export function SocialIconAnchor({
  className,
  children,
  index,
  ...rest
}: AnchorMotion & { children: React.ReactNode; index: number }) {
  return (
    <motion.a
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

export function SlideHoverRow({
  className,
  children,
  delayIndex = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delayIndex?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delayIndex * 0.1 }}
      whileHover={{ x: 10 }}
    >
      {children}
    </motion.div>
  );
}

export function HoverSpinIcon({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export function PressableButton({
  className,
  children,
  disabled,
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  ...rest
}: ButtonMotion & { children: React.ReactNode }) {
  return (
    <motion.button
      className={className}
      disabled={disabled}
      whileHover={disabled ? undefined : whileHover}
      whileTap={disabled ? undefined : whileTap}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
