import React from 'react';

interface Technology {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  difficulty: string;
  rating: number;
  icon: string;
  website: string;
}

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <div className="rounded-[20px] border border-gray-200 bg-white p-7.25 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-7.5 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center">
          <img 
            src={new URL(`../assets/${technology.icon}`, import.meta.url).href} 
            alt={technology.name} 
            className="h-10 w-10 object-contain" 
          />
        </div>
        <span className="rounded-full border border-sky-100 bg-sky-50 px-3.75 py-[6px] text-[16px] font-medium text-sky-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mb-[10px] text-[28px] font-semibold leading-[1.2] text-gray-900">
        {technology.name}
      </h3>

      <p className="mb-[25px] text-[14px] leading-[1.55] text-[#64748b]">
        {technology.description}
      </p>

      <div className="mb-[23px] flex h-[43px] items-center justify-between border border-gray-100 px-[11px]">
        <span className="rounded-md bg-gray-100 px-[12px] py-[6px] text-[16px] font-medium text-[#475569]">
          {technology.category}
        </span>

        <span className="text-[16px] text-[#64748b]">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-[6px] text-[16px] font-medium text-[#334155]">
          <span className="text-[19px] text-amber-400">★</span> 
          <span>{technology.rating}</span>
        </span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`h-[54px] w-full rounded-[12px] text-[18px] font-medium transition-colors ${
          isAdded
            ? 'cursor-not-allowed bg-pink-100 text-pink-700'
            : 'bg-[#080d1c] text-white hover:bg-[#111827]'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}