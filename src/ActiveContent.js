import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Signup from './Signup';

// Define a dictionary with various texts for header and body
const contentDictionary = {
    Neuroscience: {
        header: 'Neuroscience',
        body: "<br /><ul><li><strong style='color:white;'>Hard Problem of Consciousness:</strong> <span style='color:gray;'>Investigating why and how subjective experiences arise from physical brain processes.</span></li><br><li><strong style='color:white;'>Decision-Making and Free Will:</strong> <span style='color:gray;'>What is the neural basis of decision-making and is there free will?</span></li><br><li><strong style='color:white;'>Qualia:</strong> <span style='color:gray;'>Understanding the nature and origin of subjective sensory experiences, such as the way we perceive colors or experience pain.</span></li><br><li><strong style='color:white;'>Brain Integration and Modularity:</strong> <span style='color:gray;'>How are different brain regions integrated to produce coherent behavior and cognition?</span></li></ul>"
    },
    Physics: {
        header: 'Physics',
        body: "<br /><ul><li><strong style='color:white;'>Quantum Mechanics Interpretations:</strong> <span style='color:gray;'>Physicists still cannot agree on the interpretation of quantum mechanics. This, by far, is the most enigmatic mystery in Physics.</span></li><br><li><strong style='color:white;'>Theories of Everything:</strong> <span style='color:gray;'>Can we develop a single theory that unifies all of physics and accurately describes the reality we live in?</span></li><br><li><strong style='color:white;'>Dark Matter and Dark Energy:</strong> <span style='color:gray;'>What are dark matter and dark energy, which seem to dominate the universe's mass-energy content but remain unseen?</span></li><br><li><strong style='color:white;'>Nature of Time:</strong> <span style='color:gray;'>What is the fundamental nature of time, and why does it appear to flow in one direction?</span></li></ul>"
    },
    AI: {
        header: 'AI',
        body: "<br /><ul><li><strong style='color:white;'>General Intelligence:</strong> <span style='color:gray;'>Can we create an Artificial General Intelligence (AGI) that has the broad and flexible learning and understanding capabilities similar to human intelligence?</span></li><br><li><strong style='color:white;'>The Alignment Problem:</strong> <span style='color:gray;'>How do we ensure that advanced AI systems align with human values and intentions, and how do we control them to prevent unintended consequences?</span></li><br><li><strong style='color:white;'>Emergent Properties:</strong> <span style='color:gray;'>How do emergent properties arise in complex AI systems, and how can we predict or control these unexpected behaviors that aren't explicitly programmed?</span></li></ul>"
    },
    ap: {
        header: 'AI X Physics',
        body: "<br /><ul><li><strong style='color:white;'>Quantum Computing and AI:</strong> <span style='color:gray;'>How can quantum computing revolutionize AI, and what new capabilities could quantum AI unlock?</span></li><br><li><strong style='color:white;'>Discovering New Physical Laws with AI:</strong> <span style='color:gray;'>Can AI help in uncovering new fundamental laws of physics or provide insights into unsolved problems like dark matter, dark energy, or the nature of gravity?</span></li><br><li><strong style='color:white;'>AI's Role in Theoretical Physics:</strong> <span style='color:gray;'>How can AI contribute to theoretical physics, especially in complex areas like string theory or in the search for a unified theory of everything?</span></li></ul>"
    },
    pn: {
        header: 'Physics X Neuroscience',
        body: "<br /><ul><li><strong style='color:white;'>Quantum Brain:</strong> <span style='color:gray;'>Is there a role for quantum mechanics in brain function, and how might quantum physics influence cognitive processes and consciousness?</span></li><br><li><strong style='color:white;'>Physical Basis of Consciousness:</strong> <span style='color:gray;'>What are the physical processes underlying consciousness, and can physics provide insights into this complex phenomenon?</span></li><br><li><strong style='color:white;'>Neural Information Processing and Quantum Computing:</strong> <span style='color:gray;'>How could quantum computing impact our understanding and simulation of neural information processing in the brain?</span></li></ul>"
    },
    an: {
        header: 'AI X Neuroscience',
        body: "<br /><ul><li><strong style='color:white;'>Brain-Computer Interfaces (BCIs):</strong> <span style='color:gray;'>How can we develop advanced BCIs for seamless communication between the brain and computers, and what new capabilities will this unlock?</span></li><br><li><strong style='color:white;'>Neural Basis of Intelligence:</strong> <span style='color:gray;'>What are the neural mechanisms underlying intelligence, and how can this knowledge be applied to AI systems?</span></li><br><li><strong style='color:white;'>Mimicking Brain Processes in AI:</strong> <span style='color:gray;'>How can AI algorithms be designed to more closely mimic human brain processes like intuition, emotion, and creativity?</span></li><br><li><strong style='color:white;'>Ethical Implications of Neuro-AI:</strong> <span style='color:gray;'>What are the ethical considerations in integrating AI with neuroscience, especially regarding privacy, autonomy, and cognition?</span></li></ul>"
    },
    final: {
        header: 'Final Enigma',
        body: "<br />It's possible that the only path to a scientific understanding of Consciousness lies at the intersection of all three fields of research: <br /><span style='color: white;'>Physics + AI + Neuroscience. </span> <br /><br /> My hope is for this podcast to become a platform for an effective discourse between the three realms of research and to support a concerted scientific effort in understanding Consciousness."
    },
    podcast: {
        header: 'FinalEnigma: Podcast',
        body: '<br /><br /><strong style="color: white;">What?</strong><br />A podcast exploring the scientific intersections of AI, Neuroscience, and Physics, with the ultimate goal of probing the enigma of Human and AI/Machine Consciousness.<br /><br /><strong style="color: white;">Why?</strong> <br />There is an urgent need for a concerted scientific effort in understanding Consciousness, as it could play a critical role in AGI safety.<br /><br /><strong style="color: white;">When?</strong> <br />2025<br /><br /><br /><br /> <strong style="color: white;"> '
    },
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
                    {/* {activeContent=='podcast' && <Signup />} */}
                </div>
            ) : null}
        </>
    );
};

export default ActiveContent;
