const sliderElement = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');
const typeHousingField = document.querySelector('#type');

const typeРousing = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

typeHousingField.addEventListener('change', () => {
  const type = typeHousingField.value;
  const min = typeРousing[type];
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: min,
      max: 100000,
    },
    start: min,
    step: 1,
  });
});

sliderElement.noUiSlider.on('update', () => {
  price.value = sliderElement.noUiSlider.get();
});
