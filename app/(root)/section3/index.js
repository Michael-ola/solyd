"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LogosCarousel = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Direction: -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  // Normalize index to always stay within bounds
  const normalizeIndex = (index) => (index + logos.length) % logos.length;

  // Handle Next Slide
  const handleNext = () => {
    setDirection(1); // Slide right
    setCurrentIndex((prevIndex) => normalizeIndex(prevIndex + 1));
  };

  // Handle Previous Slide
  const handlePrev = () => {
    setDirection(-1); // Slide left
    setCurrentIndex((prevIndex) => normalizeIndex(prevIndex - 1));
  };

  // Automatic Carousel Slide with Pause on Hover
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(handleNext, 3000); // Slide every 3 seconds
      return () => clearInterval(interval); // Cleanup on unmount or when isHovered changes
    }
  }, [isHovered, currentIndex]);

  return (
    <div
      className="relative group w-full max-w-xl mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)} // Pause on hover
      onMouseLeave={() => setIsHovered(false)} // Resume on hover end
    >
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute hidden group-hover:block text-[40px] left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-[20px] shadow hover:bg-gray-700 z-10"
      >
        &#8249;
      </button>

      {/* Carousel Display */}
      <div className="w-full flex justify-center items-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={logos[currentIndex].src}
            alt={logos[currentIndex].alt}
            className="h-24 md:h-32 object-contain"
            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute hidden text-[40px] group-hover:block right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow hover:bg-gray-700 z-10"
      >
        &#8250;
      </button>

      {/* Dots Indicators */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {logos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Component
const StrategicPartners = () => {
  // Array of logos
  const logos = [
    { src: "/images/section3/logo1.png", alt: "Logo 1" },
    { src: "/images/section3/logo2.png", alt: "Logo 2" },
    { src: "/images/section3/logo3.png", alt: "Logo 3" },
    { src: "/images/section3/logo4.png", alt: "Logo 4" },
    { src: "/images/section3/logo5.png", alt: "Logo 5" },
    { src: "/images/section3/logo6.png", alt: "Logo 6" },
    { src: "/images/section3/logo7.png", alt: "Logo 7" },
  ];

  return (
    <section className="bg-white py-[7%] px-[5%] md:px-16 overflow-hidden">
      {/* Image with Text Section */}
      <div className="relative mb-12 rounded-xl overflow-hidden">
        <img
          src="/images/section3/image1.jpeg"
          alt="Strategic Meeting"
          className="w-full rounded-lg h-[468px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="text-white w-[45%] p-6 md:p-12">
            <h1 className="text-3xl md:text-4xl font-axiforma font-bold leading-tight">
              Driving the Future
              <br />
              with <span className="text-purple-500">Bold Ideas</span> and
              Innovations
            </h1>
          </div>
        </div>
      </div>

      {/* Subtext Section */}
      <div className="text-center mb-3">
        <p className="text-purple-500 text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#0E1FDB] to-[#BE187C]">
          Alliances that drive innovation and deliver results
        </p>
        <h2 className="text-4xl leading-[3.75rem] md:text-[2.5rem]  text-[#1A1A1A] font-axiforma font-bold mt-2">
          Strategic Partners
        </h2>
      </div>

      {/* Logos Section */}
      <div className="p-4 pt-0">
        <LogosCarousel logos={logos} />
      </div>
    </section>
  );
};

export default StrategicPartners;
