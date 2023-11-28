
import React, { useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion'; // framer-motion@4.1.17

function Circle({ position, number, setActiveCircle, activeCircle, setActiveContent, setDimContent}) {
  const circleClasses =
    'absolute flex items-center justify-center rounded-full w-60 h-60 border-2 border-white transition-all duration-1000';
  const isActive = activeCircle === number;

  const handleMouseEnter = () => {
      setActiveCircle(number);
      setActiveContent(number);
      setDimContent(true)
    };
    
    const handleMouseLeave = () => {
      setActiveCircle(null);
      setActiveContent(null);
      setDimContent(false)
  };

  return (
    <motion.div
      className={classNames(circleClasses, position, {
        'bg-gray-500 opacity-50': !isActive,
        'bg-black opacity-100': isActive,
        'z-10': isActive,
        'z-1': !isActive,
      })}
      onMouseEnter={handleMouseEnter} // Use the function here
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.00 }}
    >
      <div className="text-white text-3xl font-bold">{number}</div>
    </motion.div>
  );
};

export default Circle;