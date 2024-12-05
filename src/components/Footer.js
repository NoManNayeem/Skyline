import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center px-4">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-300 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} <span className="font-bold">Skyline</span>. All rights reserved.
        </p>

        {/* Links Section */}
        <div className="text-xs flex justify-center gap-4">
          <a href="#privacy" className="hover:text-gray-400 transition duration-300">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-gray-400 transition duration-300">
            Terms of Service
          </a>
          <a href="#contact" className="hover:text-gray-400 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
