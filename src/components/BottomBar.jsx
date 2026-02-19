import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from "react-icons/fi";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { createPortal } from "react-dom";


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
      <div className='z-1000 w-60 h-12 lg:w-96 md:w-72 lg:h-18 md:h-14 lg:absolute lg:left-10 lg:bottom-[10px] bg-zinc-900/80 backdrop-blur-md  rounded-xl flex justify-around items-center font-neueMachinia text-zinc-300'>
        <a href=""><button className=' bg-zinc-900 hover:bg-zinc-600 px-3 py-2 rounded-xl border-[1px] border-white/60 cursor-pointer'>Home</button></a>
        <a href="#Projects"><button className='bg-zinc-900  hover:bg-zinc-600 px-3 py-2 rounded-xl border-[1px] border-white/60 cursor-pointer'>Projects</button></a>
        <button onClick={openContactForm} className='bg-[#27dfb3] hover:bg-[#27dfd3] px-3 py-2 rounded-xl border-[1px] border-white/60 text-black cursor-pointer'>Contact</button>
      </div>

      {contactFormOpen &&
  createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center 
                 bg-black/70 backdrop-blur-xl px-4"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        className="
          w-full 
          max-w-md 
          sm:max-w-lg 
          md:max-w-xl 
          lg:max-w-2xl
          bg-zinc-900/80 
          backdrop-blur-2xl 
          border border-white/10
          rounded-3xl 
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          p-6 sm:p-8 md:p-10
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#27dfb3]">
            Get in touch
          </h2>

          <button
            onClick={closeContactForm}
            className="text-gray-400 hover:text-white text-xl transition"
          >
            <FiX />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={sendEmail} className="flex flex-col gap-5">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="
              w-full px-4 py-3
              bg-white/5
              backdrop-blur-md
              border border-white/10
              rounded-xl
              text-gray-200
              placeholder:text-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-[#27dfb3]
              transition
            "
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="
              w-full px-4 py-3
              bg-white/5
              backdrop-blur-md
              border border-white/10
              rounded-xl
              text-gray-200
              placeholder:text-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-[#27dfb3]
              transition
            "
          />

          {/* Message */}
          <textarea
            rows="4"
            name="message"
            placeholder="How can I help you?"
            required
            className="
              w-full px-4 py-3
              bg-white/5
              backdrop-blur-md
              border border-white/10
              rounded-xl
              text-gray-200
              placeholder:text-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-[#27dfb3]
              resize-none
              transition
            "
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="
              w-full py-3
              bg-[#27dfb3]
              text-black
              font-semibold
              rounded-xl
              hover:bg-[#27dfd3]
              transition
              shadow-lg
              hover:shadow-[0_0_20px_#27dfb3]
            "
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>,
    document.body
  )
}


    </>

  )
}

export default BottomBar
