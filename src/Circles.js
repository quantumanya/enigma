import React, { useState, useEffect } from 'react';
import ActiveContent from './ActiveContent';
import './Styles.css'; // Import the CSS file here
import Vienn from './Vienn';
import Signup from './Signup';

function Circles() {
  const [dimContent, setDimContent] = useState(false);
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
    <div className="p-2 flex items-center justify-center bg-black relative">
      {/* Content Div: LEFT */}

      <div className='leftContentDivStyle' style={{ opacity: dimContent ? 0.3 : 1 }}>
        
        
<Signup />

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


      {!dimContent && 
        <div className='contentDivStyle'>

          <h1>
            <strong style={{color: 'white'}}>What?</strong>
          </h1>
          A podcast exploring the scientific intersections between Ai + Neuroscience + Physics with the ultimate goal of probing the enigma of <strong style={{color: 'white'}}> Human and Machine/AI Consciousness.</strong> 
          <br />
          <br />
          <h1>
            <strong style={{color: 'white'}}>Why?</strong>
          </h1>
          I strongly believe that there is an urgent need in an acceleration of a concerted scientific effort in understanding an detection of Concsiousness, which must bear results before the impending accent of AGI. 
          <br /> My conviction is for this to be a critical prerequisite to AGI safety.
          <br />
          <br />
          <h1>
            <strong style={{color: 'white'}}>When?</strong>
          </h1>
          Early 2024 
          <br />
          <br />
          <h1>
            <strong style={{color: 'white'}}>Who?</strong>
          </h1>
          Please feel free to contact me on <a href="https://www.linkedin.com/in/anyapetrova/" style={{color:'white'}}>LinkedIn</a> with any questions and *especially* if you know someone you think I should interview!
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
  );
}

export default Circles;
