"use client";

import { motion } from "motion/react";
import type { StaticImageData } from "next/image";
import { ImageWithFallback } from "@/components/atoms/ImageWithFallback";

type Props = {
  src: string | StaticImageData;
  alt: string;
  availabilityLabel: string;
};

export function HeroPortrait({ src, alt, availabilityLabel }: Props) {
  return (
    <motion.div
      className="relative mx-auto flex w-full max-w-md items-center justify-center"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <div
        aria-hidden
        className="absolute h-[18rem] w-[18rem] rounded-full bg-[#06B6D4]/20 blur-3xl sm:h-[20rem] sm:w-[20rem] md:h-[22rem] md:w-[22rem] lg:h-[24rem] lg:w-[24rem]"
      />

      <svg
        className="hero-wave-container pointer-events-none absolute h-[21rem] w-[21rem] sm:h-[23rem] sm:w-[23rem] md:h-[25rem] md:w-[25rem] lg:h-[27rem] lg:w-[27rem]"
        viewBox="0 0 400 400"
        aria-hidden
      >
        <defs>
          <linearGradient id="hero-wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="hero-wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="hero-wave-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <path
          className="hero-wave-path hero-wave-path-1"
          d="M 200,50 C 280,50 320,90 350,150 C 380,210 380,240 350,300 C 320,360 280,400 200,400 C 120,400 80,360 50,300 C 20,240 20,210 50,150 C 80,90 120,50 200,50"
          fill="none"
          stroke="url(#hero-wave-gradient-1)"
          strokeWidth="2.25"
          opacity="0.75"
          strokeLinecap="round"
        />
        <path
          className="hero-wave-path hero-wave-path-2"
          d="M 200,80 C 270,80 300,110 325,160 C 350,210 350,240 325,290 C 300,340 270,370 200,370 C 130,370 100,340 75,290 C 50,240 50,210 75,160 C 100,110 130,80 200,80"
          fill="none"
          stroke="url(#hero-wave-gradient-2)"
          strokeWidth="1.75"
          opacity="0.55"
          strokeLinecap="round"
        />
        <path
          className="hero-wave-path hero-wave-path-3"
          d="M 200,110 C 260,110 285,130 305,170 C 325,210 325,240 305,280 C 285,320 260,340 200,340 C 140,340 115,320 95,280 C 75,240 75,210 95,170 C 115,130 140,110 200,110"
          fill="none"
          stroke="url(#hero-wave-gradient-3)"
          strokeWidth="1.5"
          opacity="0.4"
          strokeLinecap="round"
        />
      </svg>

      <motion.div
        className="relative z-10 h-56 w-56 overflow-hidden rounded-full border-[3px] border-[#06B6D4] shadow-2xl shadow-[#06B6D4]/40 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <ImageWithFallback
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          width={640}
          height={640}
          sizes="(max-width: 639px) 224px, (max-width: 767px) 256px, (max-width: 1023px) 288px, 320px"
          priority
        />
      </motion.div>

      <motion.div
        className="absolute -bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-emerald-400/30 bg-[#0F172A]/90 px-3 py-2 text-xs font-medium text-emerald-300 shadow-lg backdrop-blur sm:bottom-2 sm:px-4 sm:text-sm"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        {availabilityLabel}
      </motion.div>

      <style>{`
        .hero-wave-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: drop-shadow(0 0 16px rgba(6, 182, 212, 0.45))
            drop-shadow(0 0 28px rgba(14, 165, 233, 0.18));
        }

        @keyframes hero-wave-morph-1 {
          0%, 100% {
            d: path("M 200,50 C 280,50 320,90 350,150 C 380,210 380,240 350,300 C 320,360 280,400 200,400 C 120,400 80,360 50,300 C 20,240 20,210 50,150 C 80,90 120,50 200,50");
          }
          33% {
            d: path("M 200,50 C 285,55 325,95 355,155 C 375,205 375,245 345,295 C 315,355 275,395 200,400 C 125,395 85,355 55,295 C 25,245 25,205 55,155 C 85,95 125,55 200,50");
          }
          66% {
            d: path("M 200,50 C 278,53 316,94 346,154 C 376,211 376,239 348,296 C 316,354 276,394 200,400 C 124,394 84,354 54,296 C 24,239 24,211 54,154 C 84,94 124,53 200,50");
          }
        }

        @keyframes hero-wave-morph-2 {
          0%, 100% {
            d: path("M 200,80 C 270,80 300,110 325,160 C 350,210 350,240 325,290 C 300,340 270,370 200,370 C 130,370 100,340 75,290 C 50,240 50,210 75,160 C 100,110 130,80 200,80");
          }
          50% {
            d: path("M 200,80 C 275,82 305,115 330,165 C 345,205 345,245 320,285 C 295,335 265,368 200,370 C 135,368 105,335 80,285 C 55,245 55,205 80,165 C 105,115 135,82 200,80");
          }
        }

        @keyframes hero-wave-morph-3 {
          0%, 100% {
            d: path("M 200,110 C 260,110 285,130 305,170 C 325,210 325,240 305,280 C 285,320 260,340 200,340 C 140,340 115,320 95,280 C 75,240 75,210 95,170 C 115,130 140,110 200,110");
          }
          50% {
            d: path("M 200,110 C 255,115 280,135 300,175 C 315,213 315,237 295,275 C 275,315 250,335 200,340 C 150,335 125,315 105,275 C 85,237 85,213 105,175 C 125,135 150,115 200,110");
          }
        }

        .hero-wave-path-1 {
          animation: hero-wave-morph-1 10s ease-in-out infinite;
        }

        .hero-wave-path-2 {
          animation: hero-wave-morph-2 8s ease-in-out infinite;
          animation-delay: -1.5s;
        }

        .hero-wave-path-3 {
          animation: hero-wave-morph-3 12s ease-in-out infinite;
          animation-delay: -3s;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-wave-path {
            animation: none;
          }
        }
      `}</style>
    </motion.div>
  );
}
