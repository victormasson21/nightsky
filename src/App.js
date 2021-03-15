import React, { useState, useEffect } from 'react';
import './app.css';
// import { data } from './app.data';
// import Satellite from './satellite/satellite.js';
import Flashing from './flashing/flashing.js';

const App = () => {
  const [test, setTest] = useState(true);
  const [canopyOne, setCanopyOne] = useState(true);
  const [canopyTwo, setCanopyTwo] = useState(false);
  const [flashingOne, setFlashingOne] = useState(true);
  const [flashingTwo, setFlashingTwo] = useState(false);

  // Loop one - continuous loop
  useEffect(() => {
    setTimeout(() => {
      setFlashingOne(false);
    }, 60000);
    setFlashingOne(true);
  }, [canopyOne, flashingOne]);

  // Loop two - continuous loop
  useEffect(() => {
    setTimeout(() => {
      setFlashingTwo(false);
    }, 60000);
    setFlashingTwo(true);
  }, [canopyTwo, flashingTwo]);

  return (
    <div
      className="
        w-screen h-screen 
        absolute top-0 bottom-0 left-0 right-0
        overflow-hidden 
        bg-nightSky
      "
    >
      <Flashing />
    </div>
  );
};

export default App;

/* 

<div
        className={`w-5 h-5 rounded-full absolute top-0 right-0 hover:opacity-1/2 ${
          content ? 'bg-red-900' : 'bg-green-900'
        }`}
        onClick={e =>
          content === null ? setContent(starShower) : setContent(null)
        }
      />



{data.satellites.map(satellite => {
        return (
          <>
            <Satellite
              key={satellite.svg}
              svg={satellite.svg}
              alt={satellite.alt}
              url={satellite.url}
              description={satellite.description}
            />
          </>
        );
      })}

*/
