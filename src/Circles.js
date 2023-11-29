import React, { useState } from 'react';
import ActiveContent from './ActiveContent';
import './Styles.css'; // Import the CSS file here
import Vienn from './Vienn';

function Circles() {
  const [dimContent, setDimContent] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

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
      <div className={`contentDivStyle ${activeContent ? 'fullScreenOverlay' : ''}`}>
        {activeContent && <ActiveContent currentState={activeContent} />}
      </div>
    </div>
  );
}

export default Circles;
