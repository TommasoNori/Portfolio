import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import generateStars from "./utils/GeneratorStars";
import FallingStars from "./components/stars/dinamic/FallingStars";
import Stars from "./components/stars/static/Stars";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import BackgroundImage from "./components/importer_img/Importer";

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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<div>Projects</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
