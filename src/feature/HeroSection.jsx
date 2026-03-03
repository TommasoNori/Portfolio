import generateStars from "../utils/GeneratorStars";
import "./Herosection.css";

const stars = generateStars(150);

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="starfield">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.color,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>

        <h1>Welcome to My website</h1>
        <p>
          My name is Tommaso and i'll show my mind, check my project and read
          who I am.
        </p>
        <button onClick={() => (window.location.href = "/projects")}>
          What is in my mind
        </button>
      </div>
    </>
  );
}

export default HeroSection;
