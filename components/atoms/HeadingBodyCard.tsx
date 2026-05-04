import type { ReactNode } from "react";

export interface HeadingBodyCardProps {
  heading: ReactNode;
  description: ReactNode;
}

export function HeadingBodyCard({
  heading,
  description,
}: HeadingBodyCardProps) {
  return (
    <div className="bg-[#0F172A] rounded-xl p-8 border border-[#1E293B]">
      <h2 className="text-2xl font-bold text-white mb-4">{heading}</h2>
      <p className="text-gray-400 text-lg">{description}</p>
    </div>
  );
}
