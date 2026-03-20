import WhoIamContainer from "../components/container/WhoIamContainer";
import BioContainer from "../components/container/BioContainer";
import TimeLineSection from "../components/TimeLineSection";
import { motion } from "framer-motion";
import HeroAboutMe from "../feature/HeroAboutMe";
import { Download } from "../components/importer_img/SvgImporter"

function AboutMe() {
  return (
    <>
      <HeroAboutMe />
      <section className="relative z-10 w-full px-6 py-16 md:px-10 md:py-20 xl:px-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <div className="grid w-full max-w-6xl gap-8 md:gap-10 xl:grid-cols-[320px_minmax(0,1fr)]">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <WhoIamContainer />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              <BioContainer />
            </motion.div>
          </div>

          <div className="mt-20 w-full max-w-6xl">
            <TimeLineSection />
          </div>

          <div className="mt-16 mb-24 flex w-full max-w-4xl flex-col items-center gap-6 border-t border-white/10 pt-10 text-center">
            <p className="text-xs italic leading-7 text-white/60 sm:text-sm sm:leading-8">
              I know you skipped everything. No judgment — I&apos;ve done it a
              thousand times too. If you actually read it all, you&apos;re a
              legend and you truly deserve to download my CV. If you
              didn&apos;t... well, you&apos;ll find the same stuff written in
              there anyway.
            </p>

            <button
              className="group flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-300 transition duration-300 hover:scale-105 hover:border-cyan-300/50 hover:bg-cyan-400/20 hover:text-cyan-200 hover:shadow-[0_0_30px_rgba(0,255,255,0.35)] active:scale-95"
              onClick={() => {
                const link = document.createElement("a");
                link.href = `${import.meta.env.BASE_URL}Curriculum_Tommaso_Nori.pdf`;
                link.download = "Tommaso_Nori_CV.pdf";
                link.click();
              }}
            >
              <Download/>
              Download my CV
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
