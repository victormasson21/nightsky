import React, { useState } from 'react';
import Satellite from './satellite/satellite.js';
import Star from './star/star.js';
import { data } from './app.data';
import './app.css';

const App = () => {
  let [content, setContent] = useState(null);
  let starShower = (
    <div className="w-screen h-screen">
      <Star origin="top" />
      <Star origin="left" />
      <Star origin="right" />
      <Star origin="bottom" />
      <Star origin="top" />
      <Star origin="left" />
      <Star origin="right" />
      <Star origin="bottom" />
      <Star origin="top" />
      <Star origin="left" />
      <Star origin="right" />
      <Star origin="bottom" />
      <Star origin="top" />
      <Star origin="left" />
      <Star origin="right" />
      <Star origin="bottom" />
      <Star origin="top" />
      <Star origin="left" />
      <Star origin="right" />
      <Star origin="bottom" />
      <Star origin="top" />
      <Star origin="left" />
      <Star origin="right" />
      <Star origin="bottom" />
    </div>
  );

  return (
    <div className="w-screen h-screen bg-blue-900 ">
      <div
        className="w-3 h-3 rounded-full absolute top-1 right-1 bg-red-900 hover:bg-red-400"
        onClick={e => setContent(starShower)}
      />

      {content}
    </div>
  );
};

export default App;

/* 

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
