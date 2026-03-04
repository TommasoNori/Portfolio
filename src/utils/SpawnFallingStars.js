function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function spawnFallingStars(canvas) {
  return {
    x: randomBetween(0, canvas.width),
    y: -10,
    vx: randomBetween(-4, -1.5),
    vy: randomBetween(6, 12),
    trailPoints: [],
    trailLength: Math.floor(randomBetween(20, 35)),
    width: randomBetween(1.5, 3),
    alpha: 0,
    speed: randomBetween(0.005, 0.012),
  };
}

export default spawnFallingStars;
