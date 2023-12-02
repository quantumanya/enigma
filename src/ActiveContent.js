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
        body: "<ul><li><strong style='color:white;'>Quantum Mechanics Interpretations:</strong> <span style='color:gray;'>How do the different interpretations of quantum mechanics explain the role of the observer or consciousness in the physical world?</span></li><br><li><strong style='color:white;'>Theory of Everything:</strong> <span style='color:gray;'>Can we develop a single theory that successfully unifies the four fundamental forces of nature?</span></li><br><li><strong style='color:white;'>Dark Matter and Dark Energy:</strong> <span style='color:gray;'>What are dark matter and dark energy, which seem to dominate the universe's mass-energy content but remain unseen?</span></li><br><li><strong style='color:white;'>Nature of Time:</strong> <span style='color:gray;'>What is the fundamental nature of time, and why does it appear to flow in one direction?</span></li></ul>"
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
    final: {
        header: 'Final Enigma',
        body: 'This is the body text for Content 2.'
    },
    podcast: {
        header: 'FinalEnigma: Podcast',
        body: '<br /><strong style="color: white;">What?</strong><br />A podcast exploring the scientific intersections of AI, Neuroscience, and Physics, with the ultimate goal of probing the enigma of Human and AI/Machine Consciousness.<br /><br /><strong style="color: white;">Why?</strong> <br />There is an urgent need for a concerted scientific effort in understanding Consciousness, as it could play a critical role in AGI safety.<br /><br /><strong style="color: white;">When?</strong> <br />Early 2024<br /><br /><strong style="color: white;">Who?</strong> <br />Please feel free to contact me on <a href="https://www.linkedin.com/in/anyapetrova/" style="color: white;">LinkedIn</a> with any questions, and especially if you know someone you think I should interview!'
    },
    // Add more content as needed
};

const transitionStyle = {
    transition: 'opacity 0.3s ease-in-out',
    opacity: 1,
};

const ActiveContent = ({ activeContent, setActiveContent }) => {
    const [visible, setVisible] = useState(true);
    const [displayContent, setDisplayContent] = useState(activeContent);
    const [style, setStyle] = useState({ ...transitionStyle });

    useEffect(() => {
        setStyle({ ...transitionStyle, opacity: 0 });

        const timeoutId = setTimeout(() => {
            setDisplayContent(activeContent);
            setStyle({ ...transitionStyle, opacity: 1 });
        }, 300);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [activeContent]);

    const currentContent = contentDictionary[activeContent];

    return (
        <>
            {visible && currentContent ? (
                <div className="active-content" style={style}>
                    <h1 style={{ fontSize: '24pt', fontFamily: 'monospace' }}>
                        {currentContent.header}
                    </h1>
                    <p style={{ fontFamily: 'monospace' }} dangerouslySetInnerHTML={{ __html: currentContent.body }}></p>
                </div>
            ) : null}
        </>
    );
};

export default ActiveContent;
