"use client";

interface ServicesGridItemImageProps {
  image: string;
  icon: React.ReactNode;
  title: string;
}

export function ServicesGridItemImage({ image, icon, title }: ServicesGridItemImageProps) {
  return (
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/20 to-transparent group-hover:from-[#06B6D4]/30 transition-all duration-300" />
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />

      {/* Icon Badge */}
      <div className="absolute bottom-4 left-4">
        <div className="w-12 h-12 bg-[#06B6D4] rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
}