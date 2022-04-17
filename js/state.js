const form = document.querySelector('.ad-form');
const header = document.querySelector('.ad-form-header');
const fieldsetS = document.querySelectorAll('.ad-form__element');

const filters = document.querySelector('.map__filters');
const features = document.querySelector('#housing-features');
const type = document.querySelector('#housing-type');
const price = document.querySelector('#housing-price');
const rooms = document.querySelector('#housing-rooms');
const guests = document.querySelector('#housing-guests');

const disabledForm = ()=>{
  form.classList.add('ad-form--disabled');
  filters.classList.add('ad-form--disabled');
  header.setAttribute('disabled', 'disabled');
  features.setAttribute('disabled', 'disabled');
  type.setAttribute('disabled', 'disabled');
  price.setAttribute('disabled', 'disabled');
  rooms.setAttribute('disabled', 'disabled');
  guests.setAttribute('disabled', 'disabled');
  fieldsetS.forEach((elem)=>{
    elem.setAttribute('disabled', 'disabled');
  });
};
const enabledForm = ()=> {
  form.classList.remove('ad-form--disabled');
  filters.classList.remove('ad-form--disabled');
  header.removeAttribute('disabled', 'disabled');
  features.removeAttribute('disabled', 'disabled');
  type.removeAttribute('disabled', 'disabled');
  price.removeAttribute('disabled', 'disabled');
  rooms.removeAttribute('disabled', 'disabled');
  guests.removeAttribute('disabled', 'disabled');
  fieldsetS.forEach((elem)=>{
    elem.removeAttribute('disabled', 'disabled');
  });
};
export {disabledForm, enabledForm};
