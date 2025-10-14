'use client';

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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span>App Store</span>
            </button>
            <button 
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mentalmotionx.app.own&pcampaignid=web_share', '_blank')}
              className="bg-white text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.24-.84-.76-.84-1.35zm10.84-8.5L3.84 2.15c.16-.08.34-.15.54-.15.24 0 .48.08.68.23l11.42 6.58-3.64 3.19zm4.16 2.44l-3.64 3.19 3.64 3.19 3.29-1.89c.4-.23.64-.66.64-1.13 0-.47-.24-.9-.64-1.13l-3.29-1.89v-.34zm-7.5-7.94l10.79 6.21-3.64 3.19-7.15-9.4z"/>
              </svg>
              <span>Play Store</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9; 