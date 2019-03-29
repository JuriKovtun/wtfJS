export default function() {
  const getRandomInt = max => Math.floor(Math.random() * max);
  let arr = new Array(9).fill().map(() => getRandomInt(31));
  return arr;
}
