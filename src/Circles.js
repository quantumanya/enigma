import React, { useState } from 'react';
import ActiveContent from './ActiveContent';
import './Styles.css'; // Import the CSS file here
import Vienn from './Vienn';

function Circles() {
  const [dimContent, setDimContent] = useState(false);
  const [activeContent, setActiveContent] = useState(null);


    console.log("active Content")
    console.log(activeContent)


  return (
    <div className="p-2 flex items-center justify-center bg-black relative">
      {/* Content Div: LEFT */}
      <div className='leftContentDivStyle' style={{ opacity: dimContent ? 0.3 : 1 }}>
        <div>LEFT text </div>  
      </div>

        <div className="viennWrapper">
           <Vienn setDimContent={setDimContent} setActiveContent={setActiveContent}/>
        </div>
        
      {/* Content Div: RIGHT */}
        {activeContent && 
        
      <div className={`contentDivStyle ${activeContent ? 'fullScreenOverlay' : ''}`}>
          <ActiveContent activeContent={activeContent} setActiveContent={setActiveContent}/>
      </div>
        }
    </div>
  );
}

export default Circles;
