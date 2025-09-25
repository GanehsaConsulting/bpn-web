"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ComingSoon = () => {
  const images = [
    "https://jp-nusantara.com/wp-content/uploads/mv01.jpg",
    "https://jp-nusantara.com/wp-content/uploads/top_strength01.jpg",
    "https://jp-nusantara.com/wp-content/uploads/compnay04.jpg",
    "https://jp-nusantara.com/wp-content/uploads/column02-640x427.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Ganti gambar setiap 4 detik

    return () => clearInterval(interval);
  }, [images.length]);

  // Variants untuk animasi slideshow background
  const backgroundVariants = {
    enter: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(10px)",
    },
    center: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        opacity: { duration: 1, ease: "easeOut" },
        scale: { duration: 8, ease: "easeOut" },
        filter: { duration: 1, ease: "easeOut" },
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(8px)",
      transition: {
        opacity: { duration: 0.8, ease: "easeIn" },
        scale: { duration: 0.8, ease: "easeIn" },
        filter: { duration: 0.8, ease: "easeIn" },
      }
    }
  };

  // Variants untuk animasi text yang sinkron dengan gambar
  const textVariants = {
    enter: {
      opacity: 0.8,
      y: 10,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 1.2, ease: "easeOut" },
        y: { duration: 1.2, ease: "easeOut" },
      }
    },
    exit: {
      opacity: 0.9,
      y: -5,
      transition: {
        opacity: { duration: 0.6, ease: "easeIn" },
        y: { duration: 0.6, ease: "easeIn" },
      }
    }
  };

  return (
    <section className="mx-3 mt-3">
      {/* Main Hero Container */}
      <div className="relative w-full h-[calc(100vh-6rem)] min-h-[500px] rounded-main overflow-hidden">
        {/* Slideshow Background dengan AnimatePresence */}
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            variants={backgroundVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              fill
              className="object-cover"
              src={images[currentImageIndex]}
              alt="Japan-Indonesia Partnership"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay dengan sedikit animasi */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"
          animate={{
            opacity: [1, 0.9, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Text Overlay dengan animasi yang sinkron */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentImageIndex}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-2xl"
            >
              <motion.h1
                className="text-4xl md:text-8xl font-extrabold leading-tight mb-4 sm:mb-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              >
                Coming Soon
              </motion.h1>
              <motion.p
                className="text-xl opacity-90 leading-relaxed mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              >
                A social project that connects culture and heart
              </motion.p>
              <motion.p
                className="text-xl opacity-90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
              >
                文化と心をつなぐ、社会貢献プロジェクト
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60'
                }`}
              onClick={() => setCurrentImageIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.2 + (index * 0.1),
                duration: 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            key={currentImageIndex}
            transition={{
              duration: 4,
              ease: "linear"
            }}
          />
        </div>
      </div>
    </section>
  );
};