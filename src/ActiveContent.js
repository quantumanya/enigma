import React, { useState, useEffect } from 'react';

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
};

const ActiveContent = ({ currentState }) => {
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

        return () => clearTimeout(timeoutId);
    }, [currentState]);

    const currentContent = contentDictionary[displayContent];

    return (
        <div style={style}>
            {currentContent ? (
                <>
                    <h1 style={{
                      fontSize: '24pt',
                      fontFamily: 'monospace'
                    }}>{currentContent.header}</h1>
                    <p style={{
                      fontFamily: 'monospace'
                    }}>{currentContent.body}</p>
                </>
            ) : (
                <div>No content available for {currentState} state.</div>
            )}
        </div>
    );
};

export default ActiveContent;