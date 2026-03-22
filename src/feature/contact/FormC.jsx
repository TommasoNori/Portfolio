import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SendIcon } from "../../components/importer_img/SvgImporter";

function FormC() {
  const container = {
    hidden: { opacity: 0, x: 40 },
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
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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

  return (
    <motion.form
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      onSubmit={sendEmail}
      className="w-full rounded-[28px] border border-cyan-400/20 bg-[#050d1b]/70 px-6 py-8 shadow-[0_0_30px_rgba(0,255,255,0.08)] backdrop-blur-sm md:px-10 md:py-10"
    >
      <motion.p
        variants={item}
        className="mb-8 font-mono text-[12px] uppercase tracking-[0.35em] text-cyan-400/75"
      >
        // SEND_MESSAGE()
      </motion.p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <motion.div variants={item} className="flex flex-col">
          <label className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-[0.95rem] text-white/80 outline-none transition duration-300 placeholder:text-white/30 focus:border-cyan-400/60 focus:shadow-[0_0_6px_rgba(0,255,255,0.25)]"
          />
        </motion.div>

        <motion.div variants={item} className="flex flex-col">
          <label className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-[0.95rem] text-white/80 outline-none transition duration-300 placeholder:text-white/30 focus:border-cyan-400/60 focus:shadow-[0_0_6px_rgba(0,255,255,0.25)]"
          />
        </motion.div>
      </div>

      <motion.div variants={item} className="mt-6 flex flex-col">
        <label className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
          Message
        </label>
        <textarea
          name="message"
          rows="6"
          required
          placeholder="Write your message..."
          className="min-h-[180px] resize-none rounded-xl border border-white/10 bg-transparent px-4 py-3 text-[0.95rem] text-white/80 outline-none transition duration-300 placeholder:text-white/30 focus:border-cyan-400/60 focus:shadow-[0_0_6px_rgba(0,255,255,0.25)] md:min-h-[220px]"
        />
      </motion.div>

      <motion.button
        variants={item}
        type="submit"
        className="group mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-cyan-400/40 bg-cyan-400/5 px-6 py-4 font-['Orbitron'] text-[0.85rem] uppercase tracking-[0.18em] text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/80 hover:bg-cyan-400/10 hover:text-cyan-200 hover:shadow-[0_0_18px_rgba(0,255,255,0.2)]"
      >
        Send Message
        <span className="transition duration-300 group-hover:translate-x-1">
          <SendIcon />
        </span>
      </motion.button>
    </motion.form>
  );
}

export default FormC;
