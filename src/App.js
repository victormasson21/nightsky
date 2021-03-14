import React, { useState, useEffect } from 'react';
import './app.css';
import Satellite from './satellite/satellite.js';
import { data } from './app.data';
import Star from './star/star.js';
import Flashing from './flashing/flashing.js';

const App = () => {
  const [test, setTest] = useState(true);
  const [canopyOne, setCanopyOne] = useState(true);
  const [canopyTwo, setCanopyTwo] = useState(false);
  const [flashingOne, setFlashingOne] = useState(true);
  const [flashingTwo, setFlashingTwo] = useState(false);

  // Loop one - continuous loop
  useEffect(() => {
    console.log('Loop One RUNS');
    setTimeout(() => {
      setFlashingOne(false);
    }, 60000);
    setFlashingOne(true);
    console.log('Loop One finished running & flashingOne: ', flashingOne);
  }, [canopyOne, flashingOne]);

  // Loop two - initial delay
  useEffect(() => {
    setTimeout(() => {
      setFlashingTwo(true);
    }, 30000);
  }, []);

  // Loop two - continuous loop
  useEffect(() => {
    console.log('Loop Two RUNS');
    setTimeout(() => {
      setFlashingTwo(false);
    }, 60000);
    setFlashingTwo(true);
    console.log('Loop Two finished running & flashingTwo: ', flashingTwo);
  }, [canopyTwo, flashingTwo]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTest(false);
  //     console.log('Test is ', test);
  //   }, 3000);
  //   setTest(true);
  //   console.log('Test is ', test);
  // }, [test]);

  let starShower = (
    <div className="w-full h-full overflow-hidden">
      {/* 2 * constant stars > 30 random stars / random fade in and out / over 1ms with 30s delay */}

      {/* {canopyOne && <Canopy />} */}
      {/* {canopyTwo && <Canopy />} */}
      {flashingOne && <Flashing />}
      {flashingTwo && <Flashing />}
    </div>
  );

  return (
    <div
      className="
                w-screen h-screen 
                absolute top-0 bottom-0 left-0 right-0
                overflow-hidden 
                bg-nightSky"
    >
      {starShower}
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
