import WhoIamContainer from "../../components/container/WhoIamContainer";
import BioContainer from "../../components/container/BioContainer";
import TimeLineSection from "../../components/TimeLineSection";

function AboutMe() {
  return (
    <section className="relative z-10 w-full px-6 py-20 md:px-10 xl:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_2fr]">
          <WhoIamContainer />
          <BioContainer />
        </div>

        <div className="mx-auto mt-20 w-full max-w-[920px]">
          <TimeLineSection />
        </div>

        <div className="mt-16 mb-24 flex flex-col items-center gap-6 border-t border-white/10 pt-10 text-center">
          <p className="max-w-[700px] text-xs italic leading-7 text-white/60 sm:text-sm sm:leading-8">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
              />
            </svg>
            Download my CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
