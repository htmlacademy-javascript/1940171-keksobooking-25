const sliderElement = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');
const typeHousingField = document.querySelector('#type');
const MIN_RANGE = 0;
const MAX_RANGE = 100000;
const STEP_SLIDER = 1;
const START_POSITION = 0;

noUiSlider.create(sliderElement, {
  range: {
    min: MIN_RANGE,
    max: MAX_RANGE,
  },
  start: START_POSITION,
  step: STEP_SLIDER,
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
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: MIN_RANGE,
      max: MAX_RANGE,
    },
    step: STEP_SLIDER,
  });
});

price.addEventListener('change', () => {
  const priceIsNan = '0';
  if (price.value === '') {
    price.value = priceIsNan;
  }
  sliderElement.noUiSlider.updateOptions({
    start: price.value,
  });

});

sliderElement.noUiSlider.on('update', () => {
  price.value = sliderElement.noUiSlider.get();
});
