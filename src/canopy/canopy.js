import React from 'react';
import StaticStar from '../static-star/static-star';

const Canopy = () => {
  // 2 * moving stars > 20 random stars / pop in every 5 to 10 seconds / over 1mn with 30s delay
  const stars = new Array(30).fill('');

  const content = stars.map(star => <StaticStar />);

  return <div className="w-full h-full overflow-hidden">{content}</div>;
};

export default Canopy;
