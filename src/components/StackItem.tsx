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

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

export default function StackItem({
  technology,
  onRemove,
}: StackItemProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <img
            src={new URL(`../assets/${technology.icon}`, import.meta.url).href}
            alt={technology.name}
            className="h-7 w-7 object-contain"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            {technology.name}
          </h3>

          <p className="text-xs text-gray-500">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
        aria-label={`Remove ${technology.name}`}
      >
        ✕
      </button>
    </div>
  );
}