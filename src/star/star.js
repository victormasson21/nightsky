import React, { useState, useEffect } from 'react';
import {
  getTrajectory,
  getInitialDelay,
  getTransitionStyle,
  getTransitionDuration,
} from '../utils/get-functions';

/* create a massive array of stars
  origin
  initialPositon
  initialDelay
  translate
  transitionDuration (3s / 30s / 1m) ?
  transitionStyle > linear / ease-in / ease-out / ease
  glowStyle (width / spread) > 4 different ones

  animate-pulse ?

  Array from tailwind.config ?
*/

const Star = ({
  // origin = '',
  // initialPositon = '',
  // translate = '',
  // transitionStyle = 'ease',
  // initialDelay = '',
  // transitionDuration = '1m',
  glowStyle = 'glow',
  lifespan = '600000' /* Default lifespan: 10 minutes */,
}) => {
  /* Define life span */
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, lifespan);
  }, [lifespan]);

  /* Define params */

  const initialDelay = getInitialDelay();
  const { initialPositon, translate } = getTrajectory();
  const transitionStyle = getTransitionStyle();
  const transitionDuration = getTransitionDuration();

  return (
    isVisible && (
      <div
        className={`w-0.5 h-0.5 
        rounded-full bg-white 
        shadow-${glowStyle} absolute 
        ${initialPositon} 
        transform ${translate}
        transition 
        delay-${initialDelay} 
        duration-${transitionDuration} 
        ${transitionStyle} 
        `}
      />
    )
  );
};

export default Star;
