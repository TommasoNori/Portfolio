import { motion } from "framer-motion";

function WorkingOn() {
  const container = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.35,
      }}
      className="mt-10 mb-14 flex w-full max-w-3xl flex-col items-center rounded-[28px] border border-cyan-400/20 bg-[#050d1b]/70 px-6 py-10 text-center shadow-[0_0_28px_rgba(0,255,255,0.10)] backdrop-blur-sm md:px-10 md:py-12"
    >
      <motion.p
        variants={item}
        className="mb-3 font-mono text-[11px] uppercase tracking-[0.38em] text-cyan-400/60"
      >
        // CURRENT_STATUS
      </motion.p>

      <motion.h2
        variants={item}
        className="font-['Orbitron'] text-[1.05rem] font-bold uppercase tracking-[0.18em] text-white/65 md:text-[1.1rem]"
      >
        What I&apos;m Working On
      </motion.h2>

      <motion.div
        variants={item}
        className="mt-5 mb-6 h-px w-16 bg-cyan-400/30 shadow-[0_0_10px_rgba(0,255,255,0.28)]"
      />

      <motion.p
        variants={item}
        className="max-w-2xl text-[1rem] leading-8 text-slate-300/85 italic md:text-[1.03rem]"
      >
        I&apos;m currently open to new collaborations and freelance projects. If
        you&apos;d like to build something together, feel free to reach out.
      </motion.p>
    </motion.div>
  );
}

export default WorkingOn;
