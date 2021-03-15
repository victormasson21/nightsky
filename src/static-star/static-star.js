import React, { useState, useEffect } from 'react';
import {
  getStaticPosition,
  getInitialDelay,
  getTransitionStyle,
  getTransitionDuration,
} from '../utils/get-functions';

const StaticStar = ({
  // staticPosition = '',
  // initialDelay = '',
  glowStyle = 'glow',
  lifespan = '600000' /* Default lifespan: 10 minutes */,
}) => {
  /* Define life span */
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, lifespan);
  }, [lifespan]);

  /* Define params */
  const staticPosition = getStaticPosition();
  const transitionDuration = getTransitionDuration();

  /* Define delay */
  const initialDelay = getInitialDelay();

  useEffect(() => {
    setTimeout(() => {
      setOpacity('100');
    }, [initialDelay]);
  }, [initialDelay]);

  return (
    isVisible && (
      <div
        className={`w-0.5 h-0.5 
        rounded-full bg-white 
        shadow-${glowStyle} 
        opacity-${opacity}
        absolute 
        ${staticPosition} 

        transition
        duration-${transitionDuration}
        delay-${initialDelay} 
        `}
      />
    )
  );
};

export default StaticStar;
