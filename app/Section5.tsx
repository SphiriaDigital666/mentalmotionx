'use client';

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function Section5() {
  const purchaseUrl = "https://mental-motion-x.exercise.com/a//checkout?coupon=&id=58042&referer=false&rfsn=&type=Fbm%3A%3APackage&utm_campaign=";

  const handleCardClick = () => {
    window.open(purchaseUrl, '_blank');
  };

  const cards = [
    {
      label: "3 month",
      price: "$25.49",
      off:"(15% off)",
      sub: "$76.47 billed every 3 month",
      highlight: false,
    },
    {
      label: "Annual",
      price: "$20.99",
      off:"(30% off)",
      sub: "$251.92 billed annually",
      highlight: true,
    },
    // {
    //   label: "12 month",
    //   price: "$20.99",
    //   off:"(30% off)",
    //   sub: "$20.99 billed every Year",
    //   highlight: false,
    // },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 16, stiffness: 120 } },
  };

  return (
    <AnimatedSection className="w-full max-w-7xl mx-auto my-24 flex flex-col items-center justify-center px-4">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16">
        Join <span className="text-[#5494BC]">MentalMotionX</span> <span className="text-white">today</span>
      </h2>
      {/* Pricing Cards */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 w-full justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            variants={cardVariants}
            onClick={handleCardClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative bg-[#0B2230] rounded-2xl px-10 py-10 w-full max-w-md flex flex-col gap-4 text-left text-white shadow-lg text-lg cursor-pointer ${card.highlight ? 'border-2 border-[#5494BC]' : ''}`}
          >
            <span className="text-base text-white/70 mb-1">{card.label}</span>
            <span className="text-3xl font-bold">{card.price} <span className="text-xl font-normal">/mo</span><span className="text-base text-[#009CFF] ml-2">{card.off}</span></span>
            <span className="text-base text-[#5494BC]">{card.sub}</span>
            <button 
              onClick={handleCardClick}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#132B3A] text-white hover:bg-[#5494BC] transition"
            >
              <span className="text-2xl">→</span>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
} 