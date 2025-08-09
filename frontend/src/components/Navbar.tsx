import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div
      className="bg-gray-800 
    text-white py-2 px-10 flex 
    justify-between items-center 
    mt-5
    fixed w-full rounded-full"
    >
      <div className="">
        <h1 className="text-2xl font-bold cursor-pointer">
          🎥Zineple
          <span className="text-red-600">X</span>
        </h1>
      </div>
      <div className="">
        <ul className="flex space-x-4 text-xl">
          <li className="hover:text-emerald-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-emerald-300">
            <Link href="/movies">Movies</Link>
          </li>
          <li className="hover:text-emerald-300">
            <Link href="/drama">Drama</Link>
          </li>
          <li className="hover:text-emerald-300">
            <Link href="/anime">Anime</Link>
          </li>
          <li className="hover:text-emerald-300">
            <Link href="/kids">Kids</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex text-xl items-center gap-2">
          <li className="hover:text-emerald-300">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white rounded-full py-1 px-2"
            />
          </li>
          <li className="hover:text-emerald-300">
            <button className="bg-gray-700 text-white rounded-full p-2">
              <FaUser size={16} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
