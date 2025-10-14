'use client';

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function Section2() {
  const text = "workouts".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 12, stiffness: 100 },
    },
  };

  return (
    <AnimatedSection className="my-10 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-[#20465A] rounded-3xl  overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-xl">
        {/* Left: Image (on large screens), below content on small screens */}
        <div className="relative w-full lg:w-1/2 order-2 lg:order-1 z-10">
          <div className="relative w-full">
            <Image
              src="/Section2/section2.png"
              alt="Mobile App Preview"
              width={400}
              height={600}
              className="w-full h-auto "
              priority
            />
          </div>
        </div>
        {/* Right: Content */}
        <div className="relative py-16 lg:py-28 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center order-1 lg:order-2 p-6 lg:p-12 text-white z-10">
          <button className="mb-6 px-5 py-1 border border-white/60 rounded-full text-sm font-medium bg-white/10 hover:bg-white/20 transition">Our Purpose</button>
          <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-center lg:text-left">
          MMX cuts through the nonsense - no moon rituals, no celery juice cleanses. Just {' '}
            <motion.span
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              className="bg-black/90 rounded-lg px-2  inline-block"
            >
              {text.map((char, index) => (
                <motion.span key={index} variants={childVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
            that work, guides that make sense, and coaching that keeps you smashing goals.
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button 
              onClick={() => window.open('https://apps.apple.com/lk/app/mental-motion-x/id6746492199', '_blank')}
              className="bg-white text-black font-semibold rounded-full px-6 py-3 flex items-center justify-center gap-2 shadow hover:bg-gray-200 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </button>
            <button 
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mentalmotionx.app.own&pcampaignid=web_share', '_blank')}
              className="bg-white text-black font-semibold rounded-full px-6 py-3 flex items-center justify-center gap-2 shadow hover:bg-gray-200 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.24-.84-.76-.84-1.35zm10.84-8.5L3.84 2.15c.16-.08.34-.15.54-.15.24 0 .48.08.68.23l11.42 6.58-3.64 3.19zm4.16 2.44l-3.64 3.19 3.64 3.19 3.29-1.89c.4-.23.64-.66.64-1.13 0-.47-.24-.9-.64-1.13l-3.29-1.89v-.34zm-7.5-7.94l10.79 6.21-3.64 3.19-7.15-9.4z"/>
              </svg>
              Play Store
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 