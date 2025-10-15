'use client';

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

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
        <div className="relative w-full lg:w-1/2 order-2 lg:order-1 z-10 flex items-end justify-center">
          <div className="relative w-full h-full flex items-end justify-center">
            <Image
              src="/Section2/CalUpdate.png"
              alt="Mobile App Preview"
              width={300}
              height={450}
              className="w-3/4 h-auto object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
        {/* Right: Content as */}
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
              <FontAwesomeIcon icon={faApple} className="w-6 h-6" />
              App Store
            </button>
            <button 
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mentalmotionx.app.own&pcampaignid=web_share', '_blank')}
              className="bg-white text-black font-semibold rounded-full px-6 py-3 flex items-center justify-center gap-2 shadow hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon icon={faGooglePlay} className="w-6 h-6" />
              Play Store
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 