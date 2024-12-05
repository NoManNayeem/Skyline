import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Welcome to <span className="text-blue-500">Skyline</span>
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Experience seamless design and development with our cutting-edge solutions that
            empower your vision and scale your business.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 px-4">
          <img
            src="https://images.unsplash.com/photo-1518274449443-895ba8e1ce03?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Skyline Illustration"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
