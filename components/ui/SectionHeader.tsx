interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleSize?: "sm" | "md" | "lg" | "xl";
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  titleSize = "lg",
}: SectionHeaderProps) {
  const titleClasses = {
    sm: "text-3xl md:text-4xl",
    md: "text-4xl md:text-5xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
  };

  return (
    <div className={`relative z-10 ${centered ? "text-center" : ""}`}>
      <h1 className={`font-bold text-white mb-6 ${titleClasses[titleSize]}`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`text-xl text-gray-400 ${centered ? "max-w-3xl mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}