import React, { useState } from 'react';
import Circle from './Circle';
import Eye from './Eye';
// import ActiveContent from './ActiveContent';
import ThreeEye from './ThreeEye';
import {CircleSmall, CircleCenter} from './Circle';

import ActiveContent from './ActiveContent';

function Vienn({setDimContent, setActiveContent}) {

    const [activeCircle, setActiveCircle] = useState(null);
    const [showEyeSet1, setShowEyeSet1] = useState(false); // State for Eye of set 1
    const [showEyeSet2, setShowEyeSet2] = useState(false); // State for Eye of set 2
    const [showEyeSet3, setShowEyeSet3] = useState(false); // State for Eye of set 3
    const [showThreeEye, setShowThreeEye] = useState(false); // State for Eye of set 3


    const [showHiddenLayer, setShowHiddenLayer] = useState(false); // State for the hidden layer

  return (


    <div className="viennContainer">


    <div className="relative w-96 h-96 flex items-center justify-center bg-black">
      
      <Circle
        style={{
          opacity: 0.3
        }}
        position="top-0"
        number="Neuroscience"
        setActiveCircle={setActiveCircle}
        activeCircle={activeCircle}
        setActiveContent={setActiveContent}
        setDimContent={setDimContent}
        />
      <Circle
        position="bottom-0 left-0"
        number="AI"
        setActiveCircle={setActiveCircle}
        activeCircle={activeCircle}
        setDimContent={setDimContent}
        setActiveContent={setActiveContent}
        />
      <Circle
        position="bottom-0 right-0"
        number="Physics"
        setDimContent={setDimContent}
        setActiveCircle={setActiveCircle}
        activeCircle={activeCircle}
        setActiveContent={setActiveContent}
      />

      {/* SET 2 */}
      <CircleSmall 
        x={38}
        y={48}
        deg={0}

        id={"ap"}
        onMouseEnter={() => setShowEyeSet2(true)} 
        onMouseLeave={() => setShowEyeSet2(false)} 
        setActiveContent={setActiveContent}
        setDimContent={setDimContent}
      />
      <Eye 
        circle1={{ x: 133, y: 264 }} 
        circle2={{ x: 216 + 51, y: 264 }} 
        showEye={showEyeSet2}
        idPrefix="AP"
      />
      
    {/* SET 1 */}
      <CircleSmall 
        x={47}
        y={28}
        deg={65}

        id={"pn"}
        onMouseEnter={() => setShowEyeSet1(true)} 
        onMouseLeave={() => setShowEyeSet1(false)} 
        setActiveContent={setActiveContent}
        setDimContent={setDimContent}
      />
      <Eye 
        circle1={{ x: 203, y: 124 }} 
        circle2={{ x: 219 + 51, y: 260 }} 
        showEye={showEyeSet1}
        idPrefix="pn"
      />

     {/* SET 3 */}
      <CircleSmall 
        x={29}
        y={28}
        deg={-65}
        id={"an"}
        onMouseEnter={() => setShowEyeSet3(true)} 
        onMouseLeave={() => setShowEyeSet3(false)} 
        setActiveContent={setActiveContent}
        setDimContent={setDimContent}
      />
      <Eye 
        circle1={{ x: 198, y: 124 }} 
        circle2={{ x: 79 + 51, y: 260 }} 
        showEye={showEyeSet3}
        idPrefix="an"
      />


        {
            showThreeEye && 
                    <ThreeEye 
                    // neuro
                    circle1={{ x: 200, y: 120 }}
                    // phys
                    circle2={{ x: 272, y: 264 }}
                    // ai
                    circle3={{ x: 128, y: 264 }} 
                    showEye={true}
                    z={100}
                    idPrefix="three"
                    showThreeEye={showThreeEye}
                    />
    }

      {/* z-index: 40 */}
      <CircleCenter 
        setShowHiddenLaye={setShowHiddenLayer}
        onMouseEnter={() => setShowHiddenLayer(true)} 
        onMouseLeave={() => setShowHiddenLayer(false)} 
        setShowThreeEye={setShowThreeEye}
      />

      {/* Hidden Layer */}
      {/* z: 25 */}
      <div className='hiddenLayerStyle' style={{ opacity: showHiddenLayer ? 0.9 : 0, pointerEvents: showHiddenLayer ? 'auto' : 'none' }}
     >

        {/* <ActiveContent currentState="Neuroscience" setActiveContent={setActiveContent}/> */}
        Test

     </div>


    </div>

        </div>
  )
}

export default Vienn; 