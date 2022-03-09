const getRandom = (min, max) => {
  if (min>=max) {
    return 0;}
  else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const getRandomFraction = (min, max, condition) => {
  if (min>=max) {
    return 0;}
  else {
    return  ((Math.random() * (max - min + 1)) + min).toFixed(condition);
  }
};

const createUrl = () => {
  const users=getRandom(1,10);
  if (users===10) {
    return `img/avatars/user${  users  }.png`;
  } else {
    return `img/avatars/user0${  users  }.png` ;
  }
};
const getShuffledItems = (items) => items.slice().sort(() => 0.5 - Math.random());

const getRandomItems = (items) => {
  const randomIdx = getRandom(0, items.length);
  return getShuffledItems(items).slice(0, randomIdx);
};

export {getRandom, getRandomFraction, createUrl, getRandomItems };
