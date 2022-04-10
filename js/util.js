const ALERT_SHOW_TIME = 5000;
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

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '5px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandom, getRandomFraction, createUrl, getRandomItems, isEscEvent, showAlert};
