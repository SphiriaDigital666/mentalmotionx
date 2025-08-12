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
              src="/Section4/phone.png"
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
            Personalized<br />Fitness & Meal<br />Suggestions
          </h2>
          <p className="text-white/80 mb-6 max-w-lg">
            Receive smart fitness analytics and customized workout plans, ensuring your exercises and meals align perfectly with your goals.
          </p>
          {/* Progress Bar */}
          <div className="w-full max-w-xs mb-4">
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-2 bg-white rounded-full" style={{ width: '72%' }} />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-lg">72.1%</span>
              <span className="flex items-center gap-1 text-white/70 text-sm">
                <span className="text-xl">🤖</span> LLM SCALE
              </span>
            </div>
          </div>
          <button className="mt-2 px-7 py-2 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition flex items-center gap-2">
            Join Now <span aria-hidden>→</span>
          </button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
} 