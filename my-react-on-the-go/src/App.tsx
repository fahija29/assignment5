import { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology): void => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);
  };

  const handleRemoveFromStack = (id: string): void => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );
  };

  const handleRemoveAll = (): void => {
    setStack([]);
  };

  return (
    <div className="app">
      <Navbar />

      <Hero />

      <Technologies
        onAddToStack={handleAddToStack}
        stack={stack}
        onRemoveFromStack={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
    </div>
  );
}

export default App;