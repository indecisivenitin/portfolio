import React, { useEffect } from 'react'
import BottomBar from './BottomBar'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Projects from './Projects'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub, FaTwitter } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    

    useEffect(() => {

        gsap.utils.toArray([".group"]).forEach((row) => {
            row.addEventListener("mouseenter", () => {
                gsap.to(row, { y: -20, scale: 1.05, duration: 0.3, ease: "power2.out" });
            });
            row.addEventListener("mouseleave", () => {
                gsap.to(row, { y: 0, scale: 1, duration: 0.3, ease: "power2.inOut" });
            });
        });
    }, []);

    useEffect(() => {

        gsap.utils.toArray([".skills-1, .skills-2, .skills-3"]).forEach((row) => {
            row.addEventListener("mouseenter", () => {
                gsap.to(row, { y: -10, scale: 1.05, duration: 0.3, ease: "power2.out" });
            });
            row.addEventListener("mouseleave", () => {
                gsap.to(row, { y: 0, scale: 1, duration: 0.3, ease: "power2.inOut" });
            });
        });
    }, []);




    return (
        <div id='About' className='w-full min-h-screen bg-black text-white px-4 sm:px-8 md:px-36 pt-8 md:pt-16 relative'>
            <div className='flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0'>
                <div className="left w-full md:w-[40%]">
                    <div className="image w-full max-w-80 mx-auto md:mx-0 overflow-hidden h-auto rounded-2xl border-[#27dfb3] border-[2px] mb-8 hover:border-[4px]">
                        <img className="w-full h-full object-cover object-center" src="https://drive.google.com/uc?export=view&id=1F9eBKwuj1d1bNPisJinvhggQPAxQMWvH" alt="profile" />
                    </div>

                    <div className="group social-links flex justify-around items-center w-full max-w-52 mx-auto md:mx-0 md:ml-14 bg-gray-900 rounded-2xl transition duration-50 backdrop-blur-md border-[#27dfb3] border-[1px] px-2 py-2">
                        <a href="https://github.com/indecisivenitin" target="_blank" rel="noopener noreferrer"><FaGithub className="text-2xl md:text-3xl hover:text-[#b271c2] transition-colors duration-200" /></a>
                        <span className='text-xl md:text-2xl text-[#27dfb3]'>|</span>
                        <a href="https://x.com/inde_nitin" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-2xl md:text-3xl hover:text-sky-500 transition-colors duration-200" /></a>
                        <span className='text-xl md:text-2xl text-[#27dfb3]'>|</span>
                        <a href="https://www.linkedin.com/in/nitin-yadav-21b125330/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl md:text-3xl hover:text-violet-500 transition-colors duration-200" /></a>
                    </div>

                </div>

                <div className="right w-full md:w-[50%] md:-ml-60 flex flex-col gap-6 md:gap-10 mb-0 md:mb-26">
                    <h1 className='font-neueMachinia text-3xl md:text-5xl text-[#27dfb3]'>About Me</h1>
                    <h2 className='text-base md:text-2xl leading-relaxed'>Hey, I'm Nitin — a frontend developer passionate about turning ideas into interactive web experiences. Over the past 6+ months, I've dedicated myself to learning by building real projects through Frontend Mentor, where I've solved challenges and sharpened my problem-solving mindset. I'm proficient in the MERN stack, with hands-on experience in Flask and Python-based projects, and I'm currently diving into Docker to enhance my deployment skills.</h2>
                    <h2 className='text-base md:text-2xl leading-relaxed'>With 3+ completed projects, I focus on writing clean code, creating responsive layouts, and bringing designs to life. My next step is to keep pushing my limits, take on bigger projects, and grow into a well-rounded developer.</h2>
                </div>
            </div>
            <div className='z-20 fixed bottom-8 left-1/2 transform -translate-x-1/2 md:left-[40%] md:transform-none'><BottomBar /></div>
            <div className="z-10 skills w-full min-h-screen px-4 sm:px-8 md:px-16 pt-12 md:pt-28 relative font-neueMachinia">
                <div id='Skills' className='flex justify-center'><h1 className='text-3xl md:text-5xl text-[#27dfb3] font-helveticaDisplay'>Technical Skills</h1></div>
                <div className='w-full flex justify-center skills-1'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 md:mt-20 w-full sm:w-[80%] md:w-[40%] px-2 sm:px-0'>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px]' src="/Skills/html.svg" alt="html" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>HTML</p>
                        </div>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px]' src="/Skills/css.svg" alt="css" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>CSS</p>
                        </div>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px]' src="/Skills/javascript.svg" alt="javascript" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>JavaScript</p>
                        </div>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px]' src="/Skills/react.svg" alt="react" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>React JS</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center skills-2'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-10 w-full sm:w-[80%] md:w-[40%] px-2 sm:px-0'>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px]' src="/Skills/tailwind.svg" alt="tailwind" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>Tailwindcss</p>
                        </div>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px]' src="/Skills/mongodb.svg" alt="mongodb" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>MongoDb</p>
                        </div>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px]' src="/Skills/ejs.svg" alt="ejs" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>Ejs</p>
                        </div>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px]' src="/Skills/linux.svg" alt="linux" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white '>Linux</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center skills-3'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-10 w-full sm:w-[80%] md:w-[40%] px-2 sm:px-0'>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px]' src="/Skills/node.svg" alt="node" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>Node</p>
                        </div>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px]' src="/Skills/express.svg" alt="express" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>Express</p>
                        </div>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px]' src="/Skills/gsap.svg" alt="gsap" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white whitespace-pre mt-0.5'>      GSAP</p>
                        </div>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px]' src="/Skills/figma.svg" alt="figma" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>Figma</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center skills-3'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-10 w-full sm:w-[80%] md:w-[40%] px-2 sm:px-0'>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px] hidden lg:block md:block' src="/Skills/flask.svg" alt="flask" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white '>Flask</p>
                        </div>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px] hidden lg:block md:block' src="/Skills/pyhton.svg" alt="python" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>Python</p>
                        </div>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px] hidden lg:block md:block' src="/Skills/docker.svg" alt="docker" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>Docker</p>
                        </div>
                        <div className='group w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-2xl flex flex-col items-center mx-auto'>
                            <img className='object-cover object-center w-[76px] h-[76px] hidden lg:block md:block' src="/Skills/git.svg" alt="git" />
                            <p className='text-black text-xs sm:text-sm transition-colors group-hover:text-white'>Git</p>
                        </div>
                    </div>
                </div>

            </div>

            <Projects />

        </div>
    )
}

export default About
