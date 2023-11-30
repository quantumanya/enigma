import React, { useState } from 'react';
import Circles from './Circles';

const App = () => {
  return (
    <>

      <div style={{ textAlign: 'center' }}>
          <div style={{ 
            display: 'inline-block', 
            width: '860pt',
            textAlign: 'left',
            fontFamily: 'monospace', 
            fontWeight: '400', 
            color: '#bdbdbd', 
            fontSize: '14pt',
            paddingTop: '14pt',
            }}>

           Final Enigma 2

          </div>
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