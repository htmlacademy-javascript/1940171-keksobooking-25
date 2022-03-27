const form = document.querySelector('.ad-form');
const header = document.querySelector('.ad-form-header');
const fieldset = document.querySelectorAll('.ad-form__element');

const filters = document.querySelector('.map__filters');
const features = document.querySelector('#housing-features');
const type = document.querySelector('#housing-type');
const price = document.querySelector('#housing-price');
const rooms = document.querySelector('#housing-rooms');
const guests = document.querySelector('#housing-guests');

const disabledForm = ()=>{
  form.classList.add('ad-form--disabled');
  filters.classList.add('ad-form--disabled');
  header.setAttribute.add('disabled', 'disabled');
  fieldset.setAttribute.add('disabled', 'disabled');
  features.setAttribute.add('disabled', 'disabled');
  type.setAttribute.add('disabled', 'disabled');
  price.setAttribute.add('disabled', 'disabled');
  rooms.setAttribute.add('disabled', 'disabled');
  guests.setAttribute.add('disabled', 'disabled');
};
export {disabledForm};
