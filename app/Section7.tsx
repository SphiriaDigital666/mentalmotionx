'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Section7 = () => {
  return (
    <motion.section 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center h-[70vh] lg:h-[85vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/Section7/Section7.png')" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 w-full max-w-5xl mx-auto text-white px-4">
        {/* Container for the floating text */}
        <div className="relative h-56 sm:h-64 md:h-80 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
          <motion.h2 
            className="absolute top-[10%] left-[5%]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            Test<span className="text-[#5494BC]">.</span>
          </motion.h2>
          <motion.h2 
            className="absolute top-[50%] left-[10%] sm:left-[15%]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            Fitness
          </motion.h2>
          <motion.h2 
            className="absolute top-[20%] right-[5%]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            Your<span className="text-[#5494BC]">.</span>
          </motion.h2>
          <motion.h2 
            className="absolute top-[60%] right-[10%] sm:right-[15%]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          >
            Level<span className="text-[#5494BC]">.</span>
          </motion.h2>
        </div>

        <motion.p 
          className="mt-12 text-center text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          Our Fitness Assessment is the cornerstone of your personalized fitness experience.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Section7; 