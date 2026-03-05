import "./ProjectContainer.css";

function ProjectContainer({ name, description, image, link }) {
  return (
    <>
      <div className="project-container">
        <div className="project-image">
          <img src={image} alt={name} />
        </div>
        <div className="project-content">
          <h2>{name}</h2>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectContainer;
