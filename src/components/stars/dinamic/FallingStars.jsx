import { useEffect, useRef } from "react";
import spawnFallingStars from "../../../utils/SpawnFallingStars";

function FallingStars({ count = 5 }) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    starsRef.current = Array.from({ length: count }, () =>
      spawnFallingStars(canvas),
    );

    let lastTime = 0;

    const animate = (timestamp) => {
      const delta = timestamp - lastTime;
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((s, idx) => {
        s.x += s.vx * (delta / 16);
        s.y += s.vy * (delta / 16);

        if (s.alpha < 1) s.alpha += 0.05;

        s.trailPoints.push({ x: s.x, y: s.y });
        if (s.trailPoints.length > s.trailLength) s.trailPoints.shift();

        // scia
        for (let i = 1; i < s.trailPoints.length; i++) {
          const t = i / s.trailPoints.length;
          ctx.beginPath();
          ctx.moveTo(s.trailPoints[i - 1].x, s.trailPoints[i - 1].y);
          ctx.lineTo(s.trailPoints[i].x, s.trailPoints[i].y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${t * s.alpha})`;
          ctx.lineWidth = s.width * t * 1.5;
          ctx.lineCap = "round";
          ctx.stroke();
        }

        // testa
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.width * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.fill();

        // primo glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.width * 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha * 0.4})`;
        ctx.fill();

        // secondo glow esterno
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.width * 10, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha * 0.15})`;
        ctx.fill();

        if (s.y > canvas.height + 20 || s.x < -20) {
          starsRef.current[idx] = spawnFallingStars(canvas);
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

export default FallingStars;
