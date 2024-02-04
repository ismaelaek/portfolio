import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaSquareGithub, FaSquareInstagram, FaSquareBehance } from "react-icons/fa6";
import picture from '../assets/picture.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'


let Main = () => {
    const [text] = useTypewriter({
        words: ['Developer.', 'Designer.'],
        loop: true
    });
    return (
        <main className=" px-24 flex items-center justify-between">
            <div >
                <p className="text-2x1 text-white">Hi there ! it's Ismail,</p>
                <h1 className=" text-6xl text-white">
                    I am a {window.innerWidth < 491 && <br/> }<span className=" text-red-500">{text}</span><Cursor />
                </h1>
                <ul className=" flex gap-5 mt-4">
                    <li>
                        <a href="https://github.com/ismaelaek" target="_blank" className="social">
                            <FaSquareGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/ismaelaitedc12" target="_blank" className="social">
                            <FaSquareBehance />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/l0giclabyrinth/" target="_blank" className="social">
                            <FaSquareInstagram />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="image">
                <img
                    src={picture}
                    alt="ismael ait el kamel"
                    width={300} height={300}
                    className=" rounded-full border-white border-8"
                />
            </div>
        </main>
    );
};

export default Main;
