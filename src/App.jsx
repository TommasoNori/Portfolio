import { Routes, Route } from "react-router-dom";
import generateStars from "./utils/GeneratorStars";
import FallingStars from "./components/stars/dinamic/FallingStars";
import Stars from "./components/stars/static/Stars";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import BackgroundImage from "./components/importer_img/Importer";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollUp from "./components/layout/ScrollUp";

function App() {
  const isLarge = window.innerWidth > 1920;
  const isPhone = window.innerWidth < 768;
  const stars = generateStars(isLarge ? 1000 : isPhone ? 250 : 500);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <BackgroundImage
        image="galaxy6.jpg"
        opacity={0.5}
        position="center"
        id="galaxy-center"
      />

      <Stars stars={stars} />
      <FallingStars count={1} />

      <div className="relative">
        <Header />
      </div>

      <ScrollUp />

      <main className="relative flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}

export default App;
