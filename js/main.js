function getRandom(min, max) {
  if (min>=max) {
    return 0;}
  else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
getRandom(1, 10);

function getRandomFraction(min, max, condition) {
  if (min>=max) {
    return 0;}
  else {
    return  ((Math.random() * (max - min + 1)) + min).toFixed(condition);
  }
}
getRandomFraction (1, 10, 5);
