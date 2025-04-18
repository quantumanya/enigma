import React, { useState, useEffect } from 'react';
import ActiveContent from './ActiveContent';
import './Styles.css'; // Import the CSS file here
import Vienn from './Vienn';
import Signup from './Signup';

function Circles() {
  const [dimContent, setDimContent] = useState(false);
  // const [activeContent, setActiveContent] = useState(null);
  const [activeContent, setActiveContent] = useState(window.innerWidth <= 768 ? 'podcast' : null);
    const [activeCircle, setActiveCircle] = useState(null);
    const [showEyeSet1, setShowEyeSet1] = useState(false); // State for Eye of set 1
    const [showEyeSet2, setShowEyeSet2] = useState(false); // State for Eye of set 2
    const [showEyeSet3, setShowEyeSet3] = useState(false); // State for Eye of set 3
  
    console.log("active Content")
    console.log(activeContent)

  const deactivate = () => {
    setActiveContent(null)
    setActiveCircle(null)
    setDimContent(false)
    setShowEyeSet1(false)
    setShowEyeSet2(false)
    setShowEyeSet3(false)
  }


  //  useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 768) {
  //       // Set the state for mobile view
  //       setActiveContent('podcast');
  //     } else {
  //       // Set the state for non-mobile view
  //       setActiveContent(null);
  //     }
  //   };

  //   // Call the function initially
  //   handleResize();

  //   // Add event listener
  //   window.addEventListener('resize', handleResize);

  //   // Clean up
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (

    <>
    <div className="p-2 flex items-center justify-center bg-black relative">
      {/* Content Div: LEFT */}

      <div className='leftContentDivStyle' style={{ opacity: dimContent ? 0.3 : 1 }}>
        
        <h1>
              <strong style={{color: 'white'}}>A Podcast that explores enigmas at the intersection of AI, Neuroscience, and Physics</strong>
          </h1>

          <br />
          I am launching a podcast that will explore the topics at the intersection of <br /> AI, Neuroscience, and Physics.
          <br />
          <br />
          Since you came are on this page, you must are either a friend or someone I would love to interview! 
          
          <br /> <br /> I will have more information on the podcast here soon. Meanwhile, the vienn diagram to the right is a visual representation of the podcast's scope.
          
          <br /> <br /> Feel free to reach out any questions : <br />finalenigmashow gmail com
          
          {/* <br />The rapid development of AI technology has sparked debate about the potential consciousness of future AI agents, raising moral, legal, philosophical, and religious questions. Currently, science lacks the means to determine if AGI could possess consciousness. This podcast aims to investigate scientific collaboration at the intersection of three research areas, believing that here lies the key to unraveling the ultimate enigma: the nature of consciousness. */}
          
     

      </div>

        <div className="viennWrapper">
           <Vienn 
            setShowEyeSet1={setShowEyeSet1} 
            setShowEyeSet2={setShowEyeSet2} 
            setShowEyeSet3={setShowEyeSet3} 
            showEyeSet1={showEyeSet1}
            showEyeSet2={showEyeSet2}
            showEyeSet3={showEyeSet3}
            activeCircle={activeCircle} setActiveCircle={setActiveCircle} setDimContent={setDimContent} setActiveContent={setActiveContent}/>
        </div>
        
      {/* Content Div: RIGHT */}


      {!dimContent && window.innerWidth > 768 &&
        <div className='contentDivStyle'>


          Hover over the diagram to explore example topics and enigmas the podcast explores.

          <br /> 
          <br /> 
          (Hint: intersections are most interesting!)


          
          {/* <br />
          <strong style={{color: 'white'}}>What?</strong><br />A podcast exploring the scientific intersections of AI, Neuroscience, and Physics, with the ultimate goal of probing the enigma of Human and AI/Machine Consciousness.<br />
          <br />
          <strong style={{color: 'white'}}>Why?</strong> <br />There is an urgent need for a concerted scientific effort in understanding Consciousness, as it could play a critical role in AGI safety.<br />
          <br />
          <strong style={{color: 'white'}}>When?</strong>  <br />Early 2024 
          <br />
          <br />
          <strong style={{color: 'white'}}>Who?</strong> <br />Please feel free to contact me on <a href="https://www.linkedin.com/in/anyapetrova/" style={{color:'white'}}>LinkedIn</a>  with any questions, and especially if you know someone you think I should interview! */}

          </div>  

}
              

        {activeContent &&
        
        <div 
        
        onClick={() => deactivate()}
        className={`contentDivStyle ${activeContent ? 'fullScreenOverlay' : ''}`}>
         
          
         <ActiveContent activeContent={activeContent} setActiveContent={setActiveContent}/>

      </div>
  }
    </div>
    
    {/* {
      window.innerWidth <= 768 &&
          <div style={{border: 'solid', position: 'absolute', bottom: '-30'}}>

          <Signup />
        </div>
    } */}
    
    
  </>

    
  );
}

export default Circles;
