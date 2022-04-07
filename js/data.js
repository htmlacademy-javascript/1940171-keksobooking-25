import {createMarker} from './map.js' ;
import {pristine} from './user-validation.js' ;
import {showAlert} from './util.js' ;
import {isEscEvent} from './util.js';
import {START_LATITUDE, START_LONGITUDE} from './map.js';
const adForm = document.querySelector ('.ad-form');
const successTemplate = document.querySelector ('#success').content.querySelector('.success');
const successMessage = successTemplate.cloneNode(true);
const errorTemplate = document.querySelector ('#error').content.querySelector('.error');
const errorMessage = errorTemplate.cloneNode(true);
const errorButton = document.querySelector('error__button');
const submitButton = document.querySelector('.ad-form__submit');
const address = document.querySelector('#address');

const getData = (onSuccess, onFail) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail('Произошла ошибка загрузки данных, перезагрузите страницу');
      }})
    .then((data) => {
      data.forEach((point)=>{
        onSuccess(point);
      });
    })
    .catch(()=>{
      onFail('Произошла ошибка загрузки данных, перезагрузите страницу');
    });
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    const formData = new FormData(evt.target);
    submitButton.setAttribute('disabled', 'disabled');
    fetch(
      ' https://25.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response)=>{
        if (response.ok)
        {
          evt.target.reset();
          address.value = `${START_LATITUDE  } ,${ START_LONGITUDE}`;
          submitButton.removeAttribute('disabled', 'disabled');
          document.body.append(successMessage);
          window.addEventListener('keydown', onKeyDownSuccessMessage);
          document.addEventListener('click', onClickSuccessMessage);
        } else {
          throw new Error();
        }
      })
      .catch(()=>{
        document.body.append(errorMessage);
        submitButton.removeAttribute('disabled', 'disabled');
        window.addEventListener('keydown', onKeyDownErrorMessage);
        document.addEventListener('click', onClickErrorMessage);
        errorButton.addEventListener('click', onClickErrorButton);
      });
  }
});

function closeSuccessMessage () {
  successMessage.remove();
  window.removeEventListener('keydown', onKeyDownSuccessMessage);
  document.removeEventListener('click', onClickSuccessMessage);
}

function onClickSuccessMessage  () {
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

getData(createMarker, showAlert);
