import TimeLineContainer from "../container/TimeLineContainer/TimeLineContainer";
import "./TimeLineSection.css";

function TimeLineSection() {
  return (
    <section className="w-full px-4 py-12 md:px-8 md:py-24">
      <h2 className="mb-8 text-center text-[2rem] text-[#4ea1ff] md:mb-16 md:text-[2.5rem]">
        Timeline
      </h2>

      <div className="timeline-grid">
        <div className="timeline-row right education">
          <div className="timeline-spacer"></div>
          <div className="timeline-center"></div>
          <div className="timeline-card-wrap">
            <TimeLineContainer
              date="2023 - Present"
              title="Bachelor's Degree in Computer Science and Engineering"
              location="Alma Mater Studiorum - UniBo, Cesena"
              description="OOP, databases, algorithms, web programming, OS and networks — focus on full-stack development and software architecture."
            />
          </div>
        </div>

        <div className="timeline-row left work">
          <div className="timeline-card-wrap">
            <TimeLineContainer
              date="2021 - 2023"
              title="Lifeguard"
              location="Riccione beach"
              description="During the summer, I worked as a lifeguard on the beach for three seasons."
            />
          </div>
          <div className="timeline-center"></div>
          <div className="timeline-spacer"></div>
        </div>

        <div className="timeline-row right education">
          <div className="timeline-spacer"></div>
          <div className="timeline-center"></div>
          <div className="timeline-card-wrap">
            <TimeLineContainer
              date="2018 - 2023"
              title="Liceo Scientifico - Opz. Scienze Applicate"
              location="Liceo Scientifico A. Volta, Riccione"
              description="Specializzazione in informatica con solide basi in matematica e scienze."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimeLineSection;
