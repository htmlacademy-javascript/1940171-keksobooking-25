function getRandom(min, max) {
  let rand;
  if (min>=max) {
    return;}
  else {
    rand = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return rand;
}
getRandom(1, 10);

function getRandomFraction(min, max, condition) {
  let rand;
  if (min>=max) {
    return;}
  else {
    rand = ((Math.random() * (max - min + 1)) + min).toFixed(condition);
  }
  return rand;
}
getRandomFraction (1, 10, 5);
