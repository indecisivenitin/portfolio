import React, { useEffect } from 'react'
import BottomBar from './BottomBar'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Projects from './Projects'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub, FaTwitter } from "react-icons/fa";
// import Contact from './Contact'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    // useEffect(() => {
    //     gsap.to(".skills-1, .skills-3", {
    //         x: -50,
    //         duration: 2,
    //         yoyo: true,
    //         repeat: -1,
    //         ease: 'Power3.easeInOut',
    //         scrollTrigger: {
    //             trigger: ".skills-1, .skills-3",
    //             start: "top center",
    //             toggleActions: "play none none none",
    //         },
    //     })
    // }, []);

    // useEffect(() => {
    //     gsap.to(".skills-2", {
    //         x: 50,
    //         duration: 2,
    //         yoyo: true,
    //         repeat: -1,
    //         ease: 'Power3.easeInOut',
    //         scrollTrigger: {
    //             trigger: ".skills-2",
    //             start: "top center",
    //             toggleActions: "play none none none",
    //         },
    //     })
    // }, []);


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
        <div id='About' className='w-full min-h-screen bg-black text-white px-36 pt-16 relative'>
            <div className='flex justify-around items-center'>
                <div className="left w-[40%]">
                    <div className="image w-80 overflow-hidden h-auto rounded-2xl border-[#27dfb3] border-[2px] mb-8 hover:border-[4px]">
                        <img className="w-full h-full object-cover object-center" src="/photohd.jpeg" alt="" />
                    </div>

                    <div className="group  social-links flex justify-around items-center w-52 bg-gray-900 rounded-2xl ml-14 hover:scale-40 transition duration-50 backdrop-blur-md border-[#27dfb3] border-[1px] px-2 py-2">

                        <a href="https://github.com/indecisivenitin" target="_blank"><FaGithub className="text-3xl hover:text-[#b271c2] transition-colors duration-200" /></a>
                        <span className='text-2xl text-[#27dfb3]'>|</span>
                        <a href="https://x.com/inde_nitin" target="_blank"><FaTwitter className="text-3xl hover:text-sky-500 transition-colors duration-200" /></a>
                        <span className='text-2xl text-[#27dfb3]'>|</span>
                        <a href="https://www.linkedin.com/in/nitin-yadav-21b125330/" target="_blank"><FaLinkedin className="text-3xl hover:text-violet-500 transition-colors duration-200" /></a>
                    </div>

                </div>



                <div className="right -ml-60 w-[50%] flex flex-col gap-10 mb-26">
                    <h1 className='font-neueMachinia text-5xl text-[#27dfb3]'>About Me</h1>
                    <h2 className='text-2xl'>Hey, I’m Nitin  — a frontend developer passionate about turning ideas into interactive web experiences. Over the past 6+ months, I’ve dedicated myself to learning by building real projects through Frontend Mentor, where I’ve solved challenges and sharpened my problem-solving mindset.</h2>

                    <h2 className='text-2xl'>With 3+ completed projects, I focus on writing clean code, creating responsive layouts, and bringing designs to life. My next step is to keep pushing my limits, take on bigger projects, and grow into a well-rounded developer.</h2>
                </div>
            </div>
            <div className='z-20 fixed bottom-8 left-[40%]'><BottomBar /></div>
            <div className="z-10 skills w-full h-screen px-16 pt-28 relative font-neueMachinia">
                <div id='Skills' className='flex justify-center'><h1 className='text-5xl text-[#27dfb3] font-helveticaDisplay'>Technical Skills</h1></div>
                <div className='w-full flex  justify-center skills-1'>
                    <div className='flex mt-20 w-[40%] justify-around items-center '>
                        <div className='group w-[80px] h-[80px] rounded-2xl  flex flex-col items-center'>
                            <img className='group object-cover object-center w-[80px] h-[80px]' src="/Skills/html.svg" alt="" />
                            <p className=' text-black transition-colors group-hover:text-white '>HTML</p>
                        </div>
                        <div className='group w-[80x] h-[80px] rounded-2xl flex flex-col items-center'>
                            <img className='group object-cover object-center w-[80px] h-[80px]' src="/Skills/css.svg" alt="" />
                            <p className=' text-black transition-colors group-hover:text-white '>CSS</p>
                        </div>
                        <div className=' group w-[80x] h-[80px] rounded-2xl flex flex-col items-center'>
                            <img className='group object-cover object-center w-[80px] h-[80px]' src="/Skills/javascript.svg" alt="" />
                            <p className=' text-black transition-colors group-hover:text-white '>JavaScript</p>
                        </div>
                        <div className=' group w-[80x] h-[80px] rounded-2xl flex flex-col items-center'>
                            <img className='group object-cover object-center w-[80px] h-[80px]' src="/Skills/react.svg" alt="" />
                            <p className=' text-black transition-colors group-hover:text-white '>React JS</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex  justify-center skills-2'>
                    <div className='flex mt-10 w-[40%] justify-around items-center '>
                        <div className=' group w-[80x] h-[80px] rounded-2xl flex flex-col items-center'>
                            <img className='group object-cover object-center w-[80px] h-[80px]' src="/Skills/tailwind.svg" alt="" />
                            <p className=' text-black transition-colors group-hover:text-white '>Tailwindcss</p>
                        </div>
                        <div className=' group w-[80x] h-[80px] rounded-2xl flex flex-col items-center'>
                            <img className='group object-cover object-center w-[80px] h-[80px]' src="/Skills/mongdb.svg" alt="" />
                            <p className=' text-black transition-colors group-hover:text-white '>MongoDb</p>
                        </div>
                        <div className=' group w-[80x] h-[80px] rounded-2xl flex flex-col items-center'>
                            <img className='group object-cover object-center w-[80px] h-[80px]' src="/Skills/ejs.svg" alt="" />
                            <p className=' text-black transition-colors group-hover:text-white ml-2'>Ejs</p>
                        </div>
                        <div className=' group w-[80x] h-[80px] rounded-2xl flex flex-col items-center'>
                            <img className='group object-cover object-center w-[80px] h-[80px]' src="/Skills/linux.svg" alt="" />
                            <p className=' text-black transition-colors group-hover:text-white '>Linux</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex  justify-center skills-3'>
                    <div className='flex mt-10 w-[40%] justify-around items-center '>
                        <div className=' group w-[80x] h-[80px] rounded-2xl flex flex-col items-center'>
                            <img className='group object-cover object-center w-[80px] h-[80px]' src="/Skills/node.svg" alt="" />
                            <p className=' text-black transition-colors group-hover:text-white '>Node</p>
                        </div>
                        <div className=' group w-[80x] h-[80px] rounded-2xl flex flex-col items-center'>
                            <img className='group object-cover object-center w-[80px] h-[80px]' src="/Skills/express.svg" alt="" />
                            <p className=' text-black transition-colors group-hover:text-white '>Express</p>
                        </div>
                        <div className=' group w-[80x] h-[88px] rounded-2xl flex flex-col items-center'>
                            <img className='group object-cover object-center w-[80px] h-[88px]' src="/Skills/gsap.svg" alt="" />
                            <p className=' text-black transition-colors group-hover:text-white ml-8'>GSAP</p>
                        </div>
                        <div className=' group w-[80x] h-[80px] rounded-2xl flex flex-col items-center'>
                            <img className='group object-cover object-center w-[80px] h-[80px]' src="/Skills/figma.svg" alt="" />
                            <p className=' text-black transition-colors group-hover:text-white '>Figma</p>
                        </div>
                    </div>
                </div>

            </div>

            <Projects />

        </div>
    )
}

export default About
