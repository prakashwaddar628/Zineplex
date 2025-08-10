import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo and Copyright Section */}
          <div className="text-center md:text-left flex-row flex items-center ">
            <h1 className="text-2xl font-bold mb-2 cursor-pointer text-white">
              <Link href="/">
                🎥Zineple
                <span className="text-red-600">X</span>
              </Link>
            </h1>
          </div>
            <p className="text-sm">© {currentYear} Zineplex. All rights reserved.</p>

          {/* Social Media Icons */}
          <div className="flex flex-row space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 px-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;