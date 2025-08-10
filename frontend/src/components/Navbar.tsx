import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-md text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold cursor-pointer great-vibes-regular">
            <Link href="/">
              🎥Zineple
              <span className="text-red-600">X</span>
            </Link>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex">
          <ul className="flex space-x-4 text-lg">
            <li className="hover:text-emerald-300 transition-colors duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-emerald-300 transition-colors duration-300">
              <Link href="/movies">Movies</Link>
            </li>
            <li className="hover:text-emerald-300 transition-colors duration-300">
              <Link href="/drama">Drama</Link>
            </li>
            <li className="hover:text-emerald-300 transition-colors duration-300">
              <Link href="/anime">Anime</Link>
            </li>
            <li className="hover:text-emerald-300 transition-colors duration-300">
              <Link href="/kids">Kids</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="hidden sm:block bg-gray-700 text-white rounded-full py-1 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
          <Link href="/profile" className="hover:text-emerald-300 transition-colors duration-300">
            <FaUser size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;