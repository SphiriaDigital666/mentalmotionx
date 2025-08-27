'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';
import image1 from '../public/section6/student1.jpeg';
import image2 from '../public/section6/student2.jpeg';
import image3 from '../public/section6/student3.jpeg';



const Section6 = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Built to produce real, lasting results
        </h2>
        
        <div className="flex items-center justify-center">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={image1} 
                alt='image1' 
                width={400} 
                height={400} 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={image2} 
                alt='image2' 
                width={400} 
                height={400} 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={image3} 
                alt='image3' 
                width={400} 
                height={400} 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
