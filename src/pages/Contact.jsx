import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import HeroContact from "../feature/contact/HeroContact";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    )
    .then(() => {
      alert("Message sent successfully!");
      e.target.reset();
    })
    .catch(() => {
      alert("Failed to send message.");
    });
};

function Contact() {
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
    <section className="relative z-10 min-h-screen w-full overflow-hidden px-6 py-16 md:px-10 md:py-20 xl:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(30,60,120,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_80%_30%,rgba(20,40,90,0.12)_0%,transparent_50%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center">
        <HeroContact/>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="w-full max-w-[580px] rounded-[28px] border border-cyan-400/20 bg-[#050d1b]/70 px-8 py-10 text-center shadow-[0_0_28px_rgba(0,255,255,0.10)] backdrop-blur-sm md:px-14 md:py-12"
        >
          <h2 className="mb-8 font-['Orbitron'] text-sm font-bold uppercase tracking-[0.18em] text-white/50">
            Get in Touch
          </h2>

          <p className="mb-5 text-[1.05rem] font-light tracking-[0.03em] text-white/75">
            Email:{" "}
            <a
              href="mailto:notommyri@gmail.com"
              className="relative font-normal text-cyan-300 transition duration-300 hover:text-white hover:[text-shadow:0_0_12px_rgba(100,180,255,0.5)] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-cyan-300/70 after:transition-all after:duration-300 hover:after:w-full"
            >
              notommyri@gmail.com
            </a>
          </p>

          <div className="mx-auto my-5 h-px w-10 bg-white/12" />

          <p className="text-[1.05rem] font-light tracking-[0.03em] text-white/75">
            Phone:{" "}
            <a
              href="tel:+393336607624"
              className="relative font-normal text-cyan-300 transition duration-300 hover:text-white hover:[text-shadow:0_0_12px_rgba(100,180,255,0.5)] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-cyan-300/70 after:transition-all after:duration-300 hover:after:w-full"
            >
              +39 333 660 7624
            </a>
          </p>
        </motion.div>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          onSubmit={sendEmail}
          className="mt-10 w-full max-w-[760px] rounded-[28px] border border-cyan-400/20 bg-[#050d1b]/70 px-5 py-7 shadow-[0_0_28px_rgba(0,255,255,0.10)] backdrop-blur-sm md:px-10 md:py-10"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[22px]">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 font-['Orbitron'] text-[0.75rem] uppercase tracking-[0.12em] text-white/45"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-[0.95rem] text-white/85 outline-none transition duration-300 placeholder:text-white/35 focus:border-cyan-400/60 focus:bg-white/[0.04] focus:shadow-[0_0_8px_rgba(100,180,255,0.35)]"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 font-['Orbitron'] text-[0.75rem] uppercase tracking-[0.12em] text-white/45"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-[0.95rem] text-white/85 outline-none transition duration-300 placeholder:text-white/35 focus:border-cyan-400/60 focus:bg-white/[0.04] focus:shadow-[0_0_8px_rgba(100,180,255,0.35)]"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col">
            <label
              htmlFor="message"
              className="mb-2 font-['Orbitron'] text-[0.75rem] uppercase tracking-[0.12em] text-white/45"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="7"
              required
              className="min-h-[180px] resize-none rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-[0.95rem] text-white/85 outline-none transition duration-300 placeholder:text-white/35 focus:border-cyan-400/60 focus:bg-white/[0.04] focus:shadow-[0_0_8px_rgba(100,180,255,0.35)] md:min-h-[240px]"
            />
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-xl border border-cyan-400/40 bg-cyan-400/5 px-6 py-3.5 font-['Orbitron'] text-[0.82rem] uppercase tracking-[0.12em] text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/80 hover:bg-cyan-400/12 hover:shadow-[0_0_12px_rgba(100,180,255,0.35)] active:translate-y-0"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
