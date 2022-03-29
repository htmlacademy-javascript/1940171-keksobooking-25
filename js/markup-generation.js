const templateCard = document.querySelector('#card').content.querySelector('.popup');
const TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};
const  renderPopup = (card) => {

  const cardElement = templateCard.cloneNode(true);
  const photoContainer = cardElement.querySelector('.popup__photos');
  if (card.offer.title) {
    cardElement.querySelector('.popup__title').textContent = card.offer.title;
  } else {
    cardElement.querySelector('.popup__title').classList.add('hidden');
  }

  if (card.offer.address) {
    cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  } else {
    cardElement.querySelector('.popup__text--address').classList.add('hidden');
  }
  if (card.offer.price) {
    cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price  }₽/ночь`;
  } else {
    cardElement.querySelector('.popup__text--price').classList.add('hidden');
  }

  if (card.offer.rooms && card.offer.guests) {
    cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests  } гостей`;
  } else {
    cardElement.querySelector('.popup__text--capacity').classList.add('hidden');
  }

  if (card.offer.checkin && card.offer.checkout) {
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${  card.offer.checkin  }, выезд до${card.offer.checkout}`;
  } else {
    cardElement.querySelector('.popup__text--time').classList.add('hidden');
  }

  if (card.offer.description) {
    cardElement.querySelector('.popup__description').textContent = card.offer.description;
  } else {
    cardElement.querySelector('.popup__description').classList.add('hidden');
  }

  if (card.author.avatar) {
    cardElement.querySelector('.popup__avatar').src = card.author.avatar;
  } else {
    cardElement.querySelector('.popup__avatar').classList.add('hidden');
  }

  if (card.offer.type) {
    cardElement.querySelector('.popup__type').textContent = TYPE[card.offer.type];
  } else {
    cardElement.querySelector('.popup__type').classList.add('hidden');
  }

  if (card.offer.features) {
    cardElement.querySelectorAll('.popup__feature').forEach((featureListItem) =>  {
      const isNecessary = card.offer.features.some(
        (feature) => featureListItem.classList.contains(`popup__feature--${feature}`)
      );
      if(!isNecessary){
        featureListItem.remove();
      }
    });
  } else {
    cardElement.querySelector('.popup__feature').classList.add('hidden');
  }

  if (card.offer.photos) {
    card.offer.photos.forEach((url)=>{
      const photoListItem = photoContainer.querySelector('.popup__photo').cloneNode(true);
      photoListItem.src = url;
      photoContainer.appendChild(photoListItem);
    });
    photoContainer.querySelectorAll('.popup__photo')[0].remove();
  } else {
    cardElement.querySelector('.popup__photos').classList.add('hidden');
  }
  return cardElement;
};

export {renderPopup};
