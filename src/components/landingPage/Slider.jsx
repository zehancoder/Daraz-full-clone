import { MdOutlineChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { cn } from "../../classReplaceing/replace";

let images = [
  "https://img.lazcdn.com/us/domino/d35453c6-1fd7-4dda-a064-3a0c18ed9e04_BD-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/2dd8e258-0039-4cd6-a687-1f7319909edd_BD-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/d233edec-6257-4700-a9de-5e82661bdc79_BD-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/4d8cd320-606a-4c60-8d78-f78aca777c73_BD-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/fc32b6d8-952f-470e-842f-e7829ca957d4_BD-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/435988e3-7d6f-4261-bb0c-2c62362af350_BD-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/5969a9a2-b92b-4554-9987-f26f4c5a114d_BD-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/0b7531d3-4040-4868-a0d1-98e4f1ccce5a_BD-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/4eba27d8-c329-4944-9ff8-d9df088c80c0_BD-1976-688.jpg_2200x2200q80.jpg",
  "https://img.lazcdn.com/us/domino/3c12f311-3454-4561-a377-043a6d94f2f6_BD-1976-688.jpg_2200x2200q80.jpg",
];

const Slider = ({className}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={cn(className)}>
      <div className="relative max-w-5xl h-[43vw] lg:h-[359px]  overflow-hidden mx-auto  shadow-lg hoverEffect">
        <NavLink to="/maleFassion">
          <AnimatePresence>
            <motion.img
              key={images[index]}
              src={images[index]}
              alt="slider"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full  "
            />
          </AnimatePresence>
        </NavLink>
        <div className="absolute top-1/2 -left-5 -right-5 flex justify-between px-4 text-xl effect">
          <button
            onClick={prevSlide}
            className="bg-black/50 rounded-e-xl text-white px-1.5 md:px-2 py-1 md:py-1.5 cursor-pointer"
          >
            <MdOutlineChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-black/50 rounded-s-xl text-white px-1.5 md:px-2 py-1 md:py-1.5 cursor-pointer"
          >
            <MdOutlineChevronRight />
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full ${
                i === index ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
