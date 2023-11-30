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
        setStyle({ ...transitionStyle, opacity: 0 });

        const timeoutId = setTimeout(() => {
            setDisplayContent(currentState);
            setStyle({ ...transitionStyle, opacity: 1 });
        }, 300);

        const handleOutsideTap = (e) => {
            if (!e.target.closest('.active-content')) {
                setVisible(false);
                setActiveContent(null);
            }
        };

        window.addEventListener('touchstart', handleOutsideTap);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('touchstart', handleOutsideTap);
        };
    }, [currentState, setActiveContent]);

    const currentContent = contentDictionary[displayContent];

    return (
        <>
            {visible && currentContent ? (
                <div className="active-content" style={style}>
                    <h1 style={{ fontSize: '24pt', fontFamily: 'monospace' }}>
                        {currentContent.header}
                    </h1>
                    <p style={{ fontFamily: 'monospace' }}>
                        {currentContent.body}
                    </p>
                </div>
            ) : null}
        </>
    );
};

export default ActiveContent;
