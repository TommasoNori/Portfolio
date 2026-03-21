import { motion } from "framer-motion";
import ProjectContainer from "../../components/container/ProjectContainer";
import UninotesLogo from "../../assets/img/UninotesLogo.svg";
import universityEscape from "../../assets/img/universityEscape.png";

function ProjectSection() {
  const projects = [
    {
      name: "Uninotes",
      description:
        "Collaborative platform for sharing and organizing study notes with real-time updates, authentication, and subject categorization. Built with HTML, CSS, JavaScript, and PHP.",
      image: UninotesLogo,
      link: "https://github.com/Mattia-Pozzati/UniNotes",
    },
    {
      name: "University Escape",
      description:
        "Interactive 2D game developed in Java with custom graphics and game logic, built with an object-oriented architecture and MVC pattern using Java Swing.",
      image: universityEscape,
      link: "https://github.com/Alejandro-the-Unyielding/OOP24-UE",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-8"
      >
        {projects.map((item) => (
          <motion.div key={item.name} variants={cardVariants}>
            <ProjectContainer {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectSection;
