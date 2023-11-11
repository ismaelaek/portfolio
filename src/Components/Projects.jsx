import ProjectItem from './ProjectItem';
import { SiPython, SiTypescript, SiJavascript, SiReact } from 'react-icons/si';

let Projects = () => {
    return (
        <div className=" bg-white z-0 px-12" id='projects'>
            <h1 className=" text-4xl text-gray-800 mb-3">Projects</h1>
            <div className="projects-content">
                <ProjectItem 
                    title={'Project Manager'}
                    description={`a project manager app implemented in React.js and Javascript.`}
                    icons={[<SiReact />, <SiJavascript/>]}
                    link={'https://github.com/ismaelaek/react-project-manager'}
                    caption ='View on GitHub'
                />
                <ProjectItem 
                    title={'Pdf Editor'}
                    description={`An online pdf editor application made using ReactJs, TypeScript and Python.`}
                    icons={[<SiReact />, <SiTypescript/>, <SiPython/>]}
                    link={''}
                    caption ='Still under development'
                />
                <ProjectItem 
                    title={'Movie Recommendation '}
                    description={`A Python-based Telegram bot for movie recommendations.`}
                    icons={[ <SiPython/>]}
                    link={'https://github.com/ismaelaek/react-project-manager'}
                    caption ='View on GitHub'
                />
                <ProjectItem 
                    title={'School Managment'}
                    description={`An educational management Tkinter application crafted in Python for school administration.`}
                    icons={[<SiPython />]}
                    link={'https://github.com/ismaelaek/school-management-tkinter-app'}
                    caption ='View on GitHub'
                />
            </div>
        </div>
    )
}

export default Projects;