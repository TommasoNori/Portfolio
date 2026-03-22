import { motion } from "framer-motion";

function HeroAboutMe() {
const text = "About Me";

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
    <section className="relative flex min-h-[78vh] w-full items-center justify-center px-6 pt-24 pb-16 md:px-10">
      <div className="flex flex-col items-center text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-4 font-mono text-[11px] uppercase tracking-[0.45em] text-cyan-400/60"
        >
          // ABOUT_ME.JSX
        </motion.p>

        <motion.h1 className="font-['Orbitron'] text-[clamp(3rem,8vw,6.5rem)] font-extrabold uppercase tracking-[0.08em] text-cyan-400 [text-shadow:0_0_12px_rgba(0,255,255,0.45),0_0_40px_rgba(0,255,255,0.2)]">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.05,
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              {char}
            </motion.span>
          ))}

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="ml-1"
          >
            |
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="mt-5 text-sm tracking-[0.28em] text-white/50 md:text-base"
        >
          Tommaso Nori • CS Student • Rimini, IT
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="mt-6 h-px w-40 bg-cyan-400/30 shadow-[0_0_12px_rgba(0,255,255,0.35)]"
        />
      </div>
    </section>
  );
}

export default HeroAboutMe;
