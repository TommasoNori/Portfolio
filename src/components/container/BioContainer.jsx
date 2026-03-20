function BioContainer() {
  return (
    <div className="rounded-[28px] border border-cyan-400/20 bg-[#050d1b]/70 px-8 py-8 text-white shadow-[0_0_28px_rgba(0,255,255,0.10)] backdrop-blur-sm md:px-10 md:py-10 xl:px-12 xl:py-12">
      <div className="text-left text-[14px] leading-8 text-slate-300 md:text-[15px] md:leading-9">
        <p className="mb-5">
          My name is{" "}
          <span className="font-semibold text-cyan-400">Tommaso Nori</span>, I
          was born and raised in Rimini. From a young age I developed a strong
          passion for computers and technology, which led me to choose a
          scientific high school with a specialization in computer science at{" "}
          <span className="text-violet-400">Liceo Scientifico A. Volta</span> in
          Riccione, where I graduated in 2023.
        </p>

        <p className="mb-5">
          Right after graduating, I enrolled in Computer Science and Engineering
          at the{" "}
          <span className="text-violet-400">
            Alma Mater Studiorum - University of Bologna
          </span>
          , Cesena campus, where I am currently completing my bachelor’s degree.
          My studies have covered a wide range of topics including
          object-oriented programming, databases, algorithms and data
          structures, web programming, operating systems and networks, always
          with a focus on full-stack development and software architecture.
        </p>

        <p>
          I am passionate about{" "}
          <span className="text-cyan-400">web development</span>,{" "}
          <span className="text-cyan-400">management software</span>,{" "}
          <span className="text-cyan-400">embedded systems</span> and{" "}
          <span className="text-cyan-400">cybersecurity</span>, and I am
          constantly looking to expand my skills through hands-on projects and
          self-study.
        </p>
      </div>
    </div>
  );
}

export default BioContainer;
