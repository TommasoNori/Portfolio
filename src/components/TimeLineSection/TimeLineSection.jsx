import TimeLineContainer from "../container/TimeLineContainer/TimeLineContainer";

function TimeLineSection() {
  return (
      <div className="timeline-section">
        <h2 className="timeline-title">Timeline</h2>

        <div className="timeline-wrapper">
          <div className="timeline-item-right">
            <div className="timeline-item-education">
              <TimeLineContainer
                date="2023 - Present"
                title="Bachelor's Degree in Computer Science and Engineering"
                location="Alma Mater Studiorum - UniBo, Cesena"
                description="OOP, databases, algorithms, web programming,
            OS and networks — focus on full-stack development
            and software architecture."
              />
            </div>
          </div>

          <div className="timeline-item-left">
            <div className="timeline-item-work">
              <TimeLineContainer
                date="2021 - 2023"
                title="Lifeguard"
                location="Riccione beach"
                description="During the summer, I work as a lifeguard 
            on the beach — a role I've held for three seasons."
              />
            </div>
          </div>

          <div className="timeline-item-right">
            <div className="timeline-item-education">
              <TimeLineContainer
                date="2018 - 2023"
                title="Liceo Scientifico - Opz. Scienze Applicate"
                location="Riccione"
                description="I attended Liceo Scientifico A.Volta in 
            Riccione, where I graduated in 2023 with a specialization 
            in computer science with solid base in math and science."
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default TimeLineSection;
