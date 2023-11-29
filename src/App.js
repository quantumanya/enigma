import React, { useState } from 'react';
import Circles from './Circles';

const App = () => {
  return (
    <>


      <div className="p-2 flex items-center justify-left bg-black relative"
        style={{
          paddingLeft: '80pt',
          paddingTop: '16pt',
        }}
        >
        <span style={{
          fontFamily: 'monospace',
          fontWeight: '400',
          }}>
          <span style={{color: '#bdbdbd', fontSize: '14pt'}}>FINAL</span>
          <span style={{color: '#bdbdbd', fontSize: '14pt'}}>ENIGMA</span>
          {/* <span style={{color: '#bdbdbd', fontSize: '10pt'}}>[PODCAST]</span>   */}
          {/* <span style={{color: '#525252', fontSize: '10pt'}}> Exploring a Scientific Quest to Unlock Human and Machine Consciousness</span> */}
            
        </span>
      </div>

      <div>
        <div className="p-2 flex items-center justify-center bg-black relative"
          style={{
            height: '500pt'
          }}
          >
          <Circles/>
        </div>

      </div>

    </>
  );
};
export default App;