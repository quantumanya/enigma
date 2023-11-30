import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

export const CircleSmall = ({deg=0, x=0, y=45, id, onMouseEnter, onMouseLeave, setActiveContent, setDimContent }) => {
    const style = {
        width: '90px',
        height: '170px',
        backgroundColor: 'blue',
        borderRadius: '50%',
        position: 'absolute',
        zIndex: 20,
        top: `${y}%`,
        left: `${x}%`,
        transform: `rotate(${deg}deg)`, 
        opacity: '0',
    };

    const handleMouseEnter = () => {
        setActiveContent(id);
        onMouseEnter();
        setDimContent(true);
    };
    
    const handleMouseLeave = () => {
        onMouseLeave();
        setDimContent(false);
        setActiveContent(null);
    };

    return <div style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />;
};

export const CircleCenter = ({onMouseEnter, onMouseLeave, setShowThreeEye, setShowHiddenLayer }) => {
    const handleMouseEnter = () => {
        onMouseEnter();
        setShowThreeEye(true);
    };
    const handleMouseLeave = () => {
        onMouseLeave();
        setShowThreeEye(false);
    };
    return <div className='circleCenter' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />;
};

export const Circle = ({ position, number, setActiveCircle, activeCircle, setActiveContent, setDimContent}) => {
    const circleClasses =
        'absolute flex items-center justify-center rounded-full w-60 h-60 border-2 border-white transition-all duration-1000';
    const isActive = activeCircle === number;

    const handleTap = () => {
        setActiveCircle(number);
        setActiveContent(number);
        setDimContent(true);
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
            onMouseEnter={handleTap} // Combined mouse enter and touch for simplicity
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTap} // Use touch event for mobile devices
            whileHover={{ scale: 1.00 }}
        >
            <div className="text-white text-3xl font-bold">{number}</div>
        </motion.div>
    );
};

export default Circle;
