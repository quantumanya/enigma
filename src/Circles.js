import React, { useState } from 'react';
import Circle from './Circle';
import Eye from './Eye';
import ActiveContent from './ActiveContent';
import ThreeEye from './ThreeEye';
import {CircleSmall, CircleCenter} from './Circle';
// import {CircleSmall} from './Circle';
import './Styles.css'; // Import the CSS file here
import Vienn from './Vienn';

function Circles() {

  // const [activeCircle, setActiveCircle] = useState(null);
  // const [showEyeSet1, setShowEyeSet1] = useState(false); // State for Eye of set 1
  // const [showEyeSet2, setShowEyeSet2] = useState(false); // State for Eye of set 2
  // const [showEyeSet3, setShowEyeSet3] = useState(false); // State for Eye of set 3
  // const [showThreeEye, setShowThreeEye] = useState(false); // State for Eye of set 3
  // const [showHiddenLayer, setShowHiddenLayer] = useState(false); // State for the hidden layer

  const [dimContent, setDimContent] = useState(false); // State for Eye of set 3
  const [activeContent, setActiveContent] = useState(null); // New state for active content

  const [text, setText] = useState('Default Text');

  const contentDictionary = {
        what: 'Whatttt',
        when: 'wheeeen',
        who: 'whoooo',
        why: 'whyyy'
    }

  // Function to change the text
  const changeText = (newText) => {
    setText(contentDictionary[newText]);
  };

  return (
<div className="p-2 flex items-center justify-center bg-black relative">


    <Vienn setDimContent={setDimContent} setActiveContent={setActiveContent}/>

    {/* INFO MENU ITEMS */}
      <div className='leftLeftContentDivStyle' style={{ opacity: dimContent ? 0.3 : 1 }}>
              <a href="#" className='buttonStyle'  onClick={() => changeText('what')}>What</a><br/>
              <a href="#" className='buttonStyle'  onClick={() => changeText('when')}>When</a><br/>
              <a href="#" className='buttonStyle'  onClick={() => changeText('who')}>Who</a><br/>
              <a href="#" className='buttonStyle'  onClick={() => changeText('why')}>Why</a><br/>
              <a href="#" className='buttonStyle'  onClick={() => changeText('why')}>Where</a><br/>
              <a href="#" className='buttonStyle'  onClick={() => changeText('why')}>Whom</a><br/>
       </div>
    {/* Content Div: LEFT */}
      <div className='leftContentDivStyle' style={{ opacity: dimContent ? 0.3 : 1 }}>
              {/* Div displaying the text */}
              <div>{text}</div>  
      </div>

    {/* Content Div: RIGHT */}
      <div className='contentDivStyle'>
        {/* Display content based on activeContent state */}
        {activeContent && <ActiveContent currentState={activeContent} />}
      </div> 
    </div>
  );
};


export default Circles;