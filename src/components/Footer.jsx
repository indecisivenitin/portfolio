import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full mt-4 bg-black text-gray-300 py-12 px-8 border-[1px]  border-white/70 rounded-2xl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        

        <div>
          <h2 className="text-2xl font-semibold text-[#27dfb3]">Get in Touch</h2>
          <p className="mt-4 text-base leading-relaxed">
            <span>Feel free to reach out anytime. I’d love to connect and collaborate.</span>
          </p>
          
          <div className="mt-6 space-y-3 text-lg">
            <p className="text-[#27dfb3]">
               Email:{" "}
              <a href="mailto:yourname@gmail.com" className="text-white/60 hover:text-[#27dfb3] ">
                nitinydv6346@gmail.com
              </a>
            </p>
            <p className="text-[#27dfb3]">
              Phone:{" "}
              <a href="tel:+919588091139" className=" text-white/60 hover:text-[#27dfb3] ">
                +91 9588091139
              </a>
            </p>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            © {new Date().getFullYear()} Nitin. All rights reserved.
          </p>
        </div>

       
        <div className="flex flex-col items-start md:items-end">
          <h2 className="text-2xl font-semibold text-[#27dbf3]">Follow Me</h2>
          <p className="mt-4 text-base leading-relaxed">
            <span>Thanks for stopping by! Connect with me on socials.</span>
          </p>
          
          <div className="flex space-x-6 mt-6">
            <a href="https://github.com/indecisivenitin" target="_blank" >
              <FaGithub className="text-3xl hover:text-white transition-colors duration-200" />
            </a>
            <a href="https://www.instagram.com/indecisive_nitin/" target="_blank" >
              <FaInstagram className="text-3xl hover:text-pink-500 transition-colors duration-200" />
            </a>
            <a href="https://x.com/inde_nitin" target="_blank" >
              <FaTwitter className="text-3xl hover:text-sky-500 transition-colors duration-200" />
            </a>
            <a href="https://www.frontendmentor.io/profile/indecisivenitin" target="_blank">
              <SiFrontendmentor className="text-3xl hover:text-purple-400 transition-colors duration-200" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
