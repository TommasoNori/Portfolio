import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me-container">
      <h1>About Me</h1>
      <p>
        My name is Tommaso Nori, I was born and raised in Rimini. From a young
        age I developed a deep passion for computers and technology, which led
        me to choose a scientific high school with a specialization in computer
        science at Liceo Scientifico A.Volta in Riccione, where I graduated in
        2023. Right after high school I enrolled in Computer Science and
        Engineering at the Alma Mater Studiorum - University of Bologna, Cesena
        campus, where I am currently completing my bachelor's degree. My studies
        have covered a wide range of topics including object-oriented
        programming, databases, algorithms and data structures, web programming,
        operating systems and networks, always with a focus on full-stack
        development and software architecture. During my studies I worked for
        three seasons as a lifeguard on the beaches of Riccione, and
        collaborated with my family at Hotel President in Rimini managing the
        pool and bar. These experiences taught me responsibility, teamwork and
        how to work under pressure. On the technical side I have built several
        projects; a collaborative web platform for sharing study notes built
        with HTML, CSS, JavaScript and PHP, and UniEscape, an interactive 2D
        game developed in Java with my university team using an MVC
        architecture. I am passionate about web development, management software
        and cybersecurity, and I am constantly looking to expand my skills
        through hands-on projects and self-study.
      </p>
      <div className="cv-section">
        <p>
          I know you skipped everything. No judgment — I've done it a thousand
          times too. If you actually read it all, you're a legend and you truly
          deserve to download my CV. If you didn't... well, you'll find the same
          stuff written in there anyway.
        </p>
        <button
          className="btn-cv"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Curriculum_Tommaso_Nori.pdf";
            link.download = "Tommaso_Nori_CV.pdf";
            link.click();
          }}
        >
          Download my CV
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
