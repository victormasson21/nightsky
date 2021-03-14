import {
  randomOneToX,
  randomMinusToX,
  randomFromArray,
} from './random-functions';

export const getOrigin = () => {
  return randomFromArray(['top', 'left', 'right', 'bottom']);
};

export const getTrajectory = (origin = '') => {
  origin = origin || getOrigin();
  const randomForPosition = randomOneToX(10);
  const randomForTranslate = randomMinusToX(10);
  let initialPositon, translate;

  switch (origin) {
    case 'left':
      initialPositon = `left-0 -ml-12 top-${randomForPosition}vh`;
      translate = `translate-x-11vw translate-y-${randomForTranslate}vw`;
      break;
    case 'right':
      initialPositon = `right-0 -mr-12 top-${randomForPosition}vh`;
      translate = `-translate-x-11vw translate-y-${randomForTranslate}vw`;
      break;
    case 'bottom':
      initialPositon = `bottom-0 -mb-12 left-${randomForPosition}vw`;
      translate = `-translate-y-11vh translate-x-${randomForTranslate}vh`;
      break;
    case 'top':
    default:
      initialPositon = `top-0 -mt-12 left-${randomForPosition}vw`;
      translate = `translate-y-11vh translate-x-${randomForTranslate}vh`;
  }

  return {
    initialPositon,
    translate,
  };
};

export const getInitialDelay = () => {
  return randomFromArray([
    '1s',
    '5s',
    '10s',
    '15s',
    '20s',
    '25s',
    '30s',
    '40s',
    '50s',
    '1m',
    '1m30',
    '2m',
    '2m30',
    '3m',
    '3m30',
    '4m',
    '4m30',
    '5m',
  ]);
};

export const getTransitionStyle = () => {
  return randomFromArray(['ease-linear', 'ease-in', 'ease-out', 'ease-in-out']);
};

export const getTransitionDuration = () => {
  return randomFromArray([
    '1s',
    '5s',
    '10s',
    '10s',
    '10s',
    '20s',
    '20s',
    '20s',
    '30s',
    '30s',
    '30s',
    '45s',
    '45s',
    '45s',
    '1m',
    '1m',
    '1m',
    '1m30',
    '2m',
  ]);
};
