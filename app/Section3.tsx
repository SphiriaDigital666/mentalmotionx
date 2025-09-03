'use client';

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Section3() {
  const [activeFilter, setActiveFilter] = useState("Gym Virgins");

  const filters = [
    "Gym Virgins",
    "Project Peach",
    "Fat Loass Formula",
    "Muscle Gain Series",
  ];

  const contentData = {
    "Gym Virgins": {
      title: "Gym Virgins",
      description: "Everyone starts somewhere and this is where you pop your fitness cherry. Gym Virgins is built for absolute beginners who want to learn the ropes without feeling lost. Simple workouts, easy-to-follow plans, and no complicated rubbish just solid results and a laugh along the way. Remember: if you ain't lifting, you ain't f*ing.",
      // stats: {
      //   users: "2.5K",
      //   accuracy: "98.5%"
      // }
    },
    "Project Peach": {
      title: "Project Peach",
      description: "This isn't just a booty program, it's a full-on glute mission. Project Peach is your go-to collection for building, lifting, and shaping that peach from every angle. Whether you're hitting hip thrusts, lunges, kickbacks or juicy tempo reps, these programs are designed to fire up your glutes and keep the rest of your body strong, balanced, and aesthetic. You'll find a mix of lower-body-focused sessions, smart upper body pairings, and all the activation and volume you need to make serious progress, whether you're just starting your glute journey or levelling up your curves.",
      // stats: {
      //   users: "3.2K",
      //   accuracy: "99.1%"
      // }
    },
    "Fat Loass Formula": {
      title: "Fat Loss Formula",
      description: "No fluff, no fads, just a smart proven approach to dropping body fat and holding onto lean muscle. Fat Loss Formula is your go-to group for gym-based and home-friendly programs built to get you lean, strong, and feeling sharp. Whether you're here to shred down, reset your routine, or finally see the definition you've been chasing, this is the blueprint. With a mix of strength training, conditioning, and cardio that actually works, you'll burn fat, boost energy, and train with intent — no starving, no endless treadmills, just real structure and serious results.",
      // stats: {
      //   users: "4.1K",
      //   accuracy: "99.3%"
      // }
    },
    "Muscle Gain Series": {
      title: "Muscle Gain Series",
      description: "The ultimate lineup for chasing size, strength, and that full, aesthetic rig. This collection pulls together all the heavy hitters from the hypertrophy crew. Chest days that slap, back sessions that build wings, and quad burners that sculpt your shape. Whether you're running a classic PPL split or targeting specific areas, every program in here is built to push volume, deliver pumps, and pack on muscle. No fluff. Just proper gains.",
      // stats: {
      //   users: "3.8K",
      //   accuracy: "99.0%"
      // }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 14, stiffness: 120 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <AnimatedSection className="my-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto p-8 sm:p-12">
        {/* Centered Heading and Filter Buttons at Top */}
        <div className="w-full flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8 text-white text-center">
            Get stuck into my personal training stash 15+ cheeky, no BS guides you won't find anywhere else.
          </h2>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {filters.map((label, i) => (
              <motion.button
                key={label}
                variants={buttonVariants}
                onClick={() => setActiveFilter(label)}
                className={
                  activeFilter === label
                    ? "px-6 py-2 rounded-full border border-blue-400 text-blue-200 bg-white/5 hover:bg-blue-400/20 transition"
                    : "px-6 py-2 rounded-full bg-black text-white font-semibold shadow hover:bg-gray-800 transition-colors"
                }
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        </div>
        {/* Two-column layout below */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Content */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-6"
            key={activeFilter}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{contentData[activeFilter as keyof typeof contentData].title}</h3>
            <p className="text-white/80 mb-6 max-w-lg">
              {contentData[activeFilter as keyof typeof contentData].description}
            </p>
            {/* <div className="flex gap-8 mb-6">
              <div className="flex items-center gap-2 text-white text-lg font-bold">
                <span className="text-2xl">🤖</span> {contentData[activeFilter as keyof typeof contentData].stats.users}<span className="text-yellow-400">K</span>
                <span className="block text-xs font-normal text-white/60 ml-2">AI LLM DATAS</span>
              </div>
              <div className="flex items-center gap-2 text-white text-lg font-bold">
                <span className="text-2xl">🤖</span> {contentData[activeFilter as keyof typeof contentData].stats.accuracy}<span className="text-yellow-400">%</span>
                <span className="block text-xs font-normal text-white/60 ml-2">AI ACCURACY</span>
              </div>
            </div> */}
            <button className="mt-2 px-7 py-2 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition flex items-center gap-2">
              Join Now <span aria-hidden>→</span>
            </button>
          </motion.div>
          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-2">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/Section3/section31.png"
                alt="Mobile App Preview"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 