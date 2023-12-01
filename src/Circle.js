import React, { useEffect, useRef } from 'react';
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

export const CircleCenter = ({onMouseEnter, onMouseLeave, setShowThreeEye }) => {
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

    const circleRef = useRef(null); // Ref for the DOM element

    useEffect(() => {
        const circleElement = circleRef.current;

        const handleTouchStart = (event) => {
            event.preventDefault();
            setActiveCircle(number);
            setActiveContent(number);
            setDimContent(true);
        };

        // Attach the event listener in a non-passive way
        circleElement.addEventListener('touchstart', handleTouchStart, { passive: false });

        return () => {
            // Remove the event listener on cleanup
            circleElement.removeEventListener('touchstart', handleTouchStart);
        };
    }, [number, setActiveCircle, setActiveContent, setDimContent]);


    const handleTap = (event) => {
        event.preventDefault(); // Prevent default to stop triggering mouse events on touch devices
        setActiveCircle(number);
        setActiveContent(number);
        setDimContent(true);
    };

    const handleMouseEnter = () => {
        if (!('ontouchstart' in window)) { // Check if it's not a touch device
            setActiveCircle(number);
            setActiveContent(number);
            setDimContent(true);
        }
    };

    const handleMouseLeave = () => {
        if (!('ontouchstart' in window)) { // Check if it's not a touch device
            setActiveCircle(null);
            setActiveContent(null);
            setDimContent(false);
        }
    };

return (
        <motion.div
            ref={circleRef}
            className={classNames(circleClasses, position, {
                'bg-gray-500 opacity-50': !isActive,
                'bg-black opacity-100': isActive,
                'z-10': isActive,
                'z-1': !isActive,
            })}
            onMouseEnter={() => !('ontouchstart' in window) && setActiveCircle(number)}
            onMouseLeave={() => !('ontouchstart' in window) && setActiveCircle(null)}
        >
            <div className="text-white text-3xl font-bold">{number}</div>
        </motion.div>
    );
};

export default Circle;