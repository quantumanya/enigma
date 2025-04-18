import React, { useState } from 'react';
import Circles from './Circles';
import Signup from './Signup';

const App = () => {
  return (
    <>

      <div style={{ textAlign: 'center' }}>
          <div style={{ 
            display: 'inline-block', 
            width: '900pt',
            textAlign: 'left',
            fontFamily: 'monospace', 
            fontWeight: '400', 
            color: '#bdbdbd', 
            fontSize: '14pt',
            paddingTop: '16pt',
            paddingLeft: '16pt',
            }}>

           Final Enigma
           {/* <span style={{}}>A podcast on a Scientific Quest for Uncerstanding Consciousness</span> */}

          </div>
        </div>

      <div>
        <div className="p-2 flex items-center justify-center bg-black relative"
          style={{
            height: '450pt'
          }}
          >
          <Circles/>
        </div>

      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        paddingBottom: '32pt',
        paddingTop: '32pt'
      }}>
        <Signup />
      </div>

    </>
  );
};
export default App;