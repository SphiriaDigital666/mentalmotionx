'use client';

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function Section4() {
  return (
    <AnimatedSection className="my-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left: Image with colored background */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-md h-[420px] sm:h-[500px] rounded-3xl flex items-center justify-center overflow-hidden">
            <Image
              src="/Section4/section4.png"
              alt="Phone App Preview"
              width={500}
              height={600}
              className="object-contain w-auto h-[90%] drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
        {/* Right: Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-6 order-2 lg:order-2 text-white"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-2">
          Workouts That Fit You. Meals That Fuel You.
          </h2>
          <p className="text-white/80 mb-6 max-w-lg">
          Training and meal ideas built around your lifestyle, designed to help you look good, feel great, and keep crushing it in and out of the gym.
          </p>
          {/* Progress Bar */}
         
          <button 
            onClick={() => window.open('https://mental-motion-x.exercise.com/a/checkout/?coupon=&id=58042&referer=false&rfsn=&type=Fbm%3A%3APackage&utm_campaign=', '_blank')}
            className="mt-2 px-7 py-2 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition flex items-center gap-2"
          >
            Join Now <span aria-hidden>→</span>
          </button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
} 