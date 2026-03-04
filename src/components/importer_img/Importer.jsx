import { useState, useEffect } from "react";
import galaxy from "../../assets/img/galaxy.png";
import galaxy2 from "../../assets/img/galaxy2.jpeg";
import galaxy3 from "../../assets/img/galaxy3.jpg";
import galaxy4 from "../../assets/img/galaxy4.jpg";
import galaxy5 from "../../assets/img/galaxy5.jpg";
import galaxy6 from "../../assets/img/galaxy6.jpg";

const images = {
  "galaxy.png": galaxy,
  "galaxy2.jpeg": galaxy2,
  "galaxy3.jpg": galaxy3,
  "galaxy4.jpg": galaxy4,
  "galaxy5.jpg": galaxy5,
  "galaxy6.jpg": galaxy6,
};

const maskPositions = {
  center:
    "radial-gradient(ellipse 50% 50% at 50% 50%, black 0%, rgba(0,0,0,0.9) 15%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.1) 55%, transparent 65%)",
  "top right":
    "radial-gradient(circle 55% at 100% 0%, black 10%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.1) 70%, transparent 85%)",
  "top left":
    "radial-gradient(circle 55% at 0% 0%, black 10%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.1) 70%, transparent 85%)",
  "bottom right":
    "radial-gradient(circle 55% at 100% 100%, black 10%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.1) 70%, transparent 85%)",
  "bottom left":
    "radial-gradient(circle 55% at 0% 100%, black 10%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.1) 70%, transparent 85%)",
};

function BackgroundImage({
  image,
  opacity = 0.4,
  blendMode = "screen",
  position = "center",
  id = "",
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLarge = windowWidth > 1920;
  const isCentered = position === "center";
  const mask = maskPositions[position] || maskPositions["center"];

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    >
      <div
        id={id}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${images[image]})`,
          backgroundSize: isCentered
            ? isLarge
              ? "70% auto"
              : "cover"
            : isLarge
              ? "25% auto"
              : "70% auto",
          backgroundPosition: position,
          backgroundRepeat: "no-repeat",
          mixBlendMode: blendMode,
          opacity: opacity,
          maskImage: mask,
          WebkitMaskImage: mask,
          filter: "none",
        }}
      />
    </div>
  );
}

export default BackgroundImage;
