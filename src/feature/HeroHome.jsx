import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function HeroHome() {
  const navigate = useNavigate();

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

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="font-mono text-[11px] uppercase tracking-[0.45em] text-cyan-400/60"
        >
          // HOME.JSX
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-['Orbitron'] text-[clamp(3rem,8vw,6.5rem)] font-extrabold uppercase tracking-[0.08em] text-cyan-400
          [text-shadow:0_0_12px_rgba(0,255,255,0.45),0_0_40px_rgba(0,255,255,0.2)]"
        >
          Welcome to my Website
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="text-sm tracking-[0.28em] text-white/50 md:text-base"
        >
          Hi, my name is Tommaso and I will show you what my mind has created,
          what it is creating right now, and what it will create next.
        </motion.p>

        <motion.button
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          onClick={() => navigate("/projects")}
          className="mt-2 rounded-xl border border-cyan-400/40 bg-cyan-400/5 px-10 py-3.5 font-['Orbitron'] text-[0.82rem] font-medium uppercase tracking-[0.14em] text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:bg-cyan-400/10 hover:text-cyan-200 hover:shadow-[0_0_18px_rgba(0,255,255,0.25)]"
        >
          Explore Projects
        </motion.button>
      </div>
    </section>
  );
}

export default HeroHome;
