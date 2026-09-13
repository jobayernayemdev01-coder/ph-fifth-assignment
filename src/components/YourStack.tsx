import React from 'react';
import StackItem from './StackItem';

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

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="w-full max-w-[400px] h-fit rounded-[32px] border border-gray-100 bg-white p-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
      <div>
        <h2 className="text-[22px] font-bold tracking-tight text-[#0f172a]">
          Your Stack
        </h2>

        <p className="mt-1 text-[15px] font-medium text-[#94a3b8]">
          {stack.length === 0
            ? 'No technologies selected yet'
            : `${stack.length} ${
                stack.length === 1 ? 'Technology' : 'Technology'
              } Selected`}
        </p>
      </div>

      {stack.length === 0 ? (
        <div 
          className="mt-6 flex h-[94px] w-full items-center justify-center rounded-[20px] bg-transparent"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://w3.org width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23e2e8f0' stroke-width='1.5' stroke-dasharray='10%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
          }}
        >
          <p className="text-[15px] font-medium text-[#94a3b8] border border-dashed px-12 py-8 rounded-xl">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-3">
          {stack.map((technology) => (
            <StackItem
              key={technology.id}
              technology={technology}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-8 flex w-full items-center justify-center rounded-[16px] border border-gray-200 bg-white py-3 text-[17px] font-bold text-[#dc2626] transition hover:bg-red-50 hover:border-red-200"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}