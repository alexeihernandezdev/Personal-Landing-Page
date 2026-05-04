import type { ReactNode } from "react";

export interface HeadingBodyCardProps {
  heading: ReactNode;
  description: ReactNode;
  headingClassName?: string;
  descriptionClassName?: string;
}

export function HeadingBodyCard({
  heading,
  description,
  headingClassName = "",
  descriptionClassName = "",
}: HeadingBodyCardProps) {
  return (
    <div className="bg-[#0F172A] h-full rounded-xl p-8 border border-[#1E293B]">
      <h2 className={`text-2xl font-bold text-white mb-4 ${headingClassName}`}>
        {heading}
      </h2>
      <p className={`text-gray-400 text-lg ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
}
