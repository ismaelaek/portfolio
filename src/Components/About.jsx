import { SiJavascript, SiPython, SiReact, SiMongodb, SiAdobephotoshop, SiFigma, SiGithub, SiLaravel } from "react-icons/si";
import {SiPostman, SiGit, SiAdobeillustrator } from "react-icons/si";
let About = () => {
    return (
        <div id="about" className=" p-5 mx-10 rounded-xl bg-white text-center shadow-md" style={{ position: "absolute", top: 0, left: 0, zIndex: 10 }}>
            <h1 className=" text-3xl">Hi, I'm Ismail Ait El Kamel, Nice to meet you</h1>
            <p className=" text-center text-lg ">
                A highly motivated and ambitious first-year student at ISTA 
                Tinghir, currently seeking an internship opportunity in web development. 
                With a solid foundation in algorithms and object-oriented programming 
                using Python, coupled with proficiency in HTML, CSS, PHP, JavaScript, and 
                SQL/MySQL, I am eager to apply my knowledge and further develop my 
                skills in a real-world setting. As a beginner, I am enthusiastic about contributing to a dynamic team and gaining hands-on experience to grow as a web
                developer.
            </p>
            <h1 className=" text-3xl mt-5">My Skills </h1>
            <div className=" flex justify-between px-24" id="skills">
                <div>
                    <p className=" text-2xl text-red-800 my-2">Design</p>
                    <ul className="skill-item">
                        <li title="Adobe Photoshop"><SiAdobephotoshop/></li>
                        <li title="Adobe Illustrator"><SiAdobeillustrator/></li>
                        <li title="Figma"><SiFigma/></li>
                    </ul>
                </div>
                <div>
                    <p className=" text-2xl text-red-800 my-2">Programming</p>
                    <ul className="skill-item">
                        <li title="python" ><SiPython/></li>
                        <li title="ReactJs"><SiReact/></li>
                        <li title="Laravel"><SiLaravel/></li>
                        <li title="MongoDB"><SiMongodb/></li>
                    </ul>
                </div>
                <div>
                    <p className=" text-2xl text-red-800 my-2">Tools</p>
                    <ul className="skill-item">
                        <li title="Git"><SiGit/></li>
                        <li title="GitHub"><SiGithub/></li>
                        <li title="PostMan"><SiPostman/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;