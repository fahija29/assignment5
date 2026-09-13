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

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

function TechnologyCard({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) {
  return (
    <div className="technology-card">

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

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <div className="technology-info">
        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>
      </div>

      <div className="technology-bottom">
        <span className="rating">
          ★ {technology.rating}
        </span>

        <button
          className="add-stack-btn"
          onClick={() => onAdd(technology)}
          disabled={isAdded}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>

    </div>
  );
}

export default TechnologyCard;