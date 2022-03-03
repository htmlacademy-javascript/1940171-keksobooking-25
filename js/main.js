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

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTO = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

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


const createAd = () => {
  const lat = getRandomFraction(35.65000, 35.70000, 5);
  const lng = getRandomFraction(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: createUrl()
    },
    location: {
      lat: lat,
      lng: lng
    },
    offer: {
      title: 'Чудо жильё',
      address: `${lat}, ${lng}`,
      price: getRandom(10000,30000),
      type: TYPES[getRandom(0,4)],
      rooms: getRandom(1,8),
      guests: getRandom(6,20),
      checkin: TIMES[getRandom(0,TIMES.length - 1)],
      checkout: TIMES[getRandom(0,TIMES.length - 1)],
      features: getRandomItems (FEATURES),
      description: 'Простор, комфорт, доступность - это про нас',
      photos:getRandomItems (PHOTO),
    }
  };
};

const similarAdd = Array.from({length: 10}, createAd);

// eslint-disable-next-line no-console
console.log(similarAdd);
