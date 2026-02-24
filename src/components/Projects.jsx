import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const videosRef = useRef({});
  const containerRef = useRef(null);

  const projects = [
    {
      id: "chatify",
      title: "Chatify React App: Real-time full-stack chat application built with the MERN stack.",
      description: "Real-time full-stack chat application built with the MERN stack, featuring JWT authentication, Socket.io messaging, and cloud-based image uploads.",
      color: "#68d0ea",
      videoSrc: "/videos/chatify.mp4",
      link: "https://chat-app-v2-olive.vercel.app",
      skills: ["react", "tailwind", "node", "javascript", "express", "mongodb"]
    },

        {
      id: "devflow",
      title: "DevFlow AI : A full-stack AI-powered chat application",
      description: "DevFlow AI is a full-stack AI-powered chat application featuring secure authentication, multi-session chat management, and real-time streaming AI responses. The vision behind DevFlow is simple: reduce friction, eliminate repetitive debugging cycles, and empower developers to think clearly and ship faster.",
      color: "#51137F",
      videoSrc: "/videos/DevFlow AI.mp4",
      link: "https://dev-flow-ai-six.vercel.app/",
      skills: ["react", "tailwind", "node", "javascript", "mongodb","express","framer-motion"]
    },

    {
      id: "sundown",
      title: "Sundown Studio : A Design Agency Landing Page",
      description: "This project is a modern, interactive design agency landing page built with React. It leverages GSAP for smooth animations and Swiper.js for responsive, touch-friendly sliders, creating an engaging and dynamic user experience.",
      color: "#FF330A",
      videoSrc: "/videos/sundown-studios.mp4",
      link: "https://indecisivenitin.github.io/Web-project-/",
      skills: ["react", "tailwind", "node", "javascript", "gsap"]
    },
    {
      id: "soil",
      title: "Soil Fertility Predictor : ML-powered web app that instantly predicts soil fertility (0–100%) from 14 parameters and gives smart fertilizer recommendations.",
      description: "ML-powered web app that instantly predicts soil fertility (0–100%) from 14 parameters and gives smart fertilizer recommendations. Beautiful UI • Live gauge • PDF report • Test cases included. Built with Flask + Python, deployed on Render.",
      color: "#085720",
      videoSrc: "/videos/soil.mp4",
      link: "https://soil-fertility-predictor-ml-v3.onrender.com/",
      skills: ["flask", "ai", "node", "javascript"]
    },
    {
      id: "ochi",
      title: "OCHI.DESIGN: Immersive Presentation Design Agency",
      description: "OCHI.DESIGN is a dynamic and interactive landing page built with React.js, GSAP, Swiper.js, and Locomotive Scroll. The project showcases smooth animations, responsive sliders, and immersive scrolling effects, creating a visually compelling and engaging user experience.",
      color: "#CDEA68",
      videoSrc: "/videos/ochi-design.mp4",
      link: "https://indecisivenitin.github.io/OCHI.DESIGN/",
      skills: ["react", "tailwind", "node", "javascript", "gsap"]
    },
    {
      id: "todesktop",
      title: "ToDesktop",
      description: "This project is a responsive landing page built using Tailwind CSS, showcasing a clean and modern design. It demonstrates the utility-first approach of Tailwind CSS, emphasizing efficient styling and layout techniques.",
      color: "#4355F7",
      videoSrc: "/videos/ToDesktop.mp4",
      link: "https://indecisivenitin.github.io/TailwindCSS-webpage/",
      skills: ["react", "tailwind", "javascript"]
    },
    {
      id: "portfolio",
      title: "Portfolio: Personal Portfolio Website",
      description: "Developed a fully responsive and visually appealing personal portfolio website to showcase web development skills, projects, and experience. Features a modern UI with smooth animations, interactive sections, and a dedicated contact form.",
      color: "#4355F7",
      videoSrc: "/videos/portfolio.mp4",
      link: "https://github.com/",
      skills: ["react", "tailwind", "javascript", "gsap", "framer-motion", "email-js"]
    }
  ];

  useEffect(() => {
    const triggers = [];

    projects.forEach((project) => {
      if (videosRef.current[project.id]?.elem) {
        const trigger = ScrollTrigger.create({
          trigger: videosRef.current[project.id].elem,
          onEnter: () => {
            if (videosRef.current[project.id]?.video) {
              videosRef.current[project.id].video.play();
            }
          },
          onLeave: () => {
            if (videosRef.current[project.id]?.video) {
              videosRef.current[project.id].video.pause();
            }
          },
          onEnterBack: () => {
            if (videosRef.current[project.id]?.video) {
              videosRef.current[project.id].video.play();
            }
          },
          onLeaveBack: () => {
            if (videosRef.current[project.id]?.video) {
              videosRef.current[project.id].video.pause();
            }
          },
        });
        triggers.push(trigger);
      }
    });

    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, [projects]);

  useEffect(() => {
    gsap.to(".clickme", {
      y: 10,
      opacity: 0.2,
      delay: 0.1,
      duration: 1,
      yoyo: true,
      ease: "power1.inOut",
      repeat: -1
    });
  }, []);

  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div id="Projects" className="w-full min-h-screen bg-black text-white -mt-40 relative px-4 sm:px-6 md:px-10 py-8 md:py-0">
        <div className="mb-8 md:mb-10">
          <span className="text-2xl sm:text-3xl md:text-4xl text-[#27dfb3] font-helveticaDisplay">
            Projects I've Built
            <h3 className="clickme mt-2 sm:mt-4 text-sm sm:text-base md:text-xl font-neueMachinia text-gray-300">
              "Click on the Projects to visit live website. videos might take few seconds to load!"
            </h3>
          </span>
        </div>

        <div ref={containerRef} className="project-div w-full flex flex-col gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) {
                  videosRef.current[project.id] = { elem: el, video: el.querySelector("video") };
                }
              }}
              onClick={() => handleProjectClick(project.link)}
              className="projects min-h-32 sm:min-h-40 md:min-h-auto px-4 sm:px-6 md:px-10 py-4 sm:py-6 border-white/60 border-2 rounded-xl flex flex-col justify-end gap-3 sm:gap-4 cursor-pointer hover:border-[#27dfb3] transition-colors"
            >
              <div className="w-full h-32 sm:h-40 md:h-64 rounded-lg overflow-hidden mb-3 sm:mb-4">
                <video
                  src={project.videoSrc}
                  muted
                  loop
                  className="w-[70%] h-auto object-cover ml-[17%]"
                />
              </div>

              <h2 className="name text-lg sm:text-xl md:text-2xl" style={{ color: project.color }}>
                {project.title}
              </h2>
              <p className="description font-extralight text-sm sm:text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="skillset flex gap-2 sm:gap-3 items-center flex-wrap">
                {project.skills.map((skill, idx) => (
                  <img
                    key={idx}
                    className="w-8 sm:w-10 h-8 sm:h-10 object-contain"
                    src={`/Skills/${skill}.svg`}
                    alt={skill}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
