import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from "react-icons/fi";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const BottomBar = () => {
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
    <>
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
        style={{ zIndex: 99999 }}   // 🔹 Keep it above all layers
      />
      <div className='z-50 w-96 h-18 bg-zinc-900/80 backdrop-blur-md  rounded-xl flex justify-around items-center font-neueMachinia text-zinc-300'>
        <a href=""><button className='bg-zinc-900 hover:bg-zinc-600 px-3 py-2 rounded-xl border-[1px] border-white/60 cursor-pointer'>Home</button></a>
        <a href="#Projects"><button className='bg-zinc-900  hover:bg-zinc-600 px-3 py-2 rounded-xl border-[1px] border-white/60 cursor-pointer'>Projects</button></a>
        <button onClick={openContactForm} className='bg-[#27dfb3] hover:bg-[#27dfd3] px-3 py-2 rounded-xl border-[1px] border-white/60 text-black cursor-pointer'>Contact</button>
      </div>
      {contactFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4 w-full'>

          <div className="bg-[#27dfb3] dark:bg-zinc-900 rounded-xl shadow-xl w-2xl  px-10 py-10">

            <div className='flex justify-between items-center mb-6 '>
              <h1 className='text-2xl font-semibold text-gray-300'>Get in touch</h1>
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

          </div>

        </motion.div>
      )
      }
    </>

  )
}

export default BottomBar
