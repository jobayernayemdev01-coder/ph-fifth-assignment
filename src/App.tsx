import './index.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyGrid from './components/TechnologyGrid';
import YourStack from './components/YourStack';
import Footer from './components/Footer';

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

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info('All technologies removed from your stack.');
  };

  return (
  <>
    <Navbar />
    <Hero />

    <main className="px-6 py-12 lg:px-25">
      {/* Header section placed above the grid */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore <span className="bg-linear-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="mt-2 text-gray-500">
          Discover the technologies you can add to your development stack.
        </p>
      </div>

      {/* Grid container: TechnologyGrid and YourStack start on the exact same row */}
      <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-[1fr_320px]">
        <TechnologyGrid
          stack={stack}
          onAdd={handleAdd}
        />

        <YourStack
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </main>

    <Footer />
    <ToastContainer />
  </>
);
}
export default App;