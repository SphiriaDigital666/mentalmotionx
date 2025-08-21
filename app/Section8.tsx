'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "I'm a beginner - is this program suitable for me?",
    answer: "A THRST app subscription gives you complete access to all features, including:",
    bulletPoints: [
      "Personalized workout and meal plans designed for your goals.",
      "Built-in shopping list for easy meal prep.",
      "Exercise tracking - quickly log and review your progress for each workout.",
      "Progress monitoring to stay on top of your fitness journey."
    ]
  },
  {
    question: "I'm a beginner, can I start this app?",
    answer: "The app is designed for users of every fitness level.",
    bulletPoints: [
      "Suitable for beginners, intermediates, and advanced athletes alike.",
      "Accessible to anyone, regardless of experience."
    ]
  },
  {
    question: "How do you personalize my workouts and meals?",
    answer: "When you first log in to THRST, you'll be asked to provide your personal details along with your fitness preferences, such as workout goals and dietary choices.",
    bulletPoints: [
      "For workouts, you can choose from a variety of training splits including: Full Body, High Volume, Strength, Arm & Leg, Chest & Shoulder, Back & Arm, Shoulder & Arm, Chest & Leg, Upper/Lower, Anterior/Posterior, and Push/Pull/Legs or Push/Pull/Legs/Arms/Chest. Training schedules range from 3 to 5 days per week.",
      "You'll also set your activity level and personal goal—whether you want to lose, maintain, or gain weight.",
      "On the nutrition side, available dietary preferences include vegan, vegetarian, pescatarian, or standard (no restrictions). To personalize your plan further, you can choose how many meals you'd like per day—anywhere from 3 to 6 meals."
    ]
  },
  {
    question: "How can I get advice regarding my plan or progress?",
    answer: "THRST does not include one-on-one support for workouts or nutrition.",
    bulletPoints: [
      "For personalized guidance, we recommend consulting with a qualified personal trainer or nutritionist."
    ]
  },
  {
    question: "Are there previous guides included?",
    answer: "No, the guides previously released by Mike on AFLETE are not part of the THRST app."
  },
  {
    question: "Can I access the app on my Apple Watch?",
    answer: "Currently, THRST does not support Apple Watch integration."
  },
  {
    question: "Can I access my meal/workout plans offline?",
    answer: "Currently, this feature is not supported."
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
