import React, { useState, useEffect, useRef } from 'react';

const randomOneToTen = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const Star = ({ origin = 'right' }) => {
  const randomForPosition = randomOneToTen();
  const randomForTranslate = randomOneToTen(); /* Random with negative */
  let position, translate;
  const [transform, setTransform] = useState(null);

  switch (origin) {
    case 'left':
      position = `-left-10 top-${randomForPosition}`;
      translate = `translate-x-11vw translate-y-${randomForTranslate}vh`;
      break;
    case 'right':
      position = `-right-10 top-${randomForPosition}`;
      translate = `-translate-x-11vw translate-y-${randomForTranslate}vh`;
      break;
    case 'bottom':
      position = `-bottom-10 left-${randomForPosition}`;
      translate = `-translate-y-11vh translate-x-${randomForTranslate}vw`;
      break;
    case 'top':
    default:
      position = `-top-10 left-${randomForPosition}`;
      translate = `translate-y-11vh translate-x-${randomForTranslate}vw`;
  }

  useEffect(() => {
    setTransform(translate);
  }, [translate]);

  return (
    <div
      className={`w-0.5 h-0.5 rounded-full bg-white shadow-glow absolute ${position} transition duration-5 ease-in-out transform ${transform}`}
    />
  );
};

export default Star;
