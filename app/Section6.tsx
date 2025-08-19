'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jake Lawson',
    country: 'USA',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: '/section6/tran1.png',
  },
  {
    name: 'Aiden Cooper',
    country: 'CANDA',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: '/section6/tran2.png',
  },
  {
    name: 'Jone Davidson',
    country: 'ENGLAND',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: '/section6/tran3.png',
  },
  {
    name: 'Caleb Brooks',
    country: 'AUSTRALIA',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: '/section6/tran4.png',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: 'spring' as const, damping: 16, stiffness: 120 },
  }),
};

const Section6 = () => {
  const [imageIndices, setImageIndices] = useState([0, 0, 0, 0]); // Separate index for each card
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false })
  ]);

  const nextImage = (cardIndex: number) => {
    setImageIndices(prev => {
      const newIndices = [...prev];
      newIndices[cardIndex] = (newIndices[cardIndex] + 1) % testimonials.length;
      return newIndices;
    });
  };

  const prevImage = (cardIndex: number) => {
    setImageIndices(prev => {
      const newIndices = [...prev];
      newIndices[cardIndex] = (newIndices[cardIndex] - 1 + testimonials.length) % testimonials.length;
      return newIndices;
    });
  };

  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#0B2230] rounded-3xl p-8 sm:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Built to produce real, lasting results
        </h2>
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-2xl flex overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div className="p-8 w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{testimonial.country}</p>
                <p className="text-gray-300 text-sm">
                  {testimonial.description}
                </p>
              </div>
              <div className="w-1/2 relative">
                {/* Image Carousel Navigation Buttons */}
                <button
                  onClick={() => prevImage(index)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
                  aria-label="Previous image"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <button
                  onClick={() => nextImage(index)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
                  aria-label="Next image"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Image Display */}
                <Image
                  src={testimonials[imageIndices[index]].image}
                  alt={`Transformation of ${testimonials[imageIndices[index]].name}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
         {/* Mobile Carousel */}
        <div className="lg:hidden overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className="flex-shrink-0 w-full min-w-0"
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      custom={index}
                    >
                         <div className="bg-black rounded-2xl flex flex-col overflow-hidden mx-2">
                            <div className="w-full h-64 relative">
                                {/* Mobile Image Carousel Navigation Buttons */}
                                <button
                                  onClick={() => prevImage(index)}
                                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
                                  aria-label="Previous image"
                                >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </button>
                                
                                <button
                                  onClick={() => nextImage(index)}
                                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
                                  aria-label="Next image"
                                >
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </button>

                                <Image
                                    src={testimonials[imageIndices[index]].image}
                                    alt={`Transformation of ${testimonials[imageIndices[index]].name}`}
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6 w-full flex flex-col justify-center">
                                <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                                <p className="text-sm text-gray-400 mb-4">{testimonial.country}</p>
                                <p className="text-gray-300 text-sm">
                                {testimonial.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Section6; 