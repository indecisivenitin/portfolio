import React, { useEffect, useState } from 'react'
import gsap from "gsap"
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from "react-icons/fi";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  useEffect(() => {
    gsap.to(".projects",
      {
        x: -10,
        duration: 0.5,
        yoyo: true,
        repeat: Infinity
      },
      {
        x: 10,
        duration: 0.5,
        yoyo: true,
        repeat: Infinity,
        ease: "elastic.out(2,1)"
      });
  }, []);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dqi4t7q",        // Service ID
        "template_39dj4oi",       // Correct Template ID
        e.target,
        "_UI9XlGuj6G2FA_-1"       // Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🎉", {
            position: "top-right",
            autoClose: 3000,
          });
          e.target.reset();
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`, {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  const [contactFormOpen, setContactFormOpen] = useState(false)
  const openContactForm = () => setContactFormOpen(true)
  const closeContactForm = () => setContactFormOpen(false)

  return (
    <motion.div>
      <nav className='bg-transparent flex justify-between items-center px-16  text-[#E5E5E5] mt-10'>
        <div className="logo text-3xl font-helveticaDisplay">
          <span className='flex text-[#27dfb3] gap-1 font-helveticaDisplay items-center'><img className='w-10 h-10' src="/logo.svg" alt="" />Nitin</span>
        </div>
        <div className="links flex justify-between font-neueMachinia gap-10 text-lg items-center">
          <h2 className='hover:font-bold hover:text-xl hover:text-amber-200'><a href="#">Home</a></h2>
          <h2 className='hover:font-bold hover:text-xl hover:text-amber-200'><a href="#About">About</a></h2>
          <h2 className='hover:font-bold hover:text-xl hover:text-amber-200'><a href="#Skills">Skills</a></h2>
          <h2 className='text-orange-700 projects font-bold text-2xl'><a href="#Projects">Projects</a></h2>
          <button onClick={openContactForm} className='bg-[#27dfb3] px-2 py-2 rounded-md cursor-pointer hover:bg-[#27dfc1] hover:font-bold hover:scale-105 text-black'>Hire Me</button>
        </div>
      </nav>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 99999 }}  
      />

      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 w-full'>

            <motion.div
              initial={{ sclae: 0.8, opacity: 0, y: 30 }}
              animate={{ sclae: 1, opacity: 1, y: 0 }}
              exit={{ sclae: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8
              }}
              className="bg-[#27dfb3] dark:bg-zinc-900 rounded-xl shadow-xl w-2xl  px-10 py-10">

              <div className='flex justify-between items-center mb-6 '>
                <h1 className='text-3xl font-semibold text-[#27dfb3]'>Get in touch</h1>
                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold cursor-pointer" />
                </button>
              </div>
              <form
                onSubmit={sendEmail}
                className="flex flex-col gap-6 text-gray-300">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mn-1">
                    <span className="text-xl">Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#27dfb3] focus:border-[#27dfb3]" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mn-1">
                    <span className="text-xl">Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#27dfb3] focus:border-[#27dfb3]" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mn-1">
                    <span className="text-xl">Message</span>
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#27dfb3] focus:border-[#27dfb3]" />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-zinc-800 w-full px-4 py-2 bg-[#27dfb3] hover:bg-[#27dbf9] transition-all duration-300 rounded-lg shadow-sm hover:shadow-sm hover:shadow-[#27dbf3]">
                  Send Message
                </motion.button>
              </form>
            </motion.div>

          </motion.div>
        )
        }
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar