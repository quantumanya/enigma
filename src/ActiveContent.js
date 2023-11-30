import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define a dictionary with various texts for header and body
const contentDictionary = {
    Neuroscience: {
        header: 'Neuroscience',
        body: 'This is the body text for Content 1.'
    },
    Physics: {
        header: 'Physics',
        body: 'This is the body text for Content 2.'
    },
    AI: {
        header: 'AI',
        body: 'This is the body text for Content 2.'
    },
    ap: {
        header: 'AI X Physics',
        body: 'This is the body text for Content 2.'
    },
    pn: {
        header: 'Physics X Neuroscience',
        body: 'This is the body text for Content 2.'
    },
    an: {
        header: 'AI X Neuroscience',
        body: 'This is the body text for Content 2.'
    },
    // Add more content as needed
};

const transitionStyle = {
    transition: 'opacity 0.3s ease-in-out',
    opacity: 1,
    border: 'solid',
};

const ActiveContent = ({ currentState, setActiveContent }) => {
    const [visible, setVisible] = useState(true);
    const [displayContent, setDisplayContent] = useState(currentState);
    const [style, setStyle] = useState({ ...transitionStyle });

    useEffect(() => {
        // Start the fade-out effect
        setStyle({ ...transitionStyle, opacity: 0 });

        const timeoutId = setTimeout(() => {
            // Update content after fade-out
            setDisplayContent(currentState);

            // Start the fade-in effect
            setStyle({ ...transitionStyle, opacity: 1 });
        }, 300); // Match this duration with your CSS transition time

        // Event handler to close the content on tap
        const handleOutsideTap = (e) => {
            setVisible(false);
            setActiveContent(null);
        };

        // Attach the event listener
        window.addEventListener('touchstart', handleOutsideTap);

        return () => {
            clearTimeout(timeoutId);
            // Remove the event listener when the component unmounts
            window.removeEventListener('touchstart', handleOutsideTap);
        };
    }, [currentState, setActiveContent]);

    const currentContent = contentDictionary[displayContent];

    return (
        <>
            {visible && currentContent ? (
                <div style={style}>
                    <h1 style={{
                        fontSize: '24pt',
                        fontFamily: 'monospace'
                    }}>{currentContent.header}</h1>
                    <p style={{
                        fontFamily: 'monospace'
                    }}>{currentContent.body}</p>
                </div>
            ) : null}
        </>
    );
};

export default ActiveContent;
