import ProjectItem from './ProjectItem';
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
let Projects = () => {
    return (
        <div className=" bg-white z-0 px-12" id='projects'>
            <h1 className=" text-4xl text-gray-800 mb-3">Projects</h1>
            <div className=" w-full h-96 border-black border-2 grid grid-cols-4">
                <ProjectItem
                    image={Project1}
                    title='tkinter app'
                    description='School managmet app made with Tkinter library '
                />

                <ProjectItem
                    image={Project2}
                    title='Telegram Bot'
                    description='Movie recomondation telegram bot made with Python'
                />

            </div>
        </div>
    )
}

export default Projects;