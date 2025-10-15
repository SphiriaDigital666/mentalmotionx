'use client';

import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons/faGooglePlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            Well, what are you waiting for? Let's download the app to experience fitness 4.0.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => window.open('https://apps.apple.com/lk/app/mental-motion-x/id6746492199', '_blank')}
              className="bg-white text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faApple} className="w-6 h-6" />
              <span>App Store</span>
            </button>
            <button 
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mentalmotionx.app.own&pcampaignid=web_share', '_blank')}
              className="bg-white text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faGooglePlay} className="w-6 h-6" />
              <span>Play Store</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9; 