import Image from 'next/image';
import React from 'react';

const Section9 = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#1C3D52] rounded-3xl   flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left side: Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/Section8/section8.png" // User specified this path
            alt="App Preview"
            width={600}
            height={600}
            className="rounded-2xl w-full h-auto"
          />
        </div>

        {/* Right side: Content */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Get Started Now, For Free!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Well, what do you waiting for? Let's download the app to experience fitness 4.0.
          </p>
          <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center lg:justify-start mx-auto lg:mx-0 gap-3 hover:bg-gray-800 transition-colors">
            <span>Download App</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section9; 