import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './index.css';
import ASCIIText from './reactbits/ASCIIText/ASCIIText';

function App() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className='relative bg-red-500 bg-opacity-80 flex items-center justify-center' style={{ width: '80rem', height: '20rem' }}>
        <ASCIIText
          text='Dex VLA'
          enableWaves={false}
          asciiFontSize={8}
          textFontSize={800}
        />
      </div>
    </div>
  );
}

export default App;
