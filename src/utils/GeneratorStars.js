function generateStars(count) {
    const stars = [];
    for(let i = 0; i < count; i++){
        const star = {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 0.5,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 4,
          color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`,
        };
        stars.push(star);
    }
    return stars;
}

export default generateStars;
