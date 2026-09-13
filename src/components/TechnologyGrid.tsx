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
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore <span className='bg-linear-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent'>Technologies</span>
        </h2>

        <p className="mt-2 text-gray-500">
          Discover the technologies you can add to your development stack.
        </p>
      </div>

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