import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define a dictionary with various texts for header and body
const contentDictionary = {
    Neuroscience: {
        header: 'Neuroscience',
        body: "<ul><li><strong style='color:white;'>Hard Problem of Consciousness:</strong> <span style='color:gray;'>Investigating why and how subjective experiences arise from physical brain processes.</span></li><br><li><strong style='color:white;'>Decision-Making and Free Will:</strong> <span style='color:gray;'>What is the neural basis of decision-making and is there free will?</span></li><br><li><strong style='color:white;'>Qualia:</strong> <span style='color:gray;'>Understanding the nature and origin of subjective sensory experiences, such as the way we perceive colors or experience pain.</span></li><br><li><strong style='color:white;'>Brain Integration and Modularity:</strong> <span style='color:gray;'>How are different brain regions integrated to produce coherent behavior and cognition?</span></li></ul>"
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
    // border: 'solid',
};

const ActiveContent = ({ activeContent, setActiveContent }) => {
    const [visible, setVisible] = useState(true);
    const [displayContent, setDisplayContent] = useState(activeContent);
    const [style, setStyle] = useState({ ...transitionStyle });

    // useEffect(() => {
    //     setStyle({ ...transitionStyle, opacity: 0 });

    //     const timeoutId = setTimeout(() => {
    //         setDisplayContent(activeContent);
    //         setStyle({ ...transitionStyle, opacity: 1 });
    //     }, 300);

    //     const handleOutsideTap = (e) => {
    //         if (!e.target.closest('.active-content')) {
    //             setVisible(false);
    //             console.log("tap outside")
    //             // setActiveContent(null);
    //         }
    //     };

    //     window.addEventListener('touchstart', handleOutsideTap);

    //     return () => {
    //         clearTimeout(timeoutId);
    //         window.removeEventListener('touchstart', handleOutsideTap);
    //     };
    // }, [activeContent]);

    const currentContent = contentDictionary[activeContent];

    return (
        <>
            {visible && currentContent ? (
                <div className="active-content" style={style}>
                    <h1 style={{ fontSize: '24pt', fontFamily: 'monospace' }}>
                        {currentContent.header}
                    </h1>
                    <p style={{ fontFamily: 'monospace' }} dangerouslySetInnerHTML={{ __html: currentContent.body }}>
</p>
                </div>
            ) : null}
        </>
    );
};

export default ActiveContent;
