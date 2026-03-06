import { useNavigate } from "react-router-dom";
import "./Herosection.css";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <h1 className="page-title">Welcome to My Website</h1>
      <p>
        Hi, my name is Tommaso and I will show you what my mind has created,
        will create and most important what I am creating right now.
      </p>
      <button onClick={() => navigate("/projects")}>What is in my mind</button>
    </div>
  );
}

export default HeroSection;
