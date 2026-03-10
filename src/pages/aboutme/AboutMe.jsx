import TimeLineSection from "../../components/TimeLineSection/TimeLineSection";

function AboutMe() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center px-4 pt-10 pb-24 md:px-5 md:pt-10 md:pb-[100px]">
      <h1 className="mb-10 text-3xl font-bold text-white md:text-4xl">
        About Me
      </h1>

      <div
        className="
          w-full max-w-[860px] box-border rounded-[18px]
          border border-white/10 bg-white/5
          px-[18px] py-[26px]
          shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06),0_0_24px_rgba(0,229,255,0.05)]
          backdrop-blur-[8px]
          animate-[fadeUp_0.8s_0.2s_ease_both]
          sm:px-6 sm:py-8
          md:px-[60px] md:py-[50px]
        "
      >
        <div
          className="
            mb-9 text-left text-[0.96rem] leading-[1.75] text-white/70
            sm:text-base sm:leading-[1.8]
            md:mb-[50px] md:text-[1.08rem] md:leading-[2] md:text-justify
          "
        >
          <p className="m-0">
            My name is Tommaso Nori, I was born and raised in Rimini. From a
            young age I developed a deep passion for computers and technology,
            which led me to choose a scientific high school with a
            specialization in computer science at Liceo Scientifico A.Volta in
            Riccione, where I graduated in 2023. Right after high school I
            enrolled in Computer Science and Engineering at the Alma Mater
            Studiorum - University of Bologna, Cesena campus, where I am
            currently completing my bachelor's degree. My studies have covered a
            wide range of topics including object-oriented programming,
            databases, algorithms and data structures, web programming,
            operating systems and networks, always with a focus on full-stack
            development and software architecture. During my studies I worked
            for three seasons as a lifeguard on the beaches of Riccione, and
            collaborated with my family at Hotel President in Rimini managing
            the pool and bar. These experiences taught me responsibility,
            teamwork and how to work under pressure. On the technical side I
            have built several projects; a collaborative web platform for
            sharing study notes built with HTML, CSS, JavaScript and PHP, and
            UniEscape, an interactive 2D game developed in Java with my
            university team using an MVC architecture. I am passionate about web
            development, management software, embedded systems and
            cybersecurity, and I am constantly looking to expand my skills
            through hands-on projects and self-study.
          </p>
        </div>
      </div>

      <div className="w-full pt-[10px] mt-14 sm:mt-[70px] md:mt-[110px] md:pt-5">
        <TimeLineSection />
      </div>

      <div
        className="
          mt-10 flex flex-col items-center gap-[22px]
          border-t border-white/10 pt-[30px]
          text-center
          md:gap-7 md:pt-10
        "
      >
        <p
          className="
            m-0 max-w-[600px] text-[0.92rem] italic leading-[1.7] text-white/60
            sm:text-[0.95rem]
            md:text-base md:leading-[1.8]
          "
        >
          I know you skipped everything. No judgment — I've done it a thousand
          times too. If you actually read it all, you're a legend and you truly
          deserve to download my CV. If you didn't... well, you'll find the same
          stuff written in there anyway.
        </p>

        <button
          className="btn-primary"
          onClick={() => {
            const link = document.createElement("a");
            link.href = `${import.meta.env.BASE_URL}Curriculum_Tommaso_Nori.pdf`;
            link.download = "Tommaso_Nori_CV.pdf";
            link.click();
          }}
        >
          Download my CV
        </button>
      </div>
    </section>
  );
}

export default AboutMe;
