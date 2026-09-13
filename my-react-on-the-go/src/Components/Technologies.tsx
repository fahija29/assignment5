import { useEffect, useState } from "react";
import technologiesData from "../data/technologies.json";

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

interface TechnologiesProps {
  onAddToStack: (technology: Technology) => void;
  stack: Technology[];
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

function Technologies({
  onAddToStack,
  stack,
  onRemoveFromStack,
  onRemoveAll,
}: TechnologiesProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTechnologies(technologiesData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <section className="technologies" id="technologies">
        <div className="technologies-container">
          <div className="loading">
            Loading technologies...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="technologies" id="technologies">
      <div className="technologies-container">

        <div className="technologies-header">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="technologies-layout">

          {/* TECHNOLOGY CARDS */}

          <div className="technologies-grid">

            {technologies.map((technology) => {
              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  className="technology-card"
                  key={technology.id}
                >

                  <div className="technology-top">

                    <div className="technology-icon">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                      />
                    </div>

                    <span className="technology-badge">
                      {technology.badge}
                    </span>

                  </div>

                  <h3>
                    {technology.name}
                  </h3>

                  <p>
                    {technology.description}
                  </p>

                  <div className="technology-info">

                    <span className="category-chip">
                      {technology.category}
                    </span>

                    <span className="difficulty">
                      {technology.difficulty}
                    </span>

                    <span className="rating">
                      ★ {technology.rating}
                    </span>

                  </div>

                  <div className="technology-bottom">

                    <button
                      className="add-stack-btn"
                      onClick={() => onAddToStack(technology)}
                      disabled={isAdded}
                    >
                      {isAdded
                        ? "✓ Added to Stack"
                        : "Add to Stack"}
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

          {/* YOUR STACK */}

          <div className="your-stack">

            <div className="stack-header">

              <div>
                <h2>Your Stack</h2>

                <p>
                  {stack.length}{" "}
                  {stack.length === 1
                    ? "technology"
                    : "technologies"}{" "}
                  selected
                </p>
              </div>

            </div>

            {stack.length === 0 ? (

  <div className="empty-stack">

    <h3>Your stack is empty</h3>

   

  </div>

) : (

              <div className="stack-items">

                {stack.map((technology) => (

                  <div
                    className="stack-item"
                    key={technology.id}
                  >

                    <div className="stack-item-icon">

                      <img
                        src={technology.icon}
                        alt={technology.name}
                      />

                    </div>

                    <div className="stack-item-info">

                      <h3>
                        {technology.name}
                      </h3>

                      <span>
                        {technology.category}
                      </span>

                    </div>

                    <button
                      className="remove-stack-btn"
                      onClick={() =>
                        onRemoveFromStack(technology.id)
                      }
                    >
                      ×
                    </button>

                  </div>

                ))}

              </div>

            )}

            {stack.length > 0 && (
              <button
                className="remove-all-btn"
                onClick={onRemoveAll}
              >
                Remove All
              </button>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Technologies;