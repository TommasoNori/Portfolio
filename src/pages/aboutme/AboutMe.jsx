import WhoIamContainer from "../../components/container/whoIamContainer";
import TimeLineSection from "../../components/TimeLineSection/TimeLineSection";

function AboutMe() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#020817] px-4 pb-24 pt-10 md:px-6 md:pt-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,180,255,0.08),_transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />

      <div className="relative z-10 w-full max-w-[1200px]">
        <h1 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          About Me
        </h1>

        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
          <WhoIamContainer />

          <div className="rounded-[24px] border border-cyan-400/20 bg-[#050d1b]/85 px-8 py-8 text-white shadow-[0_0_25px_rgba(0,255,255,0.08)] backdrop-blur-sm md:px-10 md:py-10">
            <div className="text-left text-[1rem] leading-8 text-slate-300 md:text-[1.05rem] md:leading-9">
              <p className="mb-6">
                My name is{" "}
                <span className="font-semibold text-cyan-400">
                  Tommaso Nori
                </span>
                , I was born and raised in Rimini. From a young age I developed
                a deep passion for computers and technology, which led me to
                choose a scientific high school with a specialization in
                computer science at{" "}
                <span className="text-violet-400">
                  Liceo Scientifico A. Volta
                </span>{" "}
                in Riccione, where I graduated in 2023.
              </p>
              <br />

              <p className="mb-6">
                Right after high school I enrolled in Computer Science and
                Engineering at the{" "}
                <span className="text-violet-400">
                  Alma Mater Studiorum - University of Bologna
                </span>
                , Cesena campus, where I am currently completing my
                bachelor&apos;s degree. My studies have covered a wide range of
                topics including object-oriented programming, databases,
                algorithms and data structures, web programming, operating
                systems and networks, always with a focus on full-stack
                development and software architecture.
              </p>
              <br />

              <p className="mb-6">
                During my studies I worked for three seasons as a lifeguard on
                the beaches of Riccione, and collaborated with my family at
                Hotel President in Rimini managing the pool and bar. These
                experiences taught me responsibility, teamwork and how to work
                under pressure.
              </p>
              <br />

              <p>
                On the technical side I have built several projects: a
                collaborative web platform for sharing study notes built with
                HTML, CSS, JavaScript and PHP, and{" "}
                <span className="font-medium text-cyan-400">UniEscape</span>, an
                interactive 2D game developed in Java with my university team
                using an MVC architecture. I am passionate about{" "}
                <span className="text-cyan-400">web development</span>,{" "}
                <span className="text-cyan-400">management software</span>,{" "}
                <span className="text-cyan-400">embedded systems</span> and{" "}
                <span className="text-cyan-400">cybersecurity</span>, and I am
                constantly looking to expand my skills through hands-on projects
                and self-study.
              </p>
              <br />
            </div>
          </div>
        </div>

        <div className="mt-20 w-full">
          <TimeLineSection />
        </div>

        <div className="mt-16 mb-24 md:mb-32 flex flex-col items-center gap-6 border-t border-white/10 pt-10 text-center">
          <p className="max-w-[650px] text-sm italic leading-7 text-white/60 md:text-base md:leading-8">
            I know you skipped everything. No judgment — I&apos;ve done it a
            thousand times too. If you actually read it all, you&apos;re a
            legend and you truly deserve to download my CV. If you
            didn&apos;t... well, you&apos;ll find the same stuff written in
            there anyway.
          </p>
          <button
            className="
    group flex items-center gap-2
    rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3
    font-medium text-cyan-300 transition duration-300
    hover:scale-105 hover:border-cyan-300/50 hover:bg-cyan-400/20 hover:text-cyan-200
    hover:shadow-[0_0_30px_rgba(0,255,255,0.35)]
    active:scale-95
  "
            onClick={() => {
              const link = document.createElement("a");
              link.href = `${import.meta.env.BASE_URL}Curriculum_Tommaso_Nori.pdf`;
              link.download = "Tommaso_Nori_CV.pdf";
              link.click();
            }}
          >
            {/* icona download */}
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
