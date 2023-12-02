import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

export const CircleSmall = ({deg=0, x=0, y=45, id, setShowEyeSet, onMouseEnter, onMouseLeave, setActiveContent, setDimContent }) => {
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

    const circleRef = useRef(null); // Ref for the DOM element
        useEffect(() => {
            const circleElement = circleRef.current;
            const handleTouchStart = (event) => {
                event.preventDefault();
                setActiveContent(id);
                setShowEyeSet(true);
                setDimContent(true);
            };

            // Attach the event listener in a non-passive way
            circleElement.addEventListener('touchstart', handleTouchStart, { passive: false });
            return () => {
                // Remove the event listener on cleanup
                circleElement.removeEventListener('touchstart', handleTouchStart);
            };
        }, [id, setActiveContent, setDimContent]);


        const handleMouseEnter = () => {
            if (!('ontouchstart' in window)) { // Check if it's not a touch device
                setShowEyeSet(true)
                setActiveContent(id);
                setDimContent(true);
            }
        };

        const handleMouseLeave = () => {
            if (!('ontouchstart' in window)) { // Check if it's not a touch device
                setShowEyeSet(false)
                setActiveContent(null);
                setDimContent(false);
            }
        };

    return <div style={style} 
        ref={circleRef}
            onMouseEnter={() => !('ontouchstart' in window) && handleMouseEnter(id)}
            onMouseLeave={() => !('ontouchstart' in window) && handleMouseLeave(null)}
      // onMouseEnter={handleMouseEnter} 
      // onMouseLeave={handleMouseLeave} 
      />;
};

export const CircleCenter = ({setActiveContent, onMouseEnter, onMouseLeave, setShowThreeEye, setDimContent }) => {
    // const handleMouseEnter = () => {
    //     onMouseEnter();
    //     setActiveContent("final");
    //     setShowThreeEye(true);
    // };
    // const handleMouseLeave = () => {
    //     onMouseLeave();
    //     setActiveContent(null)
    //     setShowThreeEye(false);
    // };


      const circleRef = useRef(null); // Ref for the DOM element
        useEffect(() => {
            const circleElement = circleRef.current;
            const handleTouchStart = (event) => {
                event.preventDefault();
                onMouseEnter();
                setActiveContent("final");
                setShowEyeSet(true);
                setDimContent(true);
            };

            // Attach the event listener in a non-passive way
            circleElement.addEventListener('touchstart', handleTouchStart, { passive: false });
            return () => {
                // Remove the event listener on cleanup
                circleElement.removeEventListener('touchstart', handleTouchStart);
            };
        }, [setActiveContent, setDimContent]);


        const handleMouseEnter = () => {
            if (!('ontouchstart' in window)) { // Check if it's not a touch device
                // setShowEyeSet(true)
                onMouseEnter();
                setActiveContent("final");
                setDimContent(true);
                setShowThreeEye(true);
            }
        };

        const handleMouseLeave = () => {
            if (!('ontouchstart' in window)) { // Check if it's not a touch device
                // setShowEyeSet(false)
                onMouseLeave();
                setActiveContent(null);
                setDimContent(false);
                setShowThreeEye(false);
            }
        };



    return <div ref={circleRef} className='circleCenter' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />;
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
            setActiveContent(number);
            setActiveCircle(number);
            setDimContent(true);
        };

        // Attach the event listener in a non-passive way
        circleElement.addEventListener('touchstart', handleTouchStart, { passive: false });
        return () => {
            // Remove the event listener on cleanup
            circleElement.removeEventListener('touchstart', handleTouchStart);
        };
    }, [number, setActiveCircle, setActiveContent, setDimContent]);


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
        className={classNames(circleClasses, position, {
              'bg-gray-500 opacity-50': !isActive,
              'bg-black opacity-100': isActive,
              'z-10': isActive,
              'z-1': !isActive,
            })}
            ref={circleRef}
            onMouseEnter={() => !('ontouchstart' in window) && handleMouseEnter(number)}
            onMouseLeave={() => !('ontouchstart' in window) && handleMouseLeave(null)}
        >
            <div className="text-white text-3xl font-bold">{number}</div>
        </motion.div>
    );
};

export default Circle;