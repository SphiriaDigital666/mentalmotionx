'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden text-white p-0">
      {/* Hero Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Hero/Hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Large Logo Background */}
      {/* <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <Image
          src="/Hero/Union.png"
          alt="Background Logo"
          width={900}
          height={900}
          className="opacity-10 w-[60vw] max-w-3xl h-auto"
          aria-hidden
        />
      </div> */}

      {/* Navigation - centered logo */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 w-full z-10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
          {/* Left: Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden sm:flex flex-1 gap-8 text-base font-medium"
          >
            <a href="#guides" className="hover:text-blue-300 transition hover:scale-110 inline-block">Guides</a>
            <a href="#about" className="hover:text-blue-300 transition hover:scale-110 inline-block">About</a>
          </motion.div>
          {/* Center: Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 flex justify-center relative z-50"
          >
            <Image src="/Hero/logowithname.png" alt="MentalMotionX Logo" width={220} height={40} className="object-contain" />
          </motion.div>
          {/* Right: Join Now */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-end"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://mental-motion-x.exercise.com/a/checkout/?coupon=&id=58042&referer=false&rfsn=&type=Fbm%3A%3APackage&utm_campaign=', '_blank')}
              className="border border-white/70 rounded-full px-7 py-2 text-base font-semibold transition"
            >
              Join Now
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Content - Center */}
      <div className="relative w-full text-center z-10 px-4 sm:px-6 lg:px-8 uppercase">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow-lg mb-2 sm:mb-3"
        >
          The App That'll Get Your Head
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow-lg mb-4 sm:mb-6"
        >
          Right and Your Rig Tight
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto drop-shadow font-medium"
        >
          Builds Muscle, Mind, and a Bit of Mayhem
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://apps.apple.com/lk/app/mental-motion-x/id6746492199', '_blank')}
            className="bg-white text-black font-bold py-4 px-10 rounded-full text-lg shadow-2xl hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            App Store
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mentalmotionx.app.own&pcampaignid=web_share', '_blank')}
            className="border-2 border-white text-white font-bold py-4 px-10 rounded-full text-lg shadow-2xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.24-.84-.76-.84-1.35zm10.84-8.5L3.84 2.15c.16-.08.34-.15.54-.15.24 0 .48.08.68.23l11.42 6.58-3.64 3.19zm4.16 2.44l-3.64 3.19 3.64 3.19 3.29-1.89c.4-.23.64-.66.64-1.13 0-.47-.24-.9-.64-1.13l-3.29-1.89v-.34zm-7.5-7.94l10.79 6.21-3.64 3.19-7.15-9.4z"/>
            </svg>
            Play Store
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 
