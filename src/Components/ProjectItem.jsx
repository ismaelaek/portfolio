let ProjectItem = ({image, title, description}) => {
    return (
        <div>
            <div className="project-image">
                <img src={image} alt={title}  />
            </div>
            <div className="description">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectItem;