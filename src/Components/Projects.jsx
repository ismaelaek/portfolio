import ProjectItem from './ProjectItem';
import { SiPython, SiTypescript, SiJavascript, SiReact, SiRedux } from 'react-icons/si';

let Projects = () => {
    return (
        <div className=" bg-white z-0 px-12" id='projects'>
            <h1 className=" text-4xl text-gray-800 mb-3">Projects</h1>
            <div className="projects-content">
                <ProjectItem 
                    title={'Todo app'}
                    description={`A todo list app made using reactJS, with authentifacton option to allow each user to manage his own list`}
                    icons={[<SiReact />, <SiJavascript/>, <SiRedux/>]}
                    link={'https://github.com/ismaelaek/todo_app_reactjs_redux'}
                    caption ='View on GitHub'
                />
                <ProjectItem 
                    title={'Pdf Editor'}
                    description={`An online pdf editor application made with ReactJs, TypeScript and Python.`}
                    icons={[<SiReact />, <SiTypescript/>, <SiPython/>]}
                    link={''}
                    caption ='Still under development'
                />
                <ProjectItem 
                    title={'Movie Recommendation '}
                    description={`A Python-based Telegram bot for movie recommendations.`}
                    icons={[ <SiPython/>]}
                    link={'https://github.com/ismaelaek/movie_recommendation_bot'}
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