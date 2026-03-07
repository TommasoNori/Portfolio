import { Routes, Route } from "react-router-dom";
import "./App.css";
import generateStars from "./utils/GeneratorStars";
import FallingStars from "./components/stars/dinamic/FallingStars";
import Stars from "./components/stars/static/Stars";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Home from "./pages/home/Home";
import AboutMe from "./pages/aboutme/AboutMe";
import BackgroundImage from "./components/importer_img/Importer";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import ScrollUp from "./components/layout/ScrollUp";

function App() {
  const isLarge = window.innerWidth > 1920;
  const stars = generateStars(isLarge ? 1000 : 500);

  return (
    <div className="app-container">
      <BackgroundImage
        image="galaxy6.jpg"
        opacity={0.5}
        position="center"
        id="galaxy-center"
      />
      <Stars stars={stars} />
      <FallingStars count={1} />
      <Header />
      <ScrollUp />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
