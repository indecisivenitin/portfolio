import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function Projects() {
    const [videoSrc, setVideoSrc] = useState("");
    const [showVideo, setShowVideo] = useState(false);

    const videoRef = useRef(null);
    const containerRef = useRef(null);


    const sundownClick=()=>{
        window.open("https://indecisivenitin.github.io/Web-project-/", "_blank")
    }
    const ochiClick=()=>{
        window.open("https://indecisivenitin.github.io/OCHI.DESIGN/", "_blank")
    }
    const todesktopClick=()=>{
        window.open("https://indecisivenitin.github.io/TailwindCSS-webpage/", "_blank")
    }
    const portfolioClick=()=>{
        window.open("https://github.com/", "_blank")
    }

    useEffect(() => {
        if (!videoRef.current) return;


        gsap.set(videoRef.current, { x: 0, y: 0 });
    }, []);

    useEffect(() => {
      gsap.to(".clickme",{
        y:10,
        opacity:0.2,
        delay:0.1,
        duration:1,
        yoyo:true,
        ease: "power1.inOut",
        repeat:-1
      })
    }, [])
    

    const handleMouseMove = (e) => {
        if (!videoRef.current || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();


        let x = e.clientX - rect.left - 128;
        let y = e.clientY - rect.top - 72;


        x = Math.max(0, Math.min(x, rect.width - 256));
        y = Math.max(0, Math.min(y, rect.height - 144));


        gsap.to(videoRef.current, {
            x,
            y,
            duration: 0.4,
            ease: "power3.out",
        });
    };

    return (
        <>
            <div id="Projects" className="w-full min-h-screen bg-black text-white -mt-40 relative">
                <span className="text-4xl text-[#27dfb3] font-helveticaDisplay ml-10">
                    Projects I've Built
                    <h3 className="clickme mt-4 ml-9 text-xl font-neueMachinia text-gray-300">"Click on the Projects to visit live website."</h3>
                </span>

                {/* Project container */}
                <div
                    ref={containerRef}
                    className="project-div w-full min-h-[60%] flex flex-col gap-8 px-10 py-6 rounded-xl mt-10 relative"
                    onMouseMove={handleMouseMove}>


                    {showVideo && (
                        <div
                            ref={videoRef}
                            className="absolute w-200 h-100 border-white/60 border-2 bg-black rounded-xl overflow-hidden pointer-events-none z-50">

                            <video
                                src={videoSrc}
                                autoPlay
                                muted
                                loop
                                className="w-full h-full object-cover"
                                playbackRate={1.5}
                            />
                        </div>
                    )}

                    {/* Sundown Studio */}
                    <div 
                        onClick={sundownClick}
                        className="projects min-h-34 px-10 py-6 border-white/60 border-2 rounded-xl flex flex-col justify-end gap-4"
                        onMouseEnter={() => {
                            setVideoSrc("/videos/sundown-studios.mp4");
                            setShowVideo(true);
                        }}
                        onMouseLeave={() => setShowVideo(false)}>

                        <h2 className="name text-2xl text-[#FF330A]">
                            Sundown Studio : A Design Agency Landing Page
                        </h2>
                        <p className="description font-extralight">
                            This project is a modern, interactive design agency landing page built
                            with React. It leverages GSAP for smooth animations and Swiper.js for
                            responsive, touch-friendly sliders, creating an engaging and dynamic
                            user experience.
                        </p>
                        <div className="skillset flex gap-4 items-center w-52">
                            <img className='w-10 h-10' src="/Skills/react.svg" alt="" /><img className='w-10 h-10' src="/Skills/tailwind.svg" alt="" /><img className='w-10 h-10' src="/Skills/node.svg" alt="" /><img className='w-10 h-10' src="/Skills/javascript.svg" alt="" /><img className='w-10 h-10' src="/Skills/gsap.svg" alt="" />
                        </div>
                    </div>

                    {/* OCHI.DESIGN */}
                    <div
                        onClick={ochiClick}
                        className="projects min-h-34 px-10 py-6 border-white/60 border-2 rounded-xl flex flex-col justify-end gap-4"
                        onMouseEnter={() => {
                            setVideoSrc("/videos/ochi-design.mp4");
                            setShowVideo(true);
                        }}
                        onMouseLeave={() => setShowVideo(false)}>

                        <h2 className="name text-2xl text-[#CDEA68]">
                            OCHI.DESIGN: Immersive Presentation Design Agency
                        </h2>
                        <p className="description font-extralight">
                            OCHI.DESIGN is a dynamic and interactive landing page built with
                            React.js, GSAP, Swiper.js, and Locomotive Scroll. The project showcases
                            smooth animations, responsive sliders, and immersive scrolling effects,
                            creating a visually compelling and engaging user experience.
                        </p>
                        <div className="skillset flex gap-4 items-center w-52">
                            <img className='w-10 h-10' src="/Skills/react.svg" alt="" /><img className='w-10 h-10' src="/Skills/tailwind.svg" alt="" /><img className='w-10 h-10' src="/Skills/node.svg" alt="" /><img className='w-10 h-10' src="/Skills/javascript.svg" alt="" /><img className='w-10 h-10' src="/Skills/gsap.svg" alt="" />
                        </div>
                    </div>

                    {/* ToDesktop */}
                    <div

                        onClick={todesktopClick}
                        className="projects min-h-34 px-10 py-6 border-white/60 border-2 rounded-xl flex flex-col justify-end gap-4"
                        onMouseEnter={() => {
                            setVideoSrc("/videos/ToDesktop.mp4");
                            setShowVideo(true);
                        }}
                        onMouseLeave={() => setShowVideo(false)}>

                        <h2 className="name text-2xl text-[#4355F7]">ToDesktop</h2>
                        <p className="description font-extralight">
                            This project is a responsive landing page built using Tailwind CSS,
                            showcasing a clean and modern design. It demonstrates the utility-first
                            approach of Tailwind CSS, emphasizing efficient styling and layout
                            techniques. The page features a user-friendly interface, optimized for
                            various screen sizes.
                        </p>
                        <div className="skillset flex gap-4 items-center w-52">
                            <img className='w-10 h-10' src="/Skills/react.svg" alt="" /><img className='w-10 h-10' src="/Skills/tailwind.svg" alt="" /><img className='w-10 h-10' src="/Skills/javascript.svg" alt="" />
                        </div>
                    </div>
                    {/* Portfolio*/}
                    <div
                        onClick={portfolioClick}
                        className="projects min-h-34 px-10 py-6 border-white/60 border-2 rounded-xl flex flex-col justify-end gap-4 mb-30"
                        onMouseEnter={() => {
                            setVideoSrc("/videos/portfolio.mp4");
                            setShowVideo(true);
                        }}
                        onMouseLeave={() => setShowVideo(false)}>

                        <h2 className="name text-2xl text-[#4355F7]">Portfolio: Personal Portfolio Website</h2>
                        <p className="description font-extralight">
                            Developed a fully responsive and visually appealing personal portfolio website to showcase my web development skills, projects, and experience. The site features a modern UI with smooth animations, interactive sections, and a dedicated contact form integrated with EmailJS for real-time messaging.

                        </p>
                        <div className="skillset flex gap-4 items-center w-52">
                            <img className='w-10 h-10' src="/Skills/react.svg" alt="" /><img className='w-10 h-10' src="/Skills/tailwind.svg" alt="" /><img className='w-10 h-10' src="/Skills/javascript.svg" alt="" /> <img className='w-10 h-10' src="/Skills/gsap.svg" alt="" />
                            <img className="w-10 " src="/framer-motion.svg" alt="" /> <img className="w-10" src="/Skills/email-js.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
}