import React, { useEffect, useState } from 'react';
import TechnologyCard from './TechnologyCard';

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

interface TechnologyGridProps {
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}

export default function TechnologyGrid({
  stack,
  onAdd,
}: TechnologyGridProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data.technologies);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to load technologies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-10 text-center text-gray-500">
        Loading technologies...
      </div>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isAdded={stack.some((item) => item.id === technology.id)}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  );
}