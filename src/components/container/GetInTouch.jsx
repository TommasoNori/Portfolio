import { motion } from "framer-motion";
import {
  EmailIcon,
  LocationIcon,
  PhoneIcon,
} from "../importer_img/SvgImporter";

function GetInTouch() {
  const container = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full max-w-[420px]"
    >
      <motion.p
        variants={item}
        className="mb-6 font-mono text-[12px] uppercase tracking-[0.38em] text-cyan-400/75"
      >
        {"{ INFO }"}
      </motion.p>

      <div className="flex flex-col gap-5">
        <motion.div variants={item} className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#050d1b]/70 shadow-[0_0_18px_rgba(0,255,255,0.08)] backdrop-blur-sm">
            <EmailIcon />
          </div>

          <a
            href="mailto:notommyri@gmail.com"
            className="font-mono text-[1rem] tracking-[0.04em] text-white/65 transition duration-300 hover:text-cyan-300 hover:[text-shadow:0_0_10px_rgba(0,255,255,0.18)]"
          >
            notommyri@gmail.com
          </a>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#050d1b]/70 shadow-[0_0_18px_rgba(0,255,255,0.08)] backdrop-blur-sm">
            <PhoneIcon />
          </div>

          <a
            href="tel:+393336607624"
            className="font-mono text-[1rem] tracking-[0.04em] text-white/65 transition duration-300 hover:text-cyan-300 hover:[text-shadow:0_0_10px_rgba(0,255,255,0.18)]"
          >
            +39 333 660 7624
          </a>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#050d1b]/70 shadow-[0_0_18px_rgba(0,255,255,0.08)] backdrop-blur-sm">
            <LocationIcon />
          </div>

          <p className="font-mono text-[1rem] tracking-[0.04em] text-white/65">
            Rimini, Italy
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default GetInTouch;
