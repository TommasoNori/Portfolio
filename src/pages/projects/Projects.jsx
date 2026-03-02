import ProjectContainer from "../../components/container/ProjectContainer";

function Project() {
  return (
    <>
      <h1>Projects</h1>
      <ProjectContainer
        name="Uninotes"
        description="This is a Web project made with php"
        image="./assets/img/UninotesLogo.png"
        link="/https://github.com/Mattia-Pozzati/UniNotes"
      />
    </>
  );
}

export default Project;
