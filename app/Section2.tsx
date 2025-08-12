'use client';

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function Section2() {
  const text = "powerful personal".split("");

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
              src="/Section2/app.png"
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
            Transform every aspect of your training with our{' '}
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
            <br />fitness dashboard tool.
          </h2>
          <button className="mt-4 bg-white text-black font-semibold rounded-full px-7 py-2 flex items-center gap-2 shadow hover:bg-gray-200 transition">
            Download The App
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
} 