import {isEscEvent} from './util.js';
import {START_LATITUDE, START_LONGITUDE} from './map.js';
import {sendData} from './api.js';


const adForm = document.querySelector ('.ad-form');
const roomsField = adForm.querySelector('[name="rooms"]');
const capacityField = adForm.querySelector('[name="capacity"]');
const successTemplate = document.querySelector ('#success').content.querySelector('.success');
const successMessage = successTemplate.cloneNode(true);
const errorTemplate = document.querySelector ('#error');
const errorTemplateContent = errorTemplate.content.querySelector('.error');
const errorMessage = errorTemplateContent.cloneNode(true);
const errorButton = errorTemplateContent.querySelector('.error__button');
const submitButton = document.querySelector('.ad-form__submit');
const address = document.querySelector('#address');


const typeРousing = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const roomsOption = {
  '1': '1',
  '2':['2','1'],
  '3':['3','2','1'],
  '110':'0'
};


//Валидация заголовка
const pristine = new Pristine(adForm, {
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const validateTitle = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator(
  adForm.querySelector('#title'),
  validateTitle
);

//Валидация цены
const priceField = adForm.querySelector('#price');
const typeHousingField = adForm.querySelector('#type');

const validateAdPrice = (value) => {
  const unit = document.querySelector('#type');
  return value >= typeРousing[unit.value] && value <= 100000;
};

const getAdTypeErrorMessage = () => {
  const unit = document.querySelector('#type');
  return `Минимальная цена за ночь: ${typeРousing[unit.value]}`;
};

pristine.addValidator(
  priceField,
  validateAdPrice,
  getAdTypeErrorMessage
);

const setMinPrice = (type, price) => {
  price.min = typeРousing[type.value];
  price.placeholder =  typeРousing[type.value];
};

const onAdTypeChange = () => {
  setMinPrice(typeHousingField, priceField);
  pristine.validate(priceField);
};

typeHousingField.addEventListener('change', () => {
  onAdTypeChange();
});

//Валидация кол-ва гостей и комнат
function validateRooms () {
  return roomsOption[roomsField.value].includes(capacityField.value);
}

function getRoomsErrorMessage () {
  return 'Выберите другое кол-во гостей :)';
}
pristine.addValidator(
  capacityField,
  validateRooms,
  getRoomsErrorMessage
);

roomsField.addEventListener('change', () => {
  pristine.validate(capacityField);
});


const timeOptions = {
  '12:00' : '12:00',
  '13:00' : '13:00',
  '14:00' : '14:00',
};
const timein = adForm.querySelector('[name="timein"]');
const timeout = adForm.querySelector('[name="timeout"]');

timein.addEventListener('change', () => {
  timeout.value = timeOptions[timein.value];
});
timeout.addEventListener('change', () => {
  timein.value = timeOptions[timeout.value];
});

const onSuccess=()=>{
  adForm.reset();
  address.value = `${START_LATITUDE  } ,${ START_LONGITUDE}`;
  submitButton.removeAttribute('disabled', 'disabled');
  document.body.append(successMessage);
  window.addEventListener('keydown', onKeyDownSuccessMessage);
  document.addEventListener('click', onClickSuccessMessage);
};


const onFail =()=>{
  document.body.append(errorMessage);
  submitButton.removeAttribute('disabled', 'disabled');
  window.addEventListener('keydown', onKeyDownErrorMessage);
  document.addEventListener('click', onClickErrorMessage);
  errorButton.addEventListener('click', onClickErrorButton);
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    const formData = new FormData(evt.target);
    submitButton.setAttribute('disabled', 'disabled');
    sendData (onSuccess, onFail, formData);
  }
});

function closeSuccessMessage () {
  successMessage.remove();
  window.removeEventListener('keydown', onKeyDownSuccessMessage);
  document.removeEventListener('click', onClickSuccessMessage);
}

function onClickSuccessMessage () {
  closeSuccessMessage();
}

function onKeyDownSuccessMessage (evt) {
  if (isEscEvent(evt)) {
    closeSuccessMessage();
  }
}


function closeErrorMessage () {
  errorMessage.remove();
  window.removeEventListener('keydown', onKeyDownErrorMessage);
  document.removeEventListener('click', onClickErrorMessage);
  document.addEventListener('click', onClickSuccessMessage);
}
function onClickErrorMessage  () {
  closeErrorMessage();
}

function onKeyDownErrorMessage (evt) {
  if (isEscEvent(evt)) {
    closeErrorMessage();
  }
}

function onClickErrorButton () {
  closeErrorMessage();
}

export {typeРousing, pristine};
