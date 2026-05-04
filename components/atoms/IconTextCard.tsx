import type { ReactNode } from "react";

export interface IconTextCardProps {
  icon: ReactNode;
  children: ReactNode;
  /** Plain: icon above text (e.g. feature list). Boxed: icon inside tinted square (e.g. benefits). */
  iconVariant?: "plain" | "boxed";
  /** Cyan border on hover (e.g. feature cards). */
  hoverable?: boolean;
  className?: string;
}

export function IconTextCard({
  icon,
  children,
  iconVariant = "plain",
  hoverable = false,
  className = "",
}: IconTextCardProps) {
  const cardClass = [
    "bg-[#0F172A] rounded-xl p-6 border border-[#1E293B]",
    hoverable ? "hover:border-[#06B6D4]/50 transition-colors" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClass}>
      {iconVariant === "boxed" ? (
        <div className="w-10 h-10 bg-[#06B6D4]/20 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
      ) : (
        <div className="mb-4">{icon}</div>
      )}
      <p className="text-gray-300">{children}</p>
    </div>
  );
}
