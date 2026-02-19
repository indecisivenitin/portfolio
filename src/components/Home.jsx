import React, { useEffect } from 'react'
import gsap from "gsap"
import Navbar from './Navbar'
import About from './About';


const Home = () => {
    useEffect(() => {
        gsap.to(".block1", {
            rotate: 135,
            duration: 4,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
        });

        gsap.to(".block2", {
            rotate: -135,
            duration: 4,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
        });
    }, []);
    return (
        <>
        <div className='w-full min-h-screen bg-black z-50'>
            <div className="gooey flex gap-10">
                <div className='block1 bg-[#27dfb3] w-[20%] sm:w-[15%] md:w-[10%] h-[40%] sm:h-[50%] md:h-[60%] absolute blur-[100px] sm:blur-[150px] md:blur-[200px] z-0 rounded-4xl right-[10%] sm:right-[20%] md:right-[30%] -top-[40%] sm:-top-[50%] md:-top-[58%]'></div>
                <div className='block2 bg-[#27dfb3] w-[20%] sm:w-[15%] md:w-[10%] h-[40%] sm:h-[50%] md:h-[60%] absolute blur-[100px] sm:blur-[150px] md:blur-[200px] rounded-4xl z-0 left-[5%] sm:left-[15%] md:left-[25%] -top-[30%] sm:-top-[38%] md:-top-[45%]'></div>
            </div>
            <div className="home relative z-40">
                <Navbar />
                <main className='px-4 sm:px-8 md:px-0 relative md:absolute left-0 md:left-[32%] top-auto md:top-60 pt-12 md:pt-0 lg:mt-[-60px]'>
                    <h1 className='text-2xl sm:text-4xl md:text-6xl text-white font-neueMachinia leading-tight'>I focus on the <span className='text-[#27dfb3]'>skills</span></h1>
                    <h1 className='text-2xl sm:text-4xl md:text-6xl text-white font-neueMachinia leading-tight'>I know best —</h1>
                    <h1 className='text-2xl sm:text-4xl md:text-6xl text-white font-neueMachinia leading-tight'>creating <span className='text-[#7b2ff7]'>fast</span>, <span className='text-[#ff6f91]'>modern</span>, and</h1>
                    <h1 className='mb-6 sm:mb-8'><span className='text-[#f5b82e] text-2xl sm:text-4xl md:text-6xl mr-2 sm:mr-4 md:mr-8 font-neueMachinia leading-tight block sm:inline'>user-friendly</span><span className='font-fontspring text-2xl sm:text-4xl md:text-6xl text-white font-extralight leading-tight'>Web applications.</span></h1>
                    <div><a href="#Projects"><button className="btn bg-[#27dfb3] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-lg md:text-2xl font-helveticaDisplay rounded-md mt-6 sm:mt-12 md:ml-40 cursor-pointer hover:font-semibold hover:scale-105">Check My Projects → See the Impact</button></a></div>

                    <div className="stats  flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 text-white mt-12 md:mt-28">
                        <div className='flex flex-col justify-center gap-2 sm:gap-3 mr-0 sm:mr-4'>
                            <h1 className='text-xl sm:text-2xl md:text-3xl'>6+ months</h1>
                            <h3 className='font-neueMachinia text-sm md:text-base -ml-0 md:-ml-4'>Frontend Mentor Practice</h3>
                        </div>
                        <div className='flex flex-col justify-center gap-2 sm:gap-3 mr-0 sm:mr-4'>
                            <h1 className='text-xl sm:text-2xl md:text-3xl'>3+ Projects</h1>
                            <h3 className='font-neueMachinia text-sm md:text-base ml-0 md:ml-2'>Built & Deployed</h3>
                        </div>
                        <div className='flex flex-col justify-center gap-2 sm:gap-3 mr-0 sm:mr-4'>
                            <h1 className='text-xl sm:text-2xl md:text-3xl'>Always Learning</h1>
                            <h3 className='font-neueMachinia text-sm md:text-base ml-0 md:ml-6'>Web Dev Enthusiast</h3>
                        </div>
                    </div>

                </main>
                <div className="mini-text text-white absolute font-extralight hidden md:block w-80 right-48 top-135">
                    <p>Get ready to explore my <span className='bg-[#27dfb3] text-black font-light'>..journey as a frontend developer..</span>,
                        where I turn designs into clean, responsive websites
                        and build projects that make an impact.</p>
                </div>

            </div>

        </div>
         <About />

         </>
    )
}

export default Home