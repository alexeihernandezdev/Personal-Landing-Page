import type { ReactNode } from "react";

export interface IconTextCardProps {
  icon: ReactNode;
  children: ReactNode;
  /** Plain: icon above text (e.g. feature list). Boxed: icon inside tinted square (e.g. benefits). */
  iconVariant?: "plain" | "boxed";
  /** Cyan border on hover (e.g. feature cards). */
  hoverable?: boolean;
  className?: string;
  textClassName?: string;
}

export function IconTextCard({
  icon,
  children,
  iconVariant = "plain",
  hoverable = false,
  className = "",
}: IconTextCardProps) {
  const cardClass = [
    "bg-surface h-full flex gap-3 items-center rounded-xl p-6 border border-surface-elevated",
    hoverable ? "hover:border-brand/50 transition-colors" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClass}>
      <div className="mt-1">
        {iconVariant === "boxed" ? (
          <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        ) : (
          <div>{icon}</div>
        )}
      </div>
      <p className={"text-gray-300"}>{children}</p>
    </div>
  );
}
