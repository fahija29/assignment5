import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import Footer from "./Components/Footer";

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
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string): void => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack.`
      );
    }
  };

  const handleRemoveAll = (): void => {
    setStack([]);

    toast.info("All technologies removed from your stack.");
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

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;