export const randomOneToX = x => {
  return Math.floor(Math.random() * x + 1);
};

export const randomMinusToX = x => {
  const integer = Math.floor(Math.random() * x + 1);
  const sign = Number.isInteger(Math.floor(Math.random() * 10 + 1) / 2);
  return sign ? integer : -integer;
};

export const randomFromArray = array => {
  return array[Math.floor(Math.random() * array.length)];
};

/* Test loop

for (let i = 0; i < 100; i++) {
  let random = randomFromArray(delays);
  console.log(random);
}

 */
