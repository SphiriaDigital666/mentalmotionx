'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';
import image1 from '../public/section6/student1.jpeg';
import image2 from '../public/section6/student2.jpeg';
import image3 from '../public/section6/student3.jpeg';
import image4 from '../public/section6/student4.png';
import image5 from '../public/section6/student5.png';

const Section6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of all images
  const images = [
    { src: image1, alt: 'Student transformation 1' },
    { src: image2, alt: 'Student transformation 2' },
    { src: image3, alt: 'Student transformation 3' },
    { src: image4, alt: 'Student transformation 4' },
    { src: image5, alt: 'Student transformation 5' },
  ];

  const cardsToShow = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= images.length - cardsToShow + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - cardsToShow : prev - 1
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Built to produce real, lasting results
        </h2>

        <div className="relative flex items-center justify-center gap-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-black/50 hover:bg-black/70 hover:scale-110 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="flex gap-8 items-center justify-center overflow-hidden px-16">
            {visibleImages.map((image, index) => (
              <div
                key={currentIndex + index}
                className="relative rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-black/50 hover:bg-black/70 hover:scale-110 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            index <= images.length - cardsToShow && (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-3 rounded-full transition-all duration-500 ease-out ${
                  currentIndex === index ? 'bg-blue-500 w-8' : 'bg-gray-400 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
