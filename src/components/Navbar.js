import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a href="#home" className="hover:text-blue-400">Skyline</a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <a href="#home" className="hover:text-gray-400 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-400 transition duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="hidden md:flex gap-4">
          <FaFacebook className="hover:text-blue-500 cursor-pointer transition duration-300" />
          <FaTwitter className="hover:text-blue-300 cursor-pointer transition duration-300" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer transition duration-300" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-blue-400 focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
