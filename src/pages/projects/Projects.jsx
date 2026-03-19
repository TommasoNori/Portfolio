import ProjectContainer from "../../components/container/ProjectContainer/ProjectContainer";
import UninotesLogo from "../../assets/img/UninotesLogo.svg";
import universityEscape from "../../assets/img/universityEscape.png";
import "./Projects.css";
import reactlogo from "../../assets/react.svg";

function Project() {
  return (
    <>
      <div className="project-page-container">
        <h1 className="page-title">Projects</h1>
        <div className="onWork-project">
          <h2>What I'm Working On</h2>
          <p>
            Currently open to new projects — if you'd like to commission
            something, feel free to reach out via email!
          </p>
        </div>
        <div className="project-page-list">
          <div className="project_1">
            <ProjectContainer
              name="Uninotes"
              description="Collaborative platform for sharing and organizing 
              study notes with real-time updates, authentication and subject 
              categorization. Built with HTML, CSS, JavaScript and PHP."
              image={UninotesLogo}
              link="https://github.com/Mattia-Pozzati/UniNotes"
            />
          </div>
          <div className="project_2">
            <ProjectContainer
              name="University Escape"
              description="Interactive 2D game developed in Java with custom 
              graphics and game logic, built with an object-oriented architecture 
              and MVC pattern using Java Swing."
              image={universityEscape}
              link="https://github.com/Alejandro-the-Unyielding/OOP24-UE"
            />
          </div>
        </div>
        <div className="project-website">
          <h2 className="project-website-title">This Website</h2>
          <p>
            This website is a personal project built with React and Vite,
            created to explore modern frontend development and improve my
            skills.
          </p>
          <div className="tech-logos">
            <img src={reactlogo} alt="React Logo" className="react-logo" />
            <img
              src={`${import.meta.env.BASE_URL}vite.svg`}
              alt="Vite Logo"
              className="vite-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
