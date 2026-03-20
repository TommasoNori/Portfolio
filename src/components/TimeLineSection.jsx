import TimeLineContainer from "./container/TimeLineContainer";
import { StudyIcon, WorkIcon } from "./importer_img/SvgImporter";

function TimeLineSection() {
  const timelineItems = [
    {
      date: "2023 - Present",
      title: "Bachelor's Degree in Computer Science and Engineering",
      location: "Alma Mater Studiorum - UniBo, Cesena",
      description:
        "Object-oriented programming, databases, algorithms, web development, operating systems, and networks, with a strong focus on full-stack development and software architecture.",
      icon: "study",
    },
    {
      date: "2021 - 2023",
      title: "Lifeguard",
      location: "Beaches of Riccione",
      description:
        "Worked as a lifeguard for three summer seasons, developing responsibility, teamwork, and stress management skills.",
      icon: "work",
    },
    {
      date: "2018 - 2023",
      title: "Scientific High School - Applied Sciences",
      location: "Liceo Scientifico A. Volta, Riccione",
      description:
        "Computer science-oriented education with solid foundations in mathematics and science.",
      icon: "study",
    },
  ];

  return (
    <section className="w-full px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.45em] text-cyan-400/70">
            [ Timeline ]
          </p>

          <h2 className="font-['Orbitron'] text-4xl font-bold text-[#4ea1ff] md:text-6xl">
            Journey
          </h2>
        </div>

        <div className="relative mx-auto w-full max-w-5xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-cyan-400/30 shadow-[0_0_16px_rgba(0,255,255,0.25)] md:block" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={`${item.title}-${index}`}>
                  <div className="md:hidden">
                    <TimeLineContainer
                      date={item.date}
                      title={item.title}
                      location={item.location}
                      description={item.description}
                    />
                  </div>

                  <div className="hidden md:grid md:grid-cols-[1fr_90px_1fr] md:items-center">
                    <div className={isLeft ? "pr-10" : ""}>
                      {isLeft && (
                        <TimeLineContainer
                          date={item.date}
                          title={item.title}
                          location={item.location}
                          description={item.description}
                        />
                      )}
                    </div>

                    <div className="relative flex items-center justify-center">
                      <div
                        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-[#020817] ${
                          item.icon === "study"
                            ? "border-cyan-400/50 shadow-[0_0_25px_rgba(0,255,255,0.25)]"
                            : "border-fuchsia-400/50 shadow-[0_0_25px_rgba(217,70,239,0.25)]"
                        }`}
                      >
                        {item.icon === "study" ? <StudyIcon /> : <WorkIcon />}
                      </div>
                    </div>

                    <div className={!isLeft ? "pl-10" : ""}>
                      {!isLeft && (
                        <TimeLineContainer
                          date={item.date}
                          title={item.title}
                          location={item.location}
                          description={item.description}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimeLineSection;
