import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function HeroHome() {
  const navigate = useNavigate();
  const text = "My Portfolio";

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
    <section className="relative z-10 flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-16 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.22)_38%,rgba(0,0,0,0.06)_68%,transparent_100%)]" />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-4 font-mono text-[11px] uppercase tracking-[0.45em] text-cyan-400/60"
        >
          // HELLO_WORLD.JSX
        </motion.p>

        <motion.h1 className="mx-auto max-w-[92vw] whitespace-nowrap font-['Orbitron'] text-[clamp(2.2rem,7vw,5.8rem)] font-extrabold uppercase leading-none tracking-[0.04em] text-cyan-400 [text-shadow:0_0_12px_rgba(0,255,255,0.45),0_0_40px_rgba(0,255,255,0.2)] md:max-w-none md:tracking-[0.06em]">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.045,
                duration: 0.3,
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
            className="ml-1 inline-block"
          >
            |
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="text-sm tracking-[0.24em] text-white/50 md:text-base"
        >
          CS Student • Full-Stack Developer • Rimini, IT
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.75}
          className="max-w-[820px] text-[0.95rem] leading-8 text-white/60 md:text-base"
        >
          Hi, my name is Tommaso and I will show you what my mind has created,
          what it is creating right now, and what it will create next.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.95}
          className="mt-2 flex flex-wrap items-center justify-center gap-6"
        >
          <button
            onClick={() => navigate("/aboutme")}
            className="rounded-xl border border-cyan-400/40 bg-cyan-400/5 px-8 py-3 font-['Orbitron'] text-[0.78rem] font-medium uppercase tracking-[0.14em] text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:bg-cyan-400/10 hover:text-cyan-200 hover:shadow-[0_0_18px_rgba(0,255,255,0.25)]"
          >
            About Me →
          </button>

          <button
            onClick={() => navigate("/projects")}
            className="font-['Orbitron'] text-[0.76rem] font-medium uppercase tracking-[0.18em] text-white/55 transition duration-300 hover:text-cyan-300 hover:[text-shadow:0_0_8px_rgba(0,255,255,0.25)]"
          >
            Projects
          </button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.1}
          className="mt-6 h-px w-28 bg-cyan-400/30 shadow-[0_0_12px_rgba(0,255,255,0.35)] md:w-40"
        />
      </div>
    </section>
  );
}

export default HeroHome;
