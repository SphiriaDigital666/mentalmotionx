'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes! Try MMX free for 7 days. If it doesn’t feel right, cancel anytime.",
    bulletPoints: [
    ]
  },
  {
    question: "I’m a beginner, is this app suitable for me?",
    answer: "Absolutely. MMX was built for every level from total gym virgins to seasoned lifters. You’ll get step-by-step guidance, demo videos, and structured workouts so you actually know what to do when you walk in. No guessing, just results.",
    bulletPoints: [
    ]
  },
  {
    question: "Are new workouts or guides added over time?",
    answer: "Always. MMX drops fresh programs, challenges, and nutrition guides regularly so you never hit a plateau. We’re constantly levelling up the content, think new training splits, recipes, and mindset modules dropping throughout the year.",
    bulletPoints: [
    ]
  },
  {
    question: "Can I use the app with my Apple Watch?",
    answer: "Not yet, but it’s on our radar. We’re building full Apple Watch + wearable integration so you’ll be able to track sessions, heart rate, and calories right from your wrist soon.",
    bulletPoints: [
    ]
  },
  {
    question: "Can I access my workouts or meals offline?",
    answer: "Not right now. You’ll need an internet connection to load workouts and meals but once they’re open, you can screenshot or save what you need before training if you’re heading somewhere with dodgy Wi-Fi.",
    bulletPoints: [
    ]
  },
  {
    question: "Do I need a gym membership?",
    answer: "You can train anywhere, most MMX programs are gym-based, but we’ve got home-friendly options too."
  },
  {
    question: "Can I get premium or one-on-one coaching?",
    answer: "Yes. Our premium coaching gives you personalised feedback, weekly adjustments, and a coach who actually keeps you on track + more.Spots are limited each month, so if you’re ready to go all-in, hit “Premium Coaching Enquiry."
  }
];

const Section8 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 14, stiffness: 120 } },
  };

  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Got any questions before we dive in?
        </h2>
        <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
                key={index} 
                className="bg-[#11212E] rounded-2xl overflow-hidden"
                variants={itemVariants}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <div className="w-8 h-8 rounded-full bg-[#4A8DAF] flex items-center justify-center flex-shrink-0">
                  <motion.span
                    className="text-2xl font-light"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.section
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-300">
                      <p className="mb-3">{faq.answer}</p>
                      {faq.bulletPoints && (
                        <ul className="space-y-2">
                          {faq.bulletPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <span className="text-[#4A8DAF] mr-2 mt-1">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Section8;
