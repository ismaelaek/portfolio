let ProjectItem = ({icons, title, description, link, caption}) => {
    return (
            <div className="project-card">
                {icons.map((icon, index) => {
                    return (<p className='project-icons' key={index}> {icon}</p>)
                })}
                <div className="project-info">
                    <p className="text head">{title}</p>
                    <span>{description}</span>
                    <button
                        className="text link">
                        <a href={link !=='' ? link : '#'}>
                            {caption}
                        </a>
                    </button>
                </div>
            </div>
    )
}

export default ProjectItem;