import "./Herosection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <h1>Welcome to My website</h1>
        <p>
          Hi, my name is Tommaso and I will show you what my mind has created,
          will create and most important what I am creating right now.
        </p>
        <button onClick={() => (window.location.href = "/projects")}>
          What is in my mind
        </button>
      </div>
    </>
  );
}

export default HeroSection;
