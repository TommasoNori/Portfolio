import { motion } from "framer-motion";
import TimeLineContainer from "../../components/container/TimeLineContainer";
import { StudyIcon, WorkIcon } from "../../components/importer_img/SvgImporter";

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

  const titleVariant = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const lineVariant = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const nodeVariant = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: "backOut" },
    },
  };

  const mobileCardVariant = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const leftCardVariant = {
    hidden: { opacity: 0, x: -60, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const rightCardVariant = {
    hidden: { opacity: 0, x: 60, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="w-full px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.45em] text-cyan-400/70">
            [ Timeline ]
          </p>

          <h2 className="font-['Orbitron'] text-4xl font-bold text-[#4ea1ff] md:text-6xl">
            Journey
          </h2>
        </motion.div>

        <div className="relative mx-auto w-full max-w-5xl">
          <motion.div
            variants={lineVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ originY: 0 }}
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-cyan-400/30 shadow-[0_0_16px_rgba(0,255,255,0.25)] md:block"
          />

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={`${item.title}-${index}`}>
                  <motion.div
                    variants={mobileCardVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="md:hidden"
                  >
                    <TimeLineContainer
                      date={item.date}
                      title={item.title}
                      location={item.location}
                      description={item.description}
                    />
                  </motion.div>

                  <div className="hidden md:grid md:grid-cols-[1fr_90px_1fr] md:items-center">
                    <div className={isLeft ? "pr-10" : ""}>
                      {isLeft && (
                        <motion.div
                          variants={leftCardVariant}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.25 }}
                        >
                          <TimeLineContainer
                            date={item.date}
                            title={item.title}
                            location={item.location}
                            description={item.description}
                          />
                        </motion.div>
                      )}
                    </div>

                    <div className="relative flex items-center justify-center">
                      <motion.div
                        variants={nodeVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.35 }}
                        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-[#020817] ${
                          item.icon === "study"
                            ? "border-cyan-400/50 shadow-[0_0_25px_rgba(0,255,255,0.25)]"
                            : "border-fuchsia-400/50 shadow-[0_0_25px_rgba(217,70,239,0.25)]"
                        }`}
                      >
                        {item.icon === "study" ? <StudyIcon /> : <WorkIcon />}
                      </motion.div>
                    </div>

                    <div className={!isLeft ? "pl-10" : ""}>
                      {!isLeft && (
                        <motion.div
                          variants={rightCardVariant}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.25 }}
                        >
                          <TimeLineContainer
                            date={item.date}
                            title={item.title}
                            location={item.location}
                            description={item.description}
                          />
                        </motion.div>
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
