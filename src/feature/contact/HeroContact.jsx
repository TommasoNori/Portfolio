import {motion} from "framer-motion"

function HeroContact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    }),
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0}
      className="mb-12 text-center"
    >
      <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.45em] text-cyan-400/70">
        // PING.ME&#40;&#41;
      </p>

      <h1 className="font-['Orbitron'] text-[clamp(2.8rem,8vw,6rem)] font-extrabold uppercase tracking-[0.08em] text-cyan-400 [text-shadow:0_0_12px_rgba(0,255,255,0.45),0_0_40px_rgba(0,255,255,0.2)]">
        Contact
      </h1>
    </motion.div>
  );
}

export default HeroContact;
