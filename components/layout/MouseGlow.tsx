"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const STATIC_GLOW =
  "radial-gradient(600px circle at 50% 40%, rgba(6, 182, 212, 0.1), rgba(14, 165, 233, 0.05) 45%, transparent 80%)";

export function MouseGlow() {
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [prefersReducedMotion]);

  const background = prefersReducedMotion
    ? STATIC_GLOW
    : `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.15), rgba(14, 165, 233, 0.08) 40%, transparent 80%)`;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
      style={{ background }}
    />
  );
}
