import React, { useEffect } from 'react'
import gsap from "gsap"
import Navbar from './Navbar'
import About from './About';
import BottomBar from './BottomBar';

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
                <div className='block1 bg-[#27dfb3] w-[10%] h-[60%] absolute blur-[200px] z-0 rounded-4xl right-[30%] -top-[58%]'></div>
                <div className='block2 bg-[#27dfb3] w-[10%] h-[60%] absolute blur-[200px] rounded-4xl z-0 left-[25%] -top-[45%]'></div>
            </div>
            <div className="home relative z-40">
                <Navbar />
                <main className='absolute left-[32%] top-60'>
                    <h1 className='text-6xl text-white font-neueMachinia'>I focus on the <span className='text-[#27dfb3]'>skills</span></h1>
                    <h1 className='text-6xl text-white font-neueMachinia'>I know best —</h1>
                    <h1 className='text-6xl text-white font-neueMachinia'>creating <span className='text-[#7b2ff7]'>fast</span>, <span className='text-[#ff6f91]'>modern</span>, and </h1>
                    <h1 className='mb-8'><span className='text-[#f5b82e] text-6xl mr-8 font-neueMachinia'>user-friendly</span><span className='font-fontspring text-6xl text-white font-extralight'>Web applications.</span></h1>
                    <div><a href="#Projects"><button className="btn bg-[#27dfb3] px-4 py-3 text-2xl font-helveticaDisplay rounded-md mt-12 ml-40 cursor-pointer hover:font-semibold hover:scale-105">Check My Projects → See the Impact</button></a></div>


                    <div className="stats flex gap-10 text-white mt-28">
                        <div className='flex flex-col justify-center gap-3 mr-4'>
                            <h1 className='text-3xl'>6+ months</h1>
                            <h3 className='font-neueMachinia -ml-4'>Frontend Mentor Practice</h3>
                        </div>
                        <div className='flex flex-col justify-center gap-3 mr-4'>
                            <h1 className='text-3xl'>3+ Projects</h1>
                            <h3 className='font-neueMachinia ml-2'>Built & Deployed</h3>
                        </div>
                        <div className='flex flex-col justify-center gap-3 mr-4'>
                            <h1 className='text-3xl'>Always Learning</h1>
                            <h3 className='font-neueMachinia ml-6'>Web Dev Enthusiast</h3>
                        </div>
                    </div>

                </main>
                <div className="mini-text text-white absolute font-extralight w-80 right-48 top-135">
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