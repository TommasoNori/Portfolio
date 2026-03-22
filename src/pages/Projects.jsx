import { motion } from "framer-motion";
import reactlogo from "../assets/react.svg";
import HeroProject from "../feature/project/HeroProject";
import ProjectSection from "../feature/project/ProjectSection";
import WorkingOn from "../components/container/WorkingOn";

function Projects() {
  const revealCard = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <HeroProject />

      <section className="relative z-10 w-full px-6 py-16 md:px-10 md:py-20 xl:px-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <WorkingOn />

          <ProjectSection />

          <motion.div
            variants={revealCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-16 w-full max-w-4xl rounded-[28px] border border-cyan-400/20 bg-[#050d1b]/70 px-5 py-6 shadow-[0_0_28px_rgba(0,255,255,0.10)] backdrop-blur-sm md:px-10 md:py-9"
          >
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-400/60">
              // STACK
            </p>

            <h2 className="mb-4 text-center font-['Orbitron'] text-2xl font-bold text-white md:text-left md:text-[1.7rem]">
              This Website
            </h2>

            <div className="mx-auto mb-5 h-px w-16 bg-cyan-400/30 shadow-[0_0_10px_rgba(0,255,255,0.25)] md:mx-0" />

            <p className="text-center text-[0.98rem] leading-8 text-slate-300 md:text-left md:text-base">
              This website is a personal project built with React and Vite,
              created to explore modern frontend development and improve my
              skills.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
              <motion.img
                src={reactlogo}
                alt="React Logo"
                className="h-10 w-auto drop-shadow-[0_0_8px_rgba(97,218,251,0.25)] md:h-[42px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                whileHover={{ y: -3, scale: 1.05 }}
              />

              <motion.img
                src={`${import.meta.env.BASE_URL}vite.svg`}
                alt="Vite Logo"
                className="h-10 w-auto drop-shadow-[0_0_8px_rgba(255,208,102,0.25)] md:h-[42px]"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                whileHover={{ y: -3, scale: 1.05 }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Projects;
