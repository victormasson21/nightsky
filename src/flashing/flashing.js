import React from 'react';
import Star from '../star/star';

const Flashing = () => {
  // 2 * moving stars > 20 random stars / pop in every 5 to 10 seconds / over 1mn with 30s delay
  const stars = new Array(200).fill('');

  const content = stars.map(star => <Star />);

  return <div className="w-full h-full overflow-hidden">{content}</div>;
};

export default Flashing;
