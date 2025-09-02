import React from 'react'
import FooterLogo from '../../assets/footerLogo.png';
import {
  FaFacebook, 
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa';

import natureVid from '../../assets/footerVid.mp4';
import { Link } from 'react-router-dom';

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Best Places", link: "/best-places" }, 
  { title: "Blogs", link: "/blogs" },
];

const Footer = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      {/* Background Video */}
      <video
        src={natureVid}
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full w-full object-cover z-[-1]" loading='lazy'
      ></video>

      <div className="container">
        {/* Footer Main Box */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl mr-10 ml-10 overflow-hidden">
          
          {/* Top Footer Grid */}
          <div className="grid md:grid-cols-3 py-10 px-10 gap-10">
            
            {/* Column 1: Logo + Info */}
            <div>
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="Logo" className="max-h-[60px]" />
              </h1>
              <p className="text-sm mt-2">
                Your journey begins here. Explore, discover, and create stories 
                that last a lifetime with every trip you take.
              </p>

              <div className="flex items-center gap-3 mt-3">
                <FaLocationArrow />
                <p>Varanasi, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+123 456 789</p>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <a href="#"><FaInstagram className="text-3xl" /></a>
                <a href="#"><FaFacebook className="text-3xl" /></a>
                <a href="#"><FaLinkedin className="text-3xl" /></a>
              </div>
            </div>

            {/* Column 2: Important Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Important Links</h1>
              <ul>
                {FooterLinks.map(({ title, link }, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-[#3c5c7c] space-x-1 text-gray-700"
                  >
                    <Link
                      to={link}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <span>&#11162;</span>
                      <span>{title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Newsletter */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Newsletter</h1>
              <p className="text-sm mb-3">Subscribe to get the latest travel updates.</p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-lg border border-gray-400 mb-3"
              />
              <button className="bg-[#3c5c7c] text-white px-4 py-2 rounded-lg w-full hover:bg-[#2a4661] duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="text-center py-4 border-t border-gray-300/50 bg-[#3c5cdc] text-white">
            © 2024 All rights reserved || Made with ❤️ by SAUMYA
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
