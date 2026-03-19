import TimeLineContainer from "../container/TimeLineContainer";

function TimeLineSection() {
  const timelineItems = [
    {
      date: "2023 - Present",
      title: "Bachelor's Degree in Computer Science and Engineering",
      location: "Alma Mater Studiorum - UniBo, Cesena",
      description:
        "OOP, databases, algorithms, web programming, OS and networks — focus on full-stack development and software architecture.",
    },
    {
      date: "2021 - 2023",
      title: "Lifeguard",
      location: "Riccione beach",
      description:
        "During the summer, I worked as a lifeguard on the beach for three seasons.",
    },
    {
      date: "2018 - 2023",
      title: "Liceo Scientifico - Opz. Scienze Applicate",
      location: "Liceo Scientifico A. Volta, Riccione",
      description:
        "Specializzazione in informatica con solide basi in matematica e scienze.",
    },
  ];

  return (
    <section className="w-full px-4 py-12 md:px-8 md:py-20">
      <h2 className="mb-12 text-center text-[2rem] font-semibold text-[#4ea1ff] md:text-[2.5rem]">
        Timeline
      </h2>

      <div className="relative mx-auto w-full max-w-[980px]">
        <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-cyan-400/30 shadow-[0_0_14px_rgba(0,255,255,0.25)] md:block" />

        <div className="flex flex-col gap-14">
          {timelineItems.map((item, index) => (
            <div
              key={`${item.date}-${index}`}
              className={`relative flex w-full ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="relative w-full md:w-1/2 md:px-12">
                <TimeLineContainer
                  date={item.date}
                  title={item.title}
                  location={item.location}
                  description={item.description}
                />
              </div>

              <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-300 bg-[#020817] shadow-[0_0_18px_rgba(0,255,255,0.6)] md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimeLineSection;
