function ProjectContainer({ name , description, image, link }) {
    return (
        <>
            <div className="project-container">
                <h2>{name}</h2>
                <p>{description}</p>
                <img src={image} alt={name} />
                <a href={link}>View Project</a>
            </div>
        </>
    )
}

export default ProjectContainer