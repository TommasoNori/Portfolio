import { motion } from "framer-motion";
import reactlogo from "../assets/react.svg";
import HeroProject from "../feature/project/HeroProject";
import ProjectSection from "../feature/project/ProjectSection";

function Projects() {
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
    <>
      <HeroProject />

      <section className="relative z-10 w-full px-6 py-16 md:px-10 md:py-20 xl:px-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            className="mb-14 flex w-full max-w-3xl flex-col items-center gap-4 rounded-[28px] border border-cyan-400/20 bg-[#050d1b]/70 px-6 py-10 text-center shadow-[0_0_28px_rgba(0,255,255,0.10)] backdrop-blur-sm md:px-10 md:py-12"
          >
            <h2 className="font-['Orbitron'] text-sm font-bold uppercase tracking-[0.18em] text-white/55">
              What I&apos;m Working On
            </h2>

            <p className="max-w-2xl text-base leading-8 text-slate-300/80 italic">
              Currently open to new projects — if you&apos;d like to commission
              something, feel free to reach out via email.
            </p>
          </motion.div>

          <ProjectSection />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.2}
            className="mt-16 w-full max-w-4xl rounded-[28px] border border-cyan-400/20 bg-[#050d1b]/70 px-5 py-6 shadow-[0_0_28px_rgba(0,255,255,0.10)] backdrop-blur-sm md:px-10 md:py-9"
          >
            <h2 className="mb-4 text-center font-['Orbitron'] text-2xl font-bold text-white md:text-left md:text-[1.7rem]">
              This Website
            </h2>

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
